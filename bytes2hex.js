(function(g,f){

  const n = [ typeof module ]
    .filter(function(t){ return "object" === t })
    .map(function(_){ return typeof module.exports })
    .filter(function(t){ return "object" === t})
    .map(function(_){ return f(module.exports) })

  const b = [ typeof module ]
    .filter(function(t){ return "object" != t })
    .map(function(_){
      g.Bytes2Hex = {}
      return f(g.Bytes2Hex)
    })

  return n[0] || b[0] || null

})(this, function(e){

  const bsmap = new Array(256)
  for(let i=0; i<bsmap.length; i++) {
    const j = i + 0x100
    const s = j.toString(16)
    bsmap[i] = s.substring(1)
  }

  e.a2d = function(buffer, byteOffset, byteLength){ return new DataView(buffer, byteOffset, byteLength) }

  e.b3s = function(dv, byteOffset){ return bsmap[dv.getUint8(byteOffset)] }

  e.b4s = function(dv, byteOffset, littleEndian){
    const b4 = dv.getUint16(byteOffset, littleEndian)
    const hi = b4 >>> 8
    const lo = b4 & 0xff
    return e.b3s(hi) + e.b3s(lo)
  }

  e.b5s = function(dv, byteOffset, littleEndian){
    const b5 = dv.getUint32(byteOffset, littleEndian)
    const hi = b5 >>> 16
    const lo = b5 & 0xffff
    return e.b4s(hi) + e.b4s(lo)
  }

  e.b6s = function(dv, byteOffset, littleEndian){
    const hi = dv.getUint32(byteOffset + 0, littleEndian)
    const lo = dv.getUint32(byteOffset + 4, littleEndian)
    return e.b5s(hi) + e.b5s(lo)
  }

  e.b7s = function(dv, byteOffset, littleEndian){
    return [
      dv.getUint32(byteOffset +  0, littleEndian),
      dv.getUint32(byteOffset +  4, littleEndian),
      dv.getUint32(byteOffset +  8, littleEndian),
      dv.getUint32(byteOffset + 12, littleEndian),
    ].map(function(b5){ return e.b5s(b5) })
    .join("")
  }

  e.b8s = function(dv, byteOffset, littleEndian){
    return [
      dv.getUint32(byteOffset +  0, littleEndian), dv.getUint32(byteOffset +  4, littleEndian),
      dv.getUint32(byteOffset +  8, littleEndian), dv.getUint32(byteOffset + 12, littleEndian),

      dv.getUint32(byteOffset + 16, littleEndian), dv.getUint32(byteOffset + 20, littleEndian),
      dv.getUint32(byteOffset + 24, littleEndian), dv.getUint32(byteOffset + 28, littleEndian),
    ].map(function(b5){ return e.b5s(b5) })
    .join("")
  }

  e.b9s = function(dv, byteOffset, littleEndian){
    return [
      dv.getUint32(byteOffset +  0, littleEndian), dv.getUint32(byteOffset +  4, littleEndian),
      dv.getUint32(byteOffset +  8, littleEndian), dv.getUint32(byteOffset + 12, littleEndian),
      dv.getUint32(byteOffset + 16, littleEndian), dv.getUint32(byteOffset + 20, littleEndian),
      dv.getUint32(byteOffset + 24, littleEndian), dv.getUint32(byteOffset + 28, littleEndian),

      dv.getUint32(byteOffset + 32, littleEndian), dv.getUint32(byteOffset + 36, littleEndian),
      dv.getUint32(byteOffset + 40, littleEndian), dv.getUint32(byteOffset + 44, littleEndian),
      dv.getUint32(byteOffset + 48, littleEndian), dv.getUint32(byteOffset + 52, littleEndian),
      dv.getUint32(byteOffset + 56, littleEndian), dv.getUint32(byteOffset + 60, littleEndian),
    ].map(function(b5){ return e.b5s(b5) })
    .join("")
  }

})
