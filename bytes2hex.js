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

  e.b4s = function(dv, byteOffset){
    return [
      e.b3s(dv, byteOffset+0),
      e.b3s(dv, byteOffset+1),
    ].join("")
  }

  e.b5s = function(dv, byteOffset, littleEndian){
    return [
      e.b4s(dv, byteOffset+0),
      e.b4s(dv, byteOffset+2),
    ].join("")
  }

  e.b6s = function(dv, byteOffset, littleEndian){
    return [
      e.b5s(dv, byteOffset+0),
      e.b5s(dv, byteOffset+4),
    ].join("")
  }

  e.b7s = function(dv, byteOffset, littleEndian){
    return [
      e.b6s(dv, byteOffset+0),
      e.b6s(dv, byteOffset+8),
    ].join("")
  }

})
