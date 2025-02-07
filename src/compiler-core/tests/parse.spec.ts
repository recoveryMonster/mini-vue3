import { NodeTypes } from "../src/ast";
import { baseParse } from "../src/parse";

describe("Parse", () => {
  describe("interpolation", () => {
    it("simple interpolation", () => {
      const ast = baseParse("{{ message }}");

      expect(ast.children[0]).toStrictEqual({
        type: NodeTypes.INTERPOLATION,
        content: {
          type: NodeTypes.SIMPLE_EXPRESSION,
          content: "message",
        },
      });
    });

    describe("Element", () => {
      it("simple element", () => {
        const ast = baseParse("<div></div>");

        expect(ast.children[0]).toStrictEqual({
          type: NodeTypes.ELEMENT,
          tag: "div",
          children: [],
        });
      });
    });

    describe("Text", () => {
      it("simple text", () => {
        const ast = baseParse("some text");

        expect(ast.children[0]).toStrictEqual({
          type: NodeTypes.TEXT,
          content: "some text",
        });
      });
    });
  });

  test("Hello world", () => {
    const ast = baseParse("<div>hi, {{message}}</div>");

    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.ELEMENT,
      tag: "div",
      children: [
        {
          type: NodeTypes.TEXT,
          content: "hi, ",
        },
        {
          type: NodeTypes.INTERPOLATION,
          content: {
            type: NodeTypes.SIMPLE_EXPRESSION,
            content: "message",
          },
        },
      ],
    });
  });

  test("Simple nested element", () => {
    const ast = baseParse("<div><p>hi</p>{{message}}</div>");

    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.ELEMENT,
      tag: "div",
      children: [
        {
          type: NodeTypes.ELEMENT,
          tag: "p",
          children: [
            {
              type: NodeTypes.TEXT,
              content: "hi",
            },
          ],
        },
        {
          type: NodeTypes.INTERPOLATION,
          content: {
            type: NodeTypes.SIMPLE_EXPRESSION,
            content: "message",
          },
        },
      ],
    });
  });

  test("Should throw an error when has lacking end tag", () => {
    // baseParse("<div><span></div>");
    expect(() => baseParse("<div><span></div>")).toThrow("缺少结束标签:span");
  });
});
