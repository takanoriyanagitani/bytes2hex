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

  describe("b5s", () => {

    test("19700101", () => {
      const d = new DataView(new ArrayBuffer(4))
      d.setUint32(0, 0x19700101)
      const s = Bytes2Hex.b5s(d, 0)
      expect(s).toBe("19700101")
    })

  })

  describe("b6s", () => {

    test("2020060523120900", () => {
      const d = new DataView(new ArrayBuffer(8))
      d.setUint32(0, 0x20200605)
      d.setUint32(4, 0x23120900)
      const s = Bytes2Hex.b6s(d, 0)
      expect(s).toBe("2020060523120900")
    })

  })

  describe("b7s", () => {

    test("29979245810132527315980665634333", () => {
      const d = new DataView(new ArrayBuffer(16))
      d.setUint32( 0, 0x29979245)
      d.setUint32( 4, 0x81013252)
      d.setUint32( 8, 0x73159806)
      d.setUint32(12, 0x65634333)
      const s = Bytes2Hex.b7s(d, 0)
      expect(s).toBe("29979245810132527315980665634333")
    })

  })

})
