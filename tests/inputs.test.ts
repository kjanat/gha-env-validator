import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { getBooleanInput, getInput, getMultilineInput, safeValidateInputs, validateInputs, z } from "../src/index";

describe("action inputs", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("getInput", () => {
    test("returns input value", () => {
      process.env.INPUT_API_KEY = "secret-key";

      expect(getInput("api-key")).toBe("secret-key");
    });

    test("handles spaces in input names", () => {
      process.env.INPUT_MY_INPUT = "value";

      expect(getInput("my input")).toBe("value");
    });

    test("trims whitespace", () => {
      process.env.INPUT_TOKEN = "  trimmed  ";

      expect(getInput("token")).toBe("trimmed");
    });

    test("returns undefined for missing input", () => {
      expect(getInput("missing")).toBeUndefined();
    });

    test("throws when required input is missing", () => {
      expect(() => getInput("required-input", { required: true })).toThrow(
        "Input required and not supplied: required-input",
      );
    });

    test("returns undefined for empty string", () => {
      process.env.INPUT_EMPTY = "";

      expect(getInput("empty")).toBeUndefined();
    });
  });

  describe("getBooleanInput", () => {
    test("parses 'true' as true", () => {
      process.env.INPUT_FLAG = "true";
      expect(getBooleanInput("flag")).toBe(true);
    });

    test("parses 'yes' as true", () => {
      process.env.INPUT_FLAG = "yes";
      expect(getBooleanInput("flag")).toBe(true);
    });

    test("parses '1' as true", () => {
      process.env.INPUT_FLAG = "1";
      expect(getBooleanInput("flag")).toBe(true);
    });

    test("parses 'false' as false", () => {
      process.env.INPUT_FLAG = "false";
      expect(getBooleanInput("flag")).toBe(false);
    });

    test("parses 'no' as false", () => {
      process.env.INPUT_FLAG = "no";
      expect(getBooleanInput("flag")).toBe(false);
    });

    test("parses '0' as false", () => {
      process.env.INPUT_FLAG = "0";
      expect(getBooleanInput("flag")).toBe(false);
    });

    test("is case insensitive", () => {
      process.env.INPUT_FLAG = "TRUE";
      expect(getBooleanInput("flag")).toBe(true);

      process.env.INPUT_FLAG = "False";
      expect(getBooleanInput("flag")).toBe(false);
    });

    test("returns false for missing input", () => {
      expect(getBooleanInput("missing")).toBe(false);
    });

    test("throws for invalid boolean values", () => {
      process.env.INPUT_FLAG = "invalid";

      expect(() => getBooleanInput("flag")).toThrow(
        "Input 'flag' has invalid boolean value 'invalid'",
      );
    });
  });

  describe("getMultilineInput", () => {
    test("splits multiline input into array", () => {
      process.env.INPUT_FILES = "file1.ts\nfile2.ts\nfile3.ts";

      const files = getMultilineInput("files");

      expect(files).toEqual(["file1.ts", "file2.ts", "file3.ts"]);
    });

    test("trims each line", () => {
      process.env.INPUT_ITEMS = "  item1  \n  item2  \n  item3  ";

      const items = getMultilineInput("items");

      expect(items).toEqual(["item1", "item2", "item3"]);
    });

    test("filters empty lines", () => {
      process.env.INPUT_LIST = "item1\n\nitem2\n\n\nitem3";

      const list = getMultilineInput("list");

      expect(list).toEqual(["item1", "item2", "item3"]);
    });

    test("returns empty array for missing input", () => {
      expect(getMultilineInput("missing")).toEqual([]);
    });
  });

  describe("validateInputs", () => {
    test("validates inputs against schema", () => {
      process.env.INPUT_API_KEY = "secret-key";
      process.env.INPUT_ENVIRONMENT = "production";
      process.env.INPUT_PORT = "3000";

      const inputs = validateInputs({
        "api-key": z.string().min(1),
        environment: z.enum(["dev", "staging", "production"]),
        port: z.string(),
      });

      expect(inputs["api-key"]).toBe("secret-key");
      expect(inputs.environment).toBe("production");
      expect(inputs.port).toBe("3000");
    });

    test("handles boolean inputs", () => {
      process.env.INPUT_DRY_RUN = "true";
      process.env.INPUT_SKIP_TESTS = "false";

      const inputs = validateInputs({
        "dry-run": z.boolean(),
        "skip-tests": z.boolean(),
      });

      expect(inputs["dry-run"]).toBe(true);
      expect(inputs["skip-tests"]).toBe(false);
    });

    test("applies defaults for missing inputs", () => {
      const inputs = validateInputs({
        optional: z.string().default("default-value"),
        flag: z.boolean().default(false),
      });

      expect(inputs.optional).toBe("default-value");
      expect(inputs.flag).toBe(false);
    });

    test("throws on invalid inputs", () => {
      process.env.INPUT_ENV = "invalid";

      expect(() =>
        validateInputs({
          env: z.enum(["dev", "prod"]),
        })
      ).toThrow();
    });
  });

  describe("safeValidateInputs", () => {
    test("returns success for valid inputs", () => {
      process.env.INPUT_NAME = "test";

      const result = safeValidateInputs({
        name: z.string(),
      });

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe("test");
      }
    });

    test("returns error for invalid inputs", () => {
      process.env.INPUT_PORT = "not-a-number";

      const result = safeValidateInputs({
        port: z.number(),
      });

      expect(result.success).toBe(false);
    });
  });
});
