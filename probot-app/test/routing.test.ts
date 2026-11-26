import { match, pathToRegexp } from "path-to-regexp";

describe("path-to-regexp routing", () => {
  test("rejects excessive sequential optional groups", () => {
    const route = `/${"{a}".repeat(9)}:z`;

    expect(() => pathToRegexp(route)).toThrow("Too many path combinations");
  });

  test("preserves normal optional route matching", () => {
    const route = match("/users{/:id}/delete");

    expect(route("/users/delete")).toMatchObject({ params: {} });
    expect(route("/users/123/delete")).toMatchObject({
      params: { id: "123" },
    });
    expect(route("/users/123/other")).toBe(false);
  });
});
