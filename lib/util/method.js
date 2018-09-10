var class2type = {}
var isArray = Array.isArray || function(object) {
  return object instanceof Array
}
function type(obj) {
  return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object'
}
function isWindow(obj) {
  return obj != null && obj.nodeType = obj.DOCUMENT_NODE
}
function isObject(obj) {
  return type(obj) == 'object' && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
}


exports.extend = function(target) {
  var deep,
      args = [].slice.call(arguments, 1)

  if (typeof target === 'boolean') {
    deep = target
    target = args.shift()
  }

  args.forEach(arg => {
    _extend(target, arg, deep)
  })

  return target
}

function _extend(target, source, deep) {
  for (let key in source) {
    if (deep && (isObject(source[key]) || isArray(source[key]))) {
      if (isObject(source[key]) && !isObject(target[key])) {
        target[key] = {}
      }
      if (isArray(source[key]) && !isArray(target[key])) {
        target[key] = []
      }

      _extend(target[key], source[key], deep)
    } else if (source[key] !== undefined) {
      target[key] = source[key]
    }
  }
}

