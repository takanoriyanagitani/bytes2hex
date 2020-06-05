const Bytes2Hex = require("./bytes2hex")

describe("bytes2hex.js", () => {

  describe("b3s", () => {

    test("42", () => {
      const a = new ArrayBuffer(1)
      const d = Bytes2Hex.a2d(a)
      d.setUint8(0, 0x42)
      const s = Bytes2Hex.b3s(d, 0)
      expect(s).toBe("42")
    })

  })

  describe("b4s", () => {

    test("3776", () => {
      const d = new DataView(new ArrayBuffer(2))
      d.setUint16(0, 0x3776)
      const s = Bytes2Hex.b4s(d, 0)
      expect(s).toBe("3776")
    })

  })

})
