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
  describe("b4sl", () => {

    test("0599", () => {
      const d = new DataView(new ArrayBuffer(2))
      d.setUint16(0, 0x9905)
      const s = Bytes2Hex.b4sl(d, 0)
      expect(s).toBe("0599")
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
  describe("b5sl", () => {

    test("19691231", () => {
      const d = new DataView(new ArrayBuffer(4))
      d.setUint32(0, 0x31126919)
      const s = Bytes2Hex.b5sl(d, 0)
      expect(s).toBe("19691231")
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
  describe("b6sl", () => {

    test("3776059906340333", () => {
      const d = new DataView(new ArrayBuffer(8))
      d.setUint32(0, 0x33033406)
      d.setUint32(4, 0x99057637)
      const s = Bytes2Hex.b6sl(d, 0)
      expect(s).toBe("3776059906340333")
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
  describe("b7sl", () => {

    test("42273152997924580123456789abcdef", () => {
      const d = new DataView(new ArrayBuffer(16))
      d.setUint32( 0, 0xefcdab89)
      d.setUint32( 4, 0x67452301)
      d.setUint32( 8, 0x58247999)
      d.setUint32(12, 0x52312742)
      const s = Bytes2Hex.b7sl(d, 0)
      expect(s).toBe("42273152997924580123456789abcdef")
    })

  })

})
