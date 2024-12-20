
var Godot = (() => {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    
    return (
  function(Godot) {
    Godot = Godot || {};
  
  
  
  // The Module object: Our interface to the outside world. We import
  // and export values on it. There are various ways Module can be used:
  // 1. Not defined. We create it here
  // 2. A function parameter, function(Module) { ..generated code.. }
  // 3. pre-run appended it, var Module = {}; ..generated code..
  // 4. External script tag defines var Module.
  // We need to check if Module already exists (e.g. case 3 above).
  // Substitution will be replaced with actual code on later stage of the build,
  // this way Closure Compiler will not mangle it (e.g. case 4. above).
  // Note that if you want to run closure, and also to use Module
  // after the generated code, you will need to define   var Module = {};
  // before the code. Then that object will be used in the code, and you
  // can continue to use Module afterwards as well.
  var Module = typeof Godot != 'undefined' ? Godot : {};
  
  // See https://caniuse.com/mdn-javascript_builtins_object_assign
  
  // See https://caniuse.com/mdn-javascript_builtins_bigint64array
  
  // Set up the promise that indicates the Module is initialized
  var readyPromiseResolve, readyPromiseReject;
  Module['ready'] = new Promise(function(resolve, reject) {
    readyPromiseResolve = resolve;
    readyPromiseReject = reject;
  });
  
  // --pre-jses are emitted after the Module integration code, so that they can
  // refer to Module (if they choose; they can also define Module)
  // {{PRE_JSES}}
  
  // Sometimes an existing Module object exists with properties
  // meant to overwrite the default module functionality. Here
  // we collect those properties and reapply _after_ we configure
  // the current environment's defaults to avoid having to be so
  // defensive during initialization.
  var moduleOverrides = Object.assign({}, Module);
  
  var arguments_ = [];
  var thisProgram = './this.program';
  var quit_ = (status, toThrow) => {
    throw toThrow;
  };
  
  // Determine the runtime environment we are in. You can customize this by
  // setting the ENVIRONMENT setting at compile time (see settings.js).
  
  // Attempt to auto-detect the environment
  var ENVIRONMENT_IS_WEB = typeof window == 'object';
  var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
  // N.b. Electron.js environment is simultaneously a NODE-environment, but
  // also a web environment.
  var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
  var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  
  // `/` should be present at the end if `scriptDirectory` is not empty
  var scriptDirectory = '';
  function locateFile(path) {
    if (Module['locateFile']) {
      return Module['locateFile'](path, scriptDirectory);
    }
    return scriptDirectory + path;
  }
  
  // Hooks that are implemented differently in different runtime environments.
  var read_,
      readAsync,
      readBinary,
      setWindowTitle;
  
  // Note that this includes Node.js workers when relevant (pthreads is enabled).
  // Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
  // ENVIRONMENT_IS_NODE.
  if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
      scriptDirectory = self.location.href;
    } else if (typeof document != 'undefined' && document.currentScript) { // web
      scriptDirectory = document.currentScript.src;
    }
    // When MODULARIZE, this JS may be executed later, after document.currentScript
    // is gone, so we saved it, and we use it here instead of any other info.
    if (_scriptDir) {
      scriptDirectory = _scriptDir;
    }
    // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
    // otherwise, slice off the final part of the url to find the script directory.
    // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
    // and scriptDirectory will correctly be replaced with an empty string.
    // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
    // they are removed because they could contain a slash.
    if (scriptDirectory.indexOf('blob:') !== 0) {
      scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
    } else {
      scriptDirectory = '';
    }
  
    // Differentiate the Web Worker from the Node Worker case, as reading must
    // be done differently.
    {
  // include: web_or_worker_shell_read.js
  
  
    read_ = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send(null);
        return xhr.responseText;
    }
  
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          xhr.responseType = 'arraybuffer';
          xhr.send(null);
          return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      };
    }
  
    readAsync = (url, onload, onerror) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = () => {
        if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          onload(xhr.response);
          return;
        }
        onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    }
  
  // end include: web_or_worker_shell_read.js
    }
  
    setWindowTitle = (title) => document.title = title;
  } else
  {
  }
  
  var out = Module['print'] || console.log.bind(console);
  var err = Module['printErr'] || console.warn.bind(console);
  
  // Merge back in the overrides
  Object.assign(Module, moduleOverrides);
  // Free the object hierarchy contained in the overrides, this lets the GC
  // reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
  moduleOverrides = null;
  
  // Emit code to handle expected values on the Module object. This applies Module.x
  // to the proper local x. This has two benefits: first, we only emit it if it is
  // expected to arrive, and second, by using a local everywhere else that can be
  // minified.
  
  if (Module['arguments']) arguments_ = Module['arguments'];
  
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];
  
  if (Module['quit']) quit_ = Module['quit'];
  
  // perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
  
  
  
  
  var STACK_ALIGN = 16;
  var POINTER_SIZE = 4;
  
  function getNativeTypeSize(type) {
    switch (type) {
      case 'i1': case 'i8': case 'u8': return 1;
      case 'i16': case 'u16': return 2;
      case 'i32': case 'u32': return 4;
      case 'i64': case 'u64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length - 1] === '*') {
          return POINTER_SIZE;
        }
        if (type[0] === 'i') {
          const bits = Number(type.substr(1));
          assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
          return bits / 8;
        }
        return 0;
      }
    }
  }
  
  // include: runtime_debug.js
  
  
  // end include: runtime_debug.js
  var tempRet0 = 0;
  var setTempRet0 = (value) => { tempRet0 = value; };
  var getTempRet0 = () => tempRet0;
  
  
  
  // === Preamble library stuff ===
  
  // Documentation for the public APIs defined in this file must be updated in:
  //    site/source/docs/api_reference/preamble.js.rst
  // A prebuilt local version of the documentation is available at:
  //    site/build/text/docs/api_reference/preamble.js.txt
  // You can also build docs locally as HTML or other formats in site/
  // An online HTML version (which may be of a different version of Emscripten)
  //    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html
  
  var wasmBinary;
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  var noExitRuntime = Module['noExitRuntime'] || false;
  
  if (typeof WebAssembly != 'object') {
    abort('no native wasm support detected');
  }
  
  // Wasm globals
  
  var wasmMemory;
  
  //========================================
  // Runtime essentials
  //========================================
  
  // whether we are quitting the application. no code should run after this.
  // set in exit() and abort()
  var ABORT = false;
  
  // set by exit() and abort().  Passed to 'onExit' handler.
  // NOTE: This is also used as the process return code code in shell environments
  // but only when noExitRuntime is false.
  var EXITSTATUS;
  
  /** @type {function(*, string=)} */
  function assert(condition, text) {
    if (!condition) {
      // This build was created without ASSERTIONS defined.  `assert()` should not
      // ever be called in this configuration but in case there are callers in
      // the wild leave this simple abort() implemenation here for now.
      abort(text);
    }
  }
  
  // include: runtime_strings.js
  
  
  // runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.
  
  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
  // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
  // a copy of that string as a Javascript String object.
  /**
   * heapOrArray is either a regular array, or a JavaScript typed array view.
   * @param {number} idx
   * @param {number=} maxBytesToRead
   * @return {string}
   */
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
    // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heapOrArray[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heapOrArray[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heapOrArray[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
      }
  
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
    return str;
  }
  
  // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
  // copy of that string as a Javascript String object.
  // maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
  //                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
  //                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
  //                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
  //                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
  //                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
  //                 throw JS JIT optimizations off, so it is worth to consider consistently using one
  //                 style or the other.
  /**
   * @param {number} ptr
   * @param {number=} maxBytesToRead
   * @return {string}
   */
  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
  }
  
  // Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
  // encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
  //   outIdx: The starting offset in the array to begin the copying.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array.
  //                    This count should include the null terminator,
  //                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.
  
  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
      return 0;
  
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      var u = str.charCodeAt(i); // possibly a lead surrogate
      if (u >= 0xD800 && u <= 0xDFFF) {
        var u1 = str.charCodeAt(++i);
        u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
      }
      if (u <= 0x7F) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u;
      } else if (u <= 0x7FF) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 0xC0 | (u >> 6);
        heap[outIdx++] = 0x80 | (u & 63);
      } else if (u <= 0xFFFF) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 0xE0 | (u >> 12);
        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
        heap[outIdx++] = 0x80 | (u & 63);
      } else {
        if (outIdx + 3 >= endIdx) break;
        heap[outIdx++] = 0xF0 | (u >> 18);
        heap[outIdx++] = 0x80 | ((u >> 12) & 63);
        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
        heap[outIdx++] = 0x80 | (u & 63);
      }
    }
    // Null-terminate the pointer to the buffer.
    heap[outIdx] = 0;
    return outIdx - startIdx;
  }
  
  // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Returns the number of bytes written, EXCLUDING the null terminator.
  
  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
  }
  
  // Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
  function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var c = str.charCodeAt(i); // possibly a lead surrogate
      if (c <= 0x7F) {
        len++;
      } else if (c <= 0x7FF) {
        len += 2;
      } else if (c >= 0xD800 && c <= 0xDFFF) {
        len += 4; ++i;
      } else {
        len += 3;
      }
    }
    return len;
  }
  
  // end include: runtime_strings.js
  // Memory management
  
  var HEAP,
  /** @type {!ArrayBuffer} */
    buffer,
  /** @type {!Int8Array} */
    HEAP8,
  /** @type {!Uint8Array} */
    HEAPU8,
  /** @type {!Int16Array} */
    HEAP16,
  /** @type {!Uint16Array} */
    HEAPU16,
  /** @type {!Int32Array} */
    HEAP32,
  /** @type {!Uint32Array} */
    HEAPU32,
  /** @type {!Float32Array} */
    HEAPF32,
  /** @type {!Float64Array} */
    HEAPF64;
  
  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module['HEAP8'] = HEAP8 = new Int8Array(buf);
    Module['HEAP16'] = HEAP16 = new Int16Array(buf);
    Module['HEAP32'] = HEAP32 = new Int32Array(buf);
    Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
    Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
    Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
    Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
    Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
  }
  
  var TOTAL_STACK = 5242880;
  
  var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 268435456;
  
  // include: runtime_init_table.js
  // In regular non-RELOCATABLE mode the table is exported
  // from the wasm module and this will be assigned once
  // the exports are available.
  var wasmTable;
  
  // end include: runtime_init_table.js
  // include: runtime_stack_check.js
  
  
  // end include: runtime_stack_check.js
  // include: runtime_assertions.js
  
  
  // end include: runtime_assertions.js
  var __ATPRERUN__  = []; // functions called before the runtime is initialized
  var __ATINIT__    = []; // functions called during startup
  var __ATMAIN__    = []; // functions called when main() is to be run
  var __ATEXIT__    = []; // functions called during shutdown
  var __ATPOSTRUN__ = []; // functions called after the main() is called
  
  var runtimeInitialized = false;
  
  var runtimeExited = false;
  var runtimeKeepaliveCounter = 0;
  
  function keepRuntimeAlive() {
    return noExitRuntime || runtimeKeepaliveCounter > 0;
  }
  
  function preRun() {
  
    if (Module['preRun']) {
      if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
      while (Module['preRun'].length) {
        addOnPreRun(Module['preRun'].shift());
      }
    }
  
    callRuntimeCallbacks(__ATPRERUN__);
  }
  
  function initRuntime() {
    runtimeInitialized = true;
  
    SOCKFS.root = FS.mount(SOCKFS, {}, null);
  
  if (!Module["noFSInit"] && !FS.init.initialized)
    FS.init();
  FS.ignorePermissions = false;
  
  TTY.init();
    callRuntimeCallbacks(__ATINIT__);
  }
  
  function preMain() {
    
    callRuntimeCallbacks(__ATMAIN__);
  }
  
  function exitRuntime() {
    ___funcs_on_exit(); // Native atexit() functions
    callRuntimeCallbacks(__ATEXIT__);
    FS.quit();
  TTY.shutdown();
  IDBFS.quit();
    runtimeExited = true;
  }
  
  function postRun() {
  
    if (Module['postRun']) {
      if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
      while (Module['postRun'].length) {
        addOnPostRun(Module['postRun'].shift());
      }
    }
  
    callRuntimeCallbacks(__ATPOSTRUN__);
  }
  
  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }
  
  function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }
  
  function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
  }
  
  function addOnExit(cb) {
    __ATEXIT__.unshift(cb);
  }
  
  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }
  
  // include: runtime_math.js
  
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
  
  // end include: runtime_math.js
  // A counter of dependencies for calling run(). If we need to
  // do asynchronous work before running, increment this and
  // decrement it. Incrementing must happen in a place like
  // Module.preRun (used by emcc to add file preloading).
  // Note that you can add dependencies in preRun, even though
  // it happens right before run - run will be postponed until
  // the dependencies are met.
  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
  
  function getUniqueRunDependency(id) {
    return id;
  }
  
  function addRunDependency(id) {
    runDependencies++;
  
    if (Module['monitorRunDependencies']) {
      Module['monitorRunDependencies'](runDependencies);
    }
  
  }
  
  function removeRunDependency(id) {
    runDependencies--;
  
    if (Module['monitorRunDependencies']) {
      Module['monitorRunDependencies'](runDependencies);
    }
  
    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }
      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback(); // can add another dependenciesFulfilled
      }
    }
  }
  
  /** @param {string|number=} what */
  function abort(what) {
    {
      if (Module['onAbort']) {
        Module['onAbort'](what);
      }
    }
  
    what = 'Aborted(' + what + ')';
    // TODO(sbc): Should we remove printing and leave it up to whoever
    // catches the exception?
    err(what);
  
    ABORT = true;
    EXITSTATUS = 1;
  
    what += '. Build with -sASSERTIONS for more info.';
  
    // Use a wasm runtime error, because a JS error might be seen as a foreign
    // exception, which means we'd run destructors on it. We need the error to
    // simply make the program stop.
    // FIXME This approach does not work in Wasm EH because it currently does not assume
    // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
    // a trap or not based on a hidden field within the object. So at the moment
    // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
    // allows this in the wasm spec.
  
    // Suppress closure compiler warning here. Closure compiler's builtin extern
    // defintion for WebAssembly.RuntimeError claims it takes no arguments even
    // though it can.
    // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
    /** @suppress {checkTypes} */
    var e = new WebAssembly.RuntimeError(what);
  
    readyPromiseReject(e);
    // Throw the error whether or not MODULARIZE is set because abort is used
    // in code paths apart from instantiation where an exception is expected
    // to be thrown when abort is called.
    throw e;
  }
  
  // {{MEM_INITIALIZER}}
  
  // include: memoryprofiler.js
  
  
  // end include: memoryprofiler.js
  // include: URIUtils.js
  
  
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  var dataURIPrefix = 'data:application/octet-stream;base64,';
  
  // Indicates whether filename is a base64 data URI.
  function isDataURI(filename) {
    // Prefix of data URIs emitted by SINGLE_FILE and related options.
    return filename.startsWith(dataURIPrefix);
  }
  
  // Indicates whether filename is delivered via file protocol (as opposed to http/https)
  function isFileURI(filename) {
    return filename.startsWith('file://');
  }
  
  // end include: URIUtils.js
  var wasmBinaryFile;
    wasmBinaryFile = 'godot.javascript.opt.wasm';
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
  
  function getBinary(file) {
    try {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw "both async and sync fetching of the wasm failed";
    }
    catch (err) {
      abort(err);
    }
  }
  
  function getBinaryPromise() {
    // If we don't have the binary yet, try to to load it asynchronously.
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
      if (typeof fetch == 'function'
      ) {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
          if (!response['ok']) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response['arrayBuffer']();
        }).catch(function () {
            return getBinary(wasmBinaryFile);
        });
      }
    }
  
    // Otherwise, getBinary should be able to get it synchronously
    return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
  }
  
  // Create the wasm instance.
  // Receives the wasm imports, returns the exports.
  function createWasm() {
    // prepare imports
    var info = {
      'env': asmLibraryArg,
      'wasi_snapshot_preview1': asmLibraryArg,
    };
    // Load the wasm module and create an instance of using native support in the JS engine.
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup
    /** @param {WebAssembly.Module=} module*/
    function receiveInstance(instance, module) {
      var exports = instance.exports;
  
      Module['asm'] = exports;
  
      wasmMemory = Module['asm']['memory'];
      updateGlobalBufferAndViews(wasmMemory.buffer);
  
      wasmTable = Module['asm']['__indirect_function_table'];
  
      addOnInit(Module['asm']['__wasm_call_ctors']);
  
      removeRunDependency('wasm-instantiate');
  
    }
    // we can't run yet (except in a pthread, where we have a custom sync instantiator)
    addRunDependency('wasm-instantiate');
  
    // Prefer streaming instantiation if available.
    function receiveInstantiationResult(result) {
      // 'result' is a ResultObject object which has both the module and instance.
      // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
      // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
      receiveInstance(result['instance']);
    }
  
    function instantiateArrayBuffer(receiver) {
      return getBinaryPromise().then(function(binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(function (instance) {
        return instance;
      }).then(receiver, function(reason) {
        err('failed to asynchronously prepare wasm: ' + reason);
  
        abort(reason);
      });
    }
  
    function instantiateAsync() {
      if (!wasmBinary &&
          typeof WebAssembly.instantiateStreaming == 'function' &&
          !isDataURI(wasmBinaryFile) &&
          typeof fetch == 'function') {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
          // Suppress closure warning here since the upstream definition for
          // instantiateStreaming only allows Promise<Repsponse> rather than
          // an actual Response.
          // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
          /** @suppress {checkTypes} */
          var result = WebAssembly.instantiateStreaming(response, info);
  
          return result.then(
            receiveInstantiationResult,
            function(reason) {
              // We expect the most common failure cause to be a bad MIME type for the binary,
              // in which case falling back to ArrayBuffer instantiation should work.
              err('wasm streaming compile failed: ' + reason);
              err('falling back to ArrayBuffer instantiation');
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
        });
      } else {
        return instantiateArrayBuffer(receiveInstantiationResult);
      }
    }
  
    // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.
    // Also pthreads and wasm workers initialize the wasm instance through this path.
    if (Module['instantiateWasm']) {
      try {
        var exports = Module['instantiateWasm'](info, receiveInstance);
        return exports;
      } catch(e) {
        err('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }
  
    // If instantiation fails, reject the module ready promise.
    instantiateAsync().catch(readyPromiseReject);
    return {}; // no exports yet; we'll fill them in later
  }
  
  // Globals used by JS i64 conversions (see makeSetValue)
  var tempDouble;
  var tempI64;
  
  // === Body ===
  
  var ASM_CONSTS = {
    
  };
  
  
  
  
  
  
    /** @constructor */
    function ExitStatus(status) {
        this.name = 'ExitStatus';
        this.message = 'Program terminated with exit(' + status + ')';
        this.status = status;
      }
  
    function callRuntimeCallbacks(callbacks) {
        while (callbacks.length > 0) {
          // Pass the module as the first argument.
          callbacks.shift()(Module);
        }
      }
  
    function withStackSave(f) {
        var stack = stackSave();
        var ret = f();
        stackRestore(stack);
        return ret;
      }
    function demangle(func) {
        return func;
      }
  
    function demangleAll(text) {
        var regex =
          /\b_Z[\w\d_]+/g;
        return text.replace(regex,
          function(x) {
            var y = demangle(x);
            return x === y ? x : (y + ' [' + x + ']');
          });
      }
  
    
      /**
       * @param {number} ptr
       * @param {string} type
       */
    function getValue(ptr, type = 'i8') {
        if (type.endsWith('*')) type = '*';
        switch (type) {
          case 'i1': return HEAP8[((ptr)>>0)];
          case 'i8': return HEAP8[((ptr)>>0)];
          case 'i16': return HEAP16[((ptr)>>1)];
          case 'i32': return HEAP32[((ptr)>>2)];
          case 'i64': return HEAP32[((ptr)>>2)];
          case 'float': return HEAPF32[((ptr)>>2)];
          case 'double': return HEAPF64[((ptr)>>3)];
          case '*': return HEAPU32[((ptr)>>2)];
          default: abort('invalid type for getValue: ' + type);
        }
        return null;
      }
  
    function handleException(e) {
        // Certain exception types we do not treat as errors since they are used for
        // internal control flow.
        // 1. ExitStatus, which is thrown by exit()
        // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
        //    that wish to return to JS event loop.
        if (e instanceof ExitStatus || e == 'unwind') {
          return EXITSTATUS;
        }
        quit_(1, e);
      }
  
    function jsStackTrace() {
        var error = new Error();
        if (!error.stack) {
          // IE10+ special cases: It does have callstack info, but it is only
          // populated if an Error object is thrown, so try that as a special-case.
          try {
            throw new Error();
          } catch(e) {
            error = e;
          }
          if (!error.stack) {
            return '(no stack trace available)';
          }
        }
        return error.stack.toString();
      }
  
    
      /**
       * @param {number} ptr
       * @param {number} value
       * @param {string} type
       */
    function setValue(ptr, value, type = 'i8') {
        if (type.endsWith('*')) type = '*';
        switch (type) {
          case 'i1': HEAP8[((ptr)>>0)] = value; break;
          case 'i8': HEAP8[((ptr)>>0)] = value; break;
          case 'i16': HEAP16[((ptr)>>1)] = value; break;
          case 'i32': HEAP32[((ptr)>>2)] = value; break;
          case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
          case 'float': HEAPF32[((ptr)>>2)] = value; break;
          case 'double': HEAPF64[((ptr)>>3)] = value; break;
          case '*': HEAPU32[((ptr)>>2)] = value; break;
          default: abort('invalid type for setValue: ' + type);
        }
      }
  
    function stackTrace() {
        var js = jsStackTrace();
        if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
        return demangleAll(js);
      }
  
    function writeArrayToMemory(array, buffer) {
        HEAP8.set(array, buffer);
      }
  
    function getWasmTableEntry(funcPtr) {
        // In -Os and -Oz builds, do not implement a JS side wasm table mirror for small
        // code size, but directly access wasmTable, which is a bit slower as uncached.
        return wasmTable.get(funcPtr);
      }
    function ___call_sighandler(fp, sig) {
        getWasmTableEntry(fp)(sig);
      }
  
    function getRandomDevice() {
        if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          return () => { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else
        // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
        return () => abort("randomDevice");
      }
    
    var PATH = {isAbs:(path) => path.charAt(0) === '/',splitPath:(filename) => {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        },normalizeArray:(parts, allowAboveRoot) => {
          // if the path tries to go above the root, `up` ends up > 0
          var up = 0;
          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === '.') {
              parts.splice(i, 1);
            } else if (last === '..') {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }
          // if the path is allowed to go above the root, restore leading ..s
          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift('..');
            }
          }
          return parts;
        },normalize:(path) => {
          var isAbsolute = PATH.isAbs(path),
              trailingSlash = path.substr(-1) === '/';
          // Normalize the path
          path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
          if (!path && !isAbsolute) {
            path = '.';
          }
          if (path && trailingSlash) {
            path += '/';
          }
          return (isAbsolute ? '/' : '') + path;
        },dirname:(path) => {
          var result = PATH.splitPath(path),
              root = result[0],
              dir = result[1];
          if (!root && !dir) {
            // No dirname whatsoever
            return '.';
          }
          if (dir) {
            // It has a dirname, strip trailing slash
            dir = dir.substr(0, dir.length - 1);
          }
          return root + dir;
        },basename:(path) => {
          // EMSCRIPTEN return '/'' for '/', not an empty string
          if (path === '/') return '/';
          path = PATH.normalize(path);
          path = path.replace(/\/$/, "");
          var lastSlash = path.lastIndexOf('/');
          if (lastSlash === -1) return path;
          return path.substr(lastSlash+1);
        },join:function() {
          var paths = Array.prototype.slice.call(arguments, 0);
          return PATH.normalize(paths.join('/'));
        },join2:(l, r) => {
          return PATH.normalize(l + '/' + r);
        }};
    
    var PATH_FS = {resolve:function() {
          var resolvedPath = '',
            resolvedAbsolute = false;
          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = (i >= 0) ? arguments[i] : FS.cwd();
            // Skip empty and invalid entries
            if (typeof path != 'string') {
              throw new TypeError('Arguments to path.resolve must be strings');
            } else if (!path) {
              return ''; // an invalid portion invalidates the whole thing
            }
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = PATH.isAbs(path);
          }
          // At this point the path should be resolved to a full absolute path, but
          // handle relative paths to be safe (might happen when process.cwd() fails)
          resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
          return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
        },relative:(from, to) => {
          from = PATH_FS.resolve(from).substr(1);
          to = PATH_FS.resolve(to).substr(1);
          function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
              if (arr[start] !== '') break;
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
              if (arr[end] !== '') break;
            }
            if (start > end) return [];
            return arr.slice(start, end - start + 1);
          }
          var fromParts = trim(from.split('/'));
          var toParts = trim(to.split('/'));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;
          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }
          var outputParts = [];
          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push('..');
          }
          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join('/');
        }};
    
    /** @type {function(string, boolean=, number=)} */
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }
    var TTY = {ttys:[],init:function () {
          // https://github.com/emscripten-core/emscripten/pull/1555
          // if (ENVIRONMENT_IS_NODE) {
          //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
          //   // device, it always assumes it's a TTY device. because of this, we're forcing
          //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
          //   // with text files until FS.init can be refactored.
          //   process['stdin']['setEncoding']('utf8');
          // }
        },shutdown:function() {
          // https://github.com/emscripten-core/emscripten/pull/1555
          // if (ENVIRONMENT_IS_NODE) {
          //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
          //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
          //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
          //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
          //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
          //   process['stdin']['pause']();
          // }
        },register:function(dev, ops) {
          TTY.ttys[dev] = { input: [], output: [], ops: ops };
          FS.registerDevice(dev, TTY.stream_ops);
        },stream_ops:{open:function(stream) {
            var tty = TTY.ttys[stream.node.rdev];
            if (!tty) {
              throw new FS.ErrnoError(43);
            }
            stream.tty = tty;
            stream.seekable = false;
          },close:function(stream) {
            // flush any pending line data
            stream.tty.ops.flush(stream.tty);
          },flush:function(stream) {
            stream.tty.ops.flush(stream.tty);
          },read:function(stream, buffer, offset, length, pos /* ignored */) {
            if (!stream.tty || !stream.tty.ops.get_char) {
              throw new FS.ErrnoError(60);
            }
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = stream.tty.ops.get_char(stream.tty);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },write:function(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
              throw new FS.ErrnoError(60);
            }
            try {
              for (var i = 0; i < length; i++) {
                stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
              }
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }},default_tty_ops:{get_char:function(tty) {
            if (!tty.input.length) {
              var result = null;
              if (typeof window != 'undefined' &&
                typeof window.prompt == 'function') {
                // Browser.
                result = window.prompt('Input: ');  // returns null on cancel
                if (result !== null) {
                  result += '\n';
                }
              } else if (typeof readline == 'function') {
                // Command line.
                result = readline();
                if (result !== null) {
                  result += '\n';
                }
              }
              if (!result) {
                return null;
              }
              tty.input = intArrayFromString(result, true);
            }
            return tty.input.shift();
          },put_char:function(tty, val) {
            if (val === null || val === 10) {
              out(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            } else {
              if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
            }
          },flush:function(tty) {
            if (tty.output && tty.output.length > 0) {
              out(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            }
          }},default_tty1_ops:{put_char:function(tty, val) {
            if (val === null || val === 10) {
              err(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            } else {
              if (val != 0) tty.output.push(val);
            }
          },flush:function(tty) {
            if (tty.output && tty.output.length > 0) {
              err(UTF8ArrayToString(tty.output, 0));
              tty.output = [];
            }
          }}};
    
    function zeroMemory(address, size) {
        HEAPU8.fill(0, address, address + size);
      }
    
    function alignMemory(size, alignment) {
        return Math.ceil(size / alignment) * alignment;
      }
    function mmapAlloc(size) {
        abort();
      }
    var MEMFS = {ops_table:null,mount:function(mount) {
          return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
        },createNode:function(parent, name, mode, dev) {
          if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            // no supported
            throw new FS.ErrnoError(63);
          }
          if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
              dir: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  lookup: MEMFS.node_ops.lookup,
                  mknod: MEMFS.node_ops.mknod,
                  rename: MEMFS.node_ops.rename,
                  unlink: MEMFS.node_ops.unlink,
                  rmdir: MEMFS.node_ops.rmdir,
                  readdir: MEMFS.node_ops.readdir,
                  symlink: MEMFS.node_ops.symlink
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek
                }
              },
              file: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek,
                  read: MEMFS.stream_ops.read,
                  write: MEMFS.stream_ops.write,
                  allocate: MEMFS.stream_ops.allocate,
                  mmap: MEMFS.stream_ops.mmap,
                  msync: MEMFS.stream_ops.msync
                }
              },
              link: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  readlink: MEMFS.node_ops.readlink
                },
                stream: {}
              },
              chrdev: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: FS.chrdev_stream_ops
              }
            };
          }
          var node = FS.createNode(parent, name, mode, dev);
          if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {};
          } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
            // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
            // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
            // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
            node.contents = null; 
          } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream;
          } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream;
          }
          node.timestamp = Date.now();
          // add the new node to the parent
          if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp;
          }
          return node;
        },getFileDataAsTypedArray:function(node) {
          if (!node.contents) return new Uint8Array(0);
          if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
          return new Uint8Array(node.contents);
        },expandFileStorage:function(node, newCapacity) {
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
          // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
          // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
          // avoid overshooting the allocation cap by a very large margin.
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
          if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity); // Allocate new storage.
          if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        },resizeFileStorage:function(node, newSize) {
          if (node.usedBytes == newSize) return;
          if (newSize == 0) {
            node.contents = null; // Fully decommit when requesting a resize to zero.
            node.usedBytes = 0;
          } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize); // Allocate new storage.
            if (oldContents) {
              node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
            }
            node.usedBytes = newSize;
          }
        },node_ops:{getattr:function(node) {
            var attr = {};
            // device numbers reuse inode numbers.
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;
            if (FS.isDir(node.mode)) {
              attr.size = 4096;
            } else if (FS.isFile(node.mode)) {
              attr.size = node.usedBytes;
            } else if (FS.isLink(node.mode)) {
              attr.size = node.link.length;
            } else {
              attr.size = 0;
            }
            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr;
          },setattr:function(node, attr) {
            if (attr.mode !== undefined) {
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              node.timestamp = attr.timestamp;
            }
            if (attr.size !== undefined) {
              MEMFS.resizeFileStorage(node, attr.size);
            }
          },lookup:function(parent, name) {
            throw FS.genericErrors[44];
          },mknod:function(parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev);
          },rename:function(old_node, new_dir, new_name) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            if (FS.isDir(old_node.mode)) {
              var new_node;
              try {
                new_node = FS.lookupNode(new_dir, new_name);
              } catch (e) {
              }
              if (new_node) {
                for (var i in new_node.contents) {
                  throw new FS.ErrnoError(55);
                }
              }
            }
            // do the internal rewiring
            delete old_node.parent.contents[old_node.name];
            old_node.parent.timestamp = Date.now()
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            new_dir.timestamp = old_node.parent.timestamp;
            old_node.parent = new_dir;
          },unlink:function(parent, name) {
            delete parent.contents[name];
            parent.timestamp = Date.now();
          },rmdir:function(parent, name) {
            var node = FS.lookupNode(parent, name);
            for (var i in node.contents) {
              throw new FS.ErrnoError(55);
            }
            delete parent.contents[name];
            parent.timestamp = Date.now();
          },readdir:function(node) {
            var entries = ['.', '..'];
            for (var key in node.contents) {
              if (!node.contents.hasOwnProperty(key)) {
                continue;
              }
              entries.push(key);
            }
            return entries;
          },symlink:function(parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
            node.link = oldpath;
            return node;
          },readlink:function(node) {
            if (!FS.isLink(node.mode)) {
              throw new FS.ErrnoError(28);
            }
            return node.link;
          }},stream_ops:{read:function(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= stream.node.usedBytes) return 0;
            var size = Math.min(stream.node.usedBytes - position, length);
            if (size > 8 && contents.subarray) { // non-trivial, and typed array
              buffer.set(contents.subarray(position, position + size), offset);
            } else {
              for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
            }
            return size;
          },write:function(stream, buffer, offset, length, position, canOwn) {
            // If the buffer is located in main memory (HEAP), and if
            // memory can grow, we can't hold on to references of the
            // memory buffer, as they may get invalidated. That means we
            // need to do copy its contents.
            if (buffer.buffer === HEAP8.buffer) {
              canOwn = false;
            }
    
            if (!length) return 0;
            var node = stream.node;
            node.timestamp = Date.now();
    
            if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
              if (canOwn) {
                node.contents = buffer.subarray(offset, offset + length);
                node.usedBytes = length;
                return length;
              } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
                node.contents = buffer.slice(offset, offset + length);
                node.usedBytes = length;
                return length;
              } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
                node.contents.set(buffer.subarray(offset, offset + length), position);
                return length;
              }
            }
    
            // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
            MEMFS.expandFileStorage(node, position+length);
            if (node.contents.subarray && buffer.subarray) {
              // Use typed array write which is available.
              node.contents.set(buffer.subarray(offset, offset + length), position);
            } else {
              for (var i = 0; i < length; i++) {
               node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
              }
            }
            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length;
          },llseek:function(stream, offset, whence) {
            var position = offset;
            if (whence === 1) {
              position += stream.position;
            } else if (whence === 2) {
              if (FS.isFile(stream.node.mode)) {
                position += stream.node.usedBytes;
              }
            }
            if (position < 0) {
              throw new FS.ErrnoError(28);
            }
            return position;
          },allocate:function(stream, offset, length) {
            MEMFS.expandFileStorage(stream.node, offset + length);
            stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
          },mmap:function(stream, length, position, prot, flags) {
            if (!FS.isFile(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }
            var ptr;
            var allocated;
            var contents = stream.node.contents;
            // Only make a new copy when MAP_PRIVATE is specified.
            if (!(flags & 2) && contents.buffer === buffer) {
              // We can't emulate MAP_SHARED when the file is not backed by the buffer
              // we're mapping to (e.g. the HEAP buffer).
              allocated = false;
              ptr = contents.byteOffset;
            } else {
              // Try to avoid unnecessary slices.
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }
              allocated = true;
              ptr = mmapAlloc(length);
              if (!ptr) {
                throw new FS.ErrnoError(48);
              }
              HEAP8.set(contents, ptr);
            }
            return { ptr: ptr, allocated: allocated };
          },msync:function(stream, buffer, offset, length, mmapFlags) {
            if (!FS.isFile(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }
            if (mmapFlags & 2) {
              // MAP_PRIVATE calls need not to be synced back to underlying fs
              return 0;
            }
    
            var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
            // should we check if bytesWritten and length are the same?
            return 0;
          }}};
    
    /** @param {boolean=} noRunDep */
    function asyncLoad(url, onload, onerror, noRunDep) {
        var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
        readAsync(url, (arrayBuffer) => {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (dep) removeRunDependency(dep);
        }, (event) => {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (dep) addRunDependency(dep);
      }
    
    var IDBFS = {dbs:{},indexedDB:() => {
          if (typeof indexedDB != 'undefined') return indexedDB;
          var ret = null;
          if (typeof window == 'object') ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
          assert(ret, 'IDBFS used, but indexedDB not supported');
          return ret;
        },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function(mount) {
          // reuse all of the core MEMFS functionality
          return MEMFS.mount.apply(null, arguments);
        },syncfs:(mount, populate, callback) => {
          IDBFS.getLocalSet(mount, (err, local) => {
            if (err) return callback(err);
    
            IDBFS.getRemoteSet(mount, (err, remote) => {
              if (err) return callback(err);
    
              var src = populate ? remote : local;
              var dst = populate ? local : remote;
    
              IDBFS.reconcile(src, dst, callback);
            });
          });
        },quit:() => {
          Object.values(IDBFS.dbs).forEach((value) => value.close());
          IDBFS.dbs = {};
        },getDB:(name, callback) => {
          // check the cache first
          var db = IDBFS.dbs[name];
          if (db) {
            return callback(null, db);
          }
    
          var req;
          try {
            req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
          } catch (e) {
            return callback(e);
          }
          if (!req) {
            return callback("Unable to connect to IndexedDB");
          }
          req.onupgradeneeded = (e) => {
            var db = /** @type {IDBDatabase} */ (e.target.result);
            var transaction = e.target.transaction;
    
            var fileStore;
    
            if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
              fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
            } else {
              fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
            }
    
            if (!fileStore.indexNames.contains('timestamp')) {
              fileStore.createIndex('timestamp', 'timestamp', { unique: false });
            }
          };
          req.onsuccess = () => {
            db = /** @type {IDBDatabase} */ (req.result);
    
            // add to the cache
            IDBFS.dbs[name] = db;
            callback(null, db);
          };
          req.onerror = (e) => {
            callback(this.error);
            e.preventDefault();
          };
        },getLocalSet:(mount, callback) => {
          var entries = {};
    
          function isRealDir(p) {
            return p !== '.' && p !== '..';
          };
          function toAbsolute(root) {
            return (p) => {
              return PATH.join2(root, p);
            }
          };
    
          var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
    
          while (check.length) {
            var path = check.pop();
            var stat;
    
            try {
              stat = FS.stat(path);
            } catch (e) {
              return callback(e);
            }
    
            if (FS.isDir(stat.mode)) {
              check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
            }
    
            entries[path] = { 'timestamp': stat.mtime };
          }
    
          return callback(null, { type: 'local', entries: entries });
        },getRemoteSet:(mount, callback) => {
          var entries = {};
    
          IDBFS.getDB(mount.mountpoint, (err, db) => {
            if (err) return callback(err);
    
            try {
              var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
              transaction.onerror = (e) => {
                callback(this.error);
                e.preventDefault();
              };
    
              var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
              var index = store.index('timestamp');
    
              index.openKeyCursor().onsuccess = (event) => {
                var cursor = event.target.result;
    
                if (!cursor) {
                  return callback(null, { type: 'remote', db: db, entries: entries });
                }
    
                entries[cursor.primaryKey] = { 'timestamp': cursor.key };
    
                cursor.continue();
              };
            } catch (e) {
              return callback(e);
            }
          });
        },loadLocalEntry:(path, callback) => {
          var stat, node;
    
          try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
    
          if (FS.isDir(stat.mode)) {
            return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode });
          } else if (FS.isFile(stat.mode)) {
            // Performance consideration: storing a normal JavaScript array to a IndexedDB is much slower than storing a typed array.
            // Therefore always convert the file contents to a typed array first before writing the data to IndexedDB.
            node.contents = MEMFS.getFileDataAsTypedArray(node);
            return callback(null, { 'timestamp': stat.mtime, 'mode': stat.mode, 'contents': node.contents });
          } else {
            return callback(new Error('node type not supported'));
          }
        },storeLocalEntry:(path, entry, callback) => {
          try {
            if (FS.isDir(entry['mode'])) {
              FS.mkdirTree(path, entry['mode']);
            } else if (FS.isFile(entry['mode'])) {
              FS.writeFile(path, entry['contents'], { canOwn: true });
            } else {
              return callback(new Error('node type not supported'));
            }
    
            FS.chmod(path, entry['mode']);
            FS.utime(path, entry['timestamp'], entry['timestamp']);
          } catch (e) {
            return callback(e);
          }
    
          callback(null);
        },removeLocalEntry:(path, callback) => {
          try {
            var stat = FS.stat(path);
    
            if (FS.isDir(stat.mode)) {
              FS.rmdir(path);
            } else if (FS.isFile(stat.mode)) {
              FS.unlink(path);
            }
          } catch (e) {
            return callback(e);
          }
    
          callback(null);
        },loadRemoteEntry:(store, path, callback) => {
          var req = store.get(path);
          req.onsuccess = (event) => { callback(null, event.target.result); };
          req.onerror = (e) => {
            callback(this.error);
            e.preventDefault();
          };
        },storeRemoteEntry:(store, path, entry, callback) => {
          try {
            var req = store.put(entry, path);
          } catch (e) {
            callback(e);
            return;
          }
          req.onsuccess = () => { callback(null); };
          req.onerror = (e) => {
            callback(this.error);
            e.preventDefault();
          };
        },removeRemoteEntry:(store, path, callback) => {
          var req = store.delete(path);
          req.onsuccess = () => { callback(null); };
          req.onerror = (e) => {
            callback(this.error);
            e.preventDefault();
          };
        },reconcile:(src, dst, callback) => {
          var total = 0;
    
          var create = [];
          Object.keys(src.entries).forEach(function (key) {
            var e = src.entries[key];
            var e2 = dst.entries[key];
            if (!e2 || e['timestamp'].getTime() != e2['timestamp'].getTime()) {
              create.push(key);
              total++;
            }
          });
    
          var remove = [];
          Object.keys(dst.entries).forEach(function (key) {
            if (!src.entries[key]) {
              remove.push(key);
              total++;
            }
          });
    
          if (!total) {
            return callback(null);
          }
    
          var errored = false;
          var db = src.type === 'remote' ? src.db : dst.db;
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
    
          function done(err) {
            if (err && !errored) {
              errored = true;
              return callback(err);
            }
          };
    
          transaction.onerror = (e) => {
            done(this.error);
            e.preventDefault();
          };
    
          transaction.oncomplete = (e) => {
            if (!errored) {
              callback(null);
            }
          };
    
          // sort paths in ascending order so directory entries are created
          // before the files inside them
          create.sort().forEach((path) => {
            if (dst.type === 'local') {
              IDBFS.loadRemoteEntry(store, path, (err, entry) => {
                if (err) return done(err);
                IDBFS.storeLocalEntry(path, entry, done);
              });
            } else {
              IDBFS.loadLocalEntry(path, (err, entry) => {
                if (err) return done(err);
                IDBFS.storeRemoteEntry(store, path, entry, done);
              });
            }
          });
    
          // sort paths in descending order so files are deleted before their
          // parent directories
          remove.sort().reverse().forEach((path) => {
            if (dst.type === 'local') {
              IDBFS.removeLocalEntry(path, done);
            } else {
              IDBFS.removeRemoteEntry(store, path, done);
            }
          });
        }};
    var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path, opts = {}) => {
          path = PATH_FS.resolve(FS.cwd(), path);
    
          if (!path) return { path: '', node: null };
    
          var defaults = {
            follow_mount: true,
            recurse_count: 0
          };
          opts = Object.assign(defaults, opts)
    
          if (opts.recurse_count > 8) {  // max recursive lookup of 8
            throw new FS.ErrnoError(32);
          }
    
          // split the path
          var parts = PATH.normalizeArray(path.split('/').filter((p) => !!p), false);
    
          // start at the root
          var current = FS.root;
          var current_path = '/';
    
          for (var i = 0; i < parts.length; i++) {
            var islast = (i === parts.length-1);
            if (islast && opts.parent) {
              // stop resolving
              break;
            }
    
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
    
            // jump to the mount's root node if this is a mountpoint
            if (FS.isMountpoint(current)) {
              if (!islast || (islast && opts.follow_mount)) {
                current = current.mounted.root;
              }
            }
    
            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (!islast || opts.follow) {
              var count = 0;
              while (FS.isLink(current.mode)) {
                var link = FS.readlink(current_path);
                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
    
                var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
                current = lookup.node;
    
                if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                  throw new FS.ErrnoError(32);
                }
              }
            }
          }
    
          return { path: current_path, node: current };
        },getPath:(node) => {
          var path;
          while (true) {
            if (FS.isRoot(node)) {
              var mount = node.mount.mountpoint;
              if (!path) return mount;
              return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
            }
            path = path ? node.name + '/' + path : node.name;
            node = node.parent;
          }
        },hashName:(parentid, name) => {
          var hash = 0;
    
          for (var i = 0; i < name.length; i++) {
            hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
          }
          return ((parentid + hash) >>> 0) % FS.nameTable.length;
        },hashAddNode:(node) => {
          var hash = FS.hashName(node.parent.id, node.name);
          node.name_next = FS.nameTable[hash];
          FS.nameTable[hash] = node;
        },hashRemoveNode:(node) => {
          var hash = FS.hashName(node.parent.id, node.name);
          if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next;
          } else {
            var current = FS.nameTable[hash];
            while (current) {
              if (current.name_next === node) {
                current.name_next = node.name_next;
                break;
              }
              current = current.name_next;
            }
          }
        },lookupNode:(parent, name) => {
          var errCode = FS.mayLookup(parent);
          if (errCode) {
            throw new FS.ErrnoError(errCode, parent);
          }
          var hash = FS.hashName(parent.id, name);
          for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
              return node;
            }
          }
          // if we failed to find it in the cache, call into the VFS
          return FS.lookup(parent, name);
        },createNode:(parent, name, mode, rdev) => {
          var node = new FS.FSNode(parent, name, mode, rdev);
    
          FS.hashAddNode(node);
    
          return node;
        },destroyNode:(node) => {
          FS.hashRemoveNode(node);
        },isRoot:(node) => {
          return node === node.parent;
        },isMountpoint:(node) => {
          return !!node.mounted;
        },isFile:(mode) => {
          return (mode & 61440) === 32768;
        },isDir:(mode) => {
          return (mode & 61440) === 16384;
        },isLink:(mode) => {
          return (mode & 61440) === 40960;
        },isChrdev:(mode) => {
          return (mode & 61440) === 8192;
        },isBlkdev:(mode) => {
          return (mode & 61440) === 24576;
        },isFIFO:(mode) => {
          return (mode & 61440) === 4096;
        },isSocket:(mode) => {
          return (mode & 49152) === 49152;
        },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:(str) => {
          var flags = FS.flagModes[str];
          if (typeof flags == 'undefined') {
            throw new Error('Unknown file open mode: ' + str);
          }
          return flags;
        },flagsToPermissionString:(flag) => {
          var perms = ['r', 'w', 'rw'][flag & 3];
          if ((flag & 512)) {
            perms += 'w';
          }
          return perms;
        },nodePermissions:(node, perms) => {
          if (FS.ignorePermissions) {
            return 0;
          }
          // return 0 if any user, group or owner bits are set.
          if (perms.includes('r') && !(node.mode & 292)) {
            return 2;
          } else if (perms.includes('w') && !(node.mode & 146)) {
            return 2;
          } else if (perms.includes('x') && !(node.mode & 73)) {
            return 2;
          }
          return 0;
        },mayLookup:(dir) => {
          var errCode = FS.nodePermissions(dir, 'x');
          if (errCode) return errCode;
          if (!dir.node_ops.lookup) return 2;
          return 0;
        },mayCreate:(dir, name) => {
          try {
            var node = FS.lookupNode(dir, name);
            return 20;
          } catch (e) {
          }
          return FS.nodePermissions(dir, 'wx');
        },mayDelete:(dir, name, isdir) => {
          var node;
          try {
            node = FS.lookupNode(dir, name);
          } catch (e) {
            return e.errno;
          }
          var errCode = FS.nodePermissions(dir, 'wx');
          if (errCode) {
            return errCode;
          }
          if (isdir) {
            if (!FS.isDir(node.mode)) {
              return 54;
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
              return 10;
            }
          } else {
            if (FS.isDir(node.mode)) {
              return 31;
            }
          }
          return 0;
        },mayOpen:(node, flags) => {
          if (!node) {
            return 44;
          }
          if (FS.isLink(node.mode)) {
            return 32;
          } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
                (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
              return 31;
            }
          }
          return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
        },MAX_OPEN_FDS:4096,nextfd:(fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
          for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
              return fd;
            }
          }
          throw new FS.ErrnoError(33);
        },getStream:(fd) => FS.streams[fd],createStream:(stream, fd_start, fd_end) => {
          if (!FS.FSStream) {
            FS.FSStream = /** @constructor */ function() {
              this.shared = { };
            };
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, {
              object: {
                /** @this {FS.FSStream} */
                get: function() { return this.node; },
                /** @this {FS.FSStream} */
                set: function(val) { this.node = val; }
              },
              isRead: {
                /** @this {FS.FSStream} */
                get: function() { return (this.flags & 2097155) !== 1; }
              },
              isWrite: {
                /** @this {FS.FSStream} */
                get: function() { return (this.flags & 2097155) !== 0; }
              },
              isAppend: {
                /** @this {FS.FSStream} */
                get: function() { return (this.flags & 1024); }
              },
              flags: {
                /** @this {FS.FSStream} */
                get: function() { return this.shared.flags; },
                /** @this {FS.FSStream} */
                set: function(val) { this.shared.flags = val; },
              },
              position : {
                /** @this {FS.FSStream} */
                get: function() { return this.shared.position; },
                /** @this {FS.FSStream} */
                set: function(val) { this.shared.position = val; },
              },
            });
          }
          // clone it, so we can return an instance of FSStream
          stream = Object.assign(new FS.FSStream(), stream);
          var fd = FS.nextfd(fd_start, fd_end);
          stream.fd = fd;
          FS.streams[fd] = stream;
          return stream;
        },closeStream:(fd) => {
          FS.streams[fd] = null;
        },chrdev_stream_ops:{open:(stream) => {
            var device = FS.getDevice(stream.node.rdev);
            // override node's stream ops with the device's
            stream.stream_ops = device.stream_ops;
            // forward the open call
            if (stream.stream_ops.open) {
              stream.stream_ops.open(stream);
            }
          },llseek:() => {
            throw new FS.ErrnoError(70);
          }},major:(dev) => ((dev) >> 8),minor:(dev) => ((dev) & 0xff),makedev:(ma, mi) => ((ma) << 8 | (mi)),registerDevice:(dev, ops) => {
          FS.devices[dev] = { stream_ops: ops };
        },getDevice:(dev) => FS.devices[dev],getMounts:(mount) => {
          var mounts = [];
          var check = [mount];
    
          while (check.length) {
            var m = check.pop();
    
            mounts.push(m);
    
            check.push.apply(check, m.mounts);
          }
    
          return mounts;
        },syncfs:(populate, callback) => {
          if (typeof populate == 'function') {
            callback = populate;
            populate = false;
          }
    
          FS.syncFSRequests++;
    
          if (FS.syncFSRequests > 1) {
            err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
          }
    
          var mounts = FS.getMounts(FS.root.mount);
          var completed = 0;
    
          function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode);
          }
    
          function done(errCode) {
            if (errCode) {
              if (!done.errored) {
                done.errored = true;
                return doCallback(errCode);
              }
              return;
            }
            if (++completed >= mounts.length) {
              doCallback(null);
            }
          };
    
          // sync all mounts
          mounts.forEach((mount) => {
            if (!mount.type.syncfs) {
              return done(null);
            }
            mount.type.syncfs(mount, populate, done);
          });
        },mount:(type, opts, mountpoint) => {
          var root = mountpoint === '/';
          var pseudo = !mountpoint;
          var node;
    
          if (root && FS.root) {
            throw new FS.ErrnoError(10);
          } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    
            mountpoint = lookup.path;  // use the absolute path
            node = lookup.node;
    
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
    
            if (!FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
          }
    
          var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
          };
    
          // create a root node for the fs
          var mountRoot = type.mount(mount);
          mountRoot.mount = mount;
          mount.root = mountRoot;
    
          if (root) {
            FS.root = mountRoot;
          } else if (node) {
            // set as a mountpoint
            node.mounted = mount;
    
            // add the new mount to the current mount's children
            if (node.mount) {
              node.mount.mounts.push(mount);
            }
          }
    
          return mountRoot;
        },unmount:(mountpoint) => {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
    
          if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28);
          }
    
          // destroy the nodes for this mount, and all its child mounts
          var node = lookup.node;
          var mount = node.mounted;
          var mounts = FS.getMounts(mount);
    
          Object.keys(FS.nameTable).forEach((hash) => {
            var current = FS.nameTable[hash];
    
            while (current) {
              var next = current.name_next;
    
              if (mounts.includes(current.mount)) {
                FS.destroyNode(current);
              }
    
              current = next;
            }
          });
    
          // no longer a mountpoint
          node.mounted = null;
    
          // remove this mount from the child mounts
          var idx = node.mount.mounts.indexOf(mount);
          node.mount.mounts.splice(idx, 1);
        },lookup:(parent, name) => {
          return parent.node_ops.lookup(parent, name);
        },mknod:(path, mode, dev) => {
          var lookup = FS.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path);
          if (!name || name === '.' || name === '..') {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.mayCreate(parent, name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.mknod(parent, name, mode, dev);
        },create:(path, mode) => {
          mode = mode !== undefined ? mode : 438 /* 0666 */;
          mode &= 4095;
          mode |= 32768;
          return FS.mknod(path, mode, 0);
        },mkdir:(path, mode) => {
          mode = mode !== undefined ? mode : 511 /* 0777 */;
          mode &= 511 | 512;
          mode |= 16384;
          return FS.mknod(path, mode, 0);
        },mkdirTree:(path, mode) => {
          var dirs = path.split('/');
          var d = '';
          for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i]) continue;
            d += '/' + dirs[i];
            try {
              FS.mkdir(d, mode);
            } catch(e) {
              if (e.errno != 20) throw e;
            }
          }
        },mkdev:(path, mode, dev) => {
          if (typeof dev == 'undefined') {
            dev = mode;
            mode = 438 /* 0666 */;
          }
          mode |= 8192;
          return FS.mknod(path, mode, dev);
        },symlink:(oldpath, newpath) => {
          if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44);
          }
          var lookup = FS.lookupPath(newpath, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var newname = PATH.basename(newpath);
          var errCode = FS.mayCreate(parent, newname);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.symlink(parent, newname, oldpath);
        },rename:(old_path, new_path) => {
          var old_dirname = PATH.dirname(old_path);
          var new_dirname = PATH.dirname(new_path);
          var old_name = PATH.basename(old_path);
          var new_name = PATH.basename(new_path);
          // parents must exist
          var lookup, old_dir, new_dir;
    
          // let the errors from non existant directories percolate up
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
    
          if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
          // need to be part of the same mount
          if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75);
          }
          // source must exist
          var old_node = FS.lookupNode(old_dir, old_name);
          // old path should not be an ancestor of the new path
          var relative = PATH_FS.relative(old_path, new_dirname);
          if (relative.charAt(0) !== '.') {
            throw new FS.ErrnoError(28);
          }
          // new path should not be an ancestor of the old path
          relative = PATH_FS.relative(new_path, old_dirname);
          if (relative.charAt(0) !== '.') {
            throw new FS.ErrnoError(55);
          }
          // see if the new path already exists
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {
            // not fatal
          }
          // early out if nothing needs to change
          if (old_node === new_node) {
            return;
          }
          // we'll need to delete the old entry
          var isdir = FS.isDir(old_node.mode);
          var errCode = FS.mayDelete(old_dir, old_name, isdir);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          // need delete permissions if we'll be overwriting.
          // need create permissions if new doesn't already exist.
          errCode = new_node ?
            FS.mayDelete(new_dir, new_name, isdir) :
            FS.mayCreate(new_dir, new_name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
            throw new FS.ErrnoError(10);
          }
          // if we are going to change the parent, check write permissions
          if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, 'w');
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          // remove the node from the lookup hash
          FS.hashRemoveNode(old_node);
          // do the underlying fs rename
          try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
          } catch (e) {
            throw e;
          } finally {
            // add the node back to the hash (in case node_ops.rename
            // changed its name)
            FS.hashAddNode(old_node);
          }
        },rmdir:(path) => {
          var lookup = FS.lookupPath(path, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, true);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          parent.node_ops.rmdir(parent, name);
          FS.destroyNode(node);
        },readdir:(path) => {
          var lookup = FS.lookupPath(path, { follow: true });
          var node = lookup.node;
          if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54);
          }
          return node.node_ops.readdir(node);
        },unlink:(path) => {
          var lookup = FS.lookupPath(path, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var name = PATH.basename(path);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, false);
          if (errCode) {
            // According to POSIX, we should map EISDIR to EPERM, but
            // we instead do what Linux does (and we must, as we use
            // the musl linux libc).
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          parent.node_ops.unlink(parent, name);
          FS.destroyNode(node);
        },readlink:(path) => {
          var lookup = FS.lookupPath(path);
          var link = lookup.node;
          if (!link) {
            throw new FS.ErrnoError(44);
          }
          if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28);
          }
          return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
        },stat:(path, dontFollow) => {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          var node = lookup.node;
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63);
          }
          return node.node_ops.getattr(node);
        },lstat:(path) => {
          return FS.stat(path, true);
        },chmod:(path, mode, dontFollow) => {
          var node;
          if (typeof path == 'string') {
            var lookup = FS.lookupPath(path, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, {
            mode: (mode & 4095) | (node.mode & ~4095),
            timestamp: Date.now()
          });
        },lchmod:(path, mode) => {
          FS.chmod(path, mode, true);
        },fchmod:(fd, mode) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chmod(stream.node, mode);
        },chown:(path, uid, gid, dontFollow) => {
          var node;
          if (typeof path == 'string') {
            var lookup = FS.lookupPath(path, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, {
            timestamp: Date.now()
            // we ignore the uid / gid for now
          });
        },lchown:(path, uid, gid) => {
          FS.chown(path, uid, gid, true);
        },fchown:(fd, uid, gid) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chown(stream.node, uid, gid);
        },truncate:(path, len) => {
          if (len < 0) {
            throw new FS.ErrnoError(28);
          }
          var node;
          if (typeof path == 'string') {
            var lookup = FS.lookupPath(path, { follow: true });
            node = lookup.node;
          } else {
            node = path;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.nodePermissions(node, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
          });
        },ftruncate:(fd, len) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28);
          }
          FS.truncate(stream.node, len);
        },utime:(path, atime, mtime) => {
          var lookup = FS.lookupPath(path, { follow: true });
          var node = lookup.node;
          node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
          });
        },open:(path, flags, mode) => {
          if (path === "") {
            throw new FS.ErrnoError(44);
          }
          flags = typeof flags == 'string' ? FS.modeStringToFlags(flags) : flags;
          mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
          if ((flags & 64)) {
            mode = (mode & 4095) | 32768;
          } else {
            mode = 0;
          }
          var node;
          if (typeof path == 'object') {
            node = path;
          } else {
            path = PATH.normalize(path);
            try {
              var lookup = FS.lookupPath(path, {
                follow: !(flags & 131072)
              });
              node = lookup.node;
            } catch (e) {
              // ignore
            }
          }
          // perhaps we need to create the node
          var created = false;
          if ((flags & 64)) {
            if (node) {
              // if O_CREAT and O_EXCL are set, error out if the node already exists
              if ((flags & 128)) {
                throw new FS.ErrnoError(20);
              }
            } else {
              // node doesn't exist, try to create it
              node = FS.mknod(path, mode, 0);
              created = true;
            }
          }
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          // can't truncate a device
          if (FS.isChrdev(node.mode)) {
            flags &= ~512;
          }
          // if asked only for a directory, then this must be one
          if ((flags & 65536) && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
          // check permissions, if this is not a file we just created now (it is ok to
          // create and write to a file with read-only permissions; it is read-only
          // for later use)
          if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          // do truncation if necessary
          if ((flags & 512) && !created) {
            FS.truncate(node, 0);
          }
          // we've already handled these, don't pass down to the underlying vfs
          flags &= ~(128 | 512 | 131072);
    
          // register the stream with the filesystem
          var stream = FS.createStream({
            node: node,
            path: FS.getPath(node),  // we want the absolute path to the node
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            // used by the file family libc calls (fopen, fwrite, ferror, etc.)
            ungotten: [],
            error: false
          });
          // call the new stream's open function
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
          if (Module['logReadFiles'] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};
            if (!(path in FS.readFiles)) {
              FS.readFiles[path] = 1;
            }
          }
          return stream;
        },close:(stream) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (stream.getdents) stream.getdents = null; // free readdir state
          try {
            if (stream.stream_ops.close) {
              stream.stream_ops.close(stream);
            }
          } catch (e) {
            throw e;
          } finally {
            FS.closeStream(stream.fd);
          }
          stream.fd = null;
        },isClosed:(stream) => {
          return stream.fd === null;
        },llseek:(stream, offset, whence) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70);
          }
          if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28);
          }
          stream.position = stream.stream_ops.llseek(stream, offset, whence);
          stream.ungotten = [];
          return stream.position;
        },read:(stream, buffer, offset, length, position) => {
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28);
          }
          var seeking = typeof position != 'undefined';
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
          if (!seeking) stream.position += bytesRead;
          return bytesRead;
        },write:(stream, buffer, offset, length, position, canOwn) => {
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28);
          }
          if (stream.seekable && stream.flags & 1024) {
            // seek to the end before writing in append mode
            FS.llseek(stream, 0, 2);
          }
          var seeking = typeof position != 'undefined';
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
          if (!seeking) stream.position += bytesWritten;
          return bytesWritten;
        },allocate:(stream, offset, length) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138);
          }
          stream.stream_ops.allocate(stream, offset, length);
        },mmap:(stream, length, position, prot, flags) => {
          // User requests writing to file (prot & PROT_WRITE != 0).
          // Checking if we have permissions to write to the file unless
          // MAP_PRIVATE flag is set. According to POSIX spec it is possible
          // to write to file opened in read-only mode with MAP_PRIVATE flag,
          // as all modifications will be visible only in the memory of
          // the current process.
          if ((prot & 2) !== 0
              && (flags & 2) === 0
              && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2);
          }
          if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43);
          }
          return stream.stream_ops.mmap(stream, length, position, prot, flags);
        },msync:(stream, buffer, offset, length, mmapFlags) => {
          if (!stream || !stream.stream_ops.msync) {
            return 0;
          }
          return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
        },munmap:(stream) => 0,ioctl:(stream, cmd, arg) => {
          if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59);
          }
          return stream.stream_ops.ioctl(stream, cmd, arg);
        },readFile:(path, opts = {}) => {
          opts.flags = opts.flags || 0;
          opts.encoding = opts.encoding || 'binary';
          if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
            throw new Error('Invalid encoding type "' + opts.encoding + '"');
          }
          var ret;
          var stream = FS.open(path, opts.flags);
          var stat = FS.stat(path);
          var length = stat.size;
          var buf = new Uint8Array(length);
          FS.read(stream, buf, 0, length, 0);
          if (opts.encoding === 'utf8') {
            ret = UTF8ArrayToString(buf, 0);
          } else if (opts.encoding === 'binary') {
            ret = buf;
          }
          FS.close(stream);
          return ret;
        },writeFile:(path, data, opts = {}) => {
          opts.flags = opts.flags || 577;
          var stream = FS.open(path, opts.flags, opts.mode);
          if (typeof data == 'string') {
            var buf = new Uint8Array(lengthBytesUTF8(data)+1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
          } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
          } else {
            throw new Error('Unsupported data type');
          }
          FS.close(stream);
        },cwd:() => FS.currentPath,chdir:(path) => {
          var lookup = FS.lookupPath(path, { follow: true });
          if (lookup.node === null) {
            throw new FS.ErrnoError(44);
          }
          if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54);
          }
          var errCode = FS.nodePermissions(lookup.node, 'x');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          FS.currentPath = lookup.path;
        },createDefaultDirectories:() => {
          FS.mkdir('/tmp');
          FS.mkdir('/home');
          FS.mkdir('/home/web_user');
        },createDefaultDevices:() => {
          // create /dev
          FS.mkdir('/dev');
          // setup /dev/null
          FS.registerDevice(FS.makedev(1, 3), {
            read: () => 0,
            write: (stream, buffer, offset, length, pos) => length,
          });
          FS.mkdev('/dev/null', FS.makedev(1, 3));
          // setup /dev/tty and /dev/tty1
          // stderr needs to print output using err() rather than out()
          // so we register a second tty just for it.
          TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
          TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
          FS.mkdev('/dev/tty', FS.makedev(5, 0));
          FS.mkdev('/dev/tty1', FS.makedev(6, 0));
          // setup /dev/[u]random
          var random_device = getRandomDevice();
          FS.createDevice('/dev', 'random', random_device);
          FS.createDevice('/dev', 'urandom', random_device);
          // we're not going to emulate the actual shm device,
          // just create the tmp dirs that reside in it commonly
          FS.mkdir('/dev/shm');
          FS.mkdir('/dev/shm/tmp');
        },createSpecialDirectories:() => {
          // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
          // name of the stream for fd 6 (see test_unistd_ttyname)
          FS.mkdir('/proc');
          var proc_self = FS.mkdir('/proc/self');
          FS.mkdir('/proc/self/fd');
          FS.mount({
            mount: () => {
              var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
              node.node_ops = {
                lookup: (parent, name) => {
                  var fd = +name;
                  var stream = FS.getStream(fd);
                  if (!stream) throw new FS.ErrnoError(8);
                  var ret = {
                    parent: null,
                    mount: { mountpoint: 'fake' },
                    node_ops: { readlink: () => stream.path },
                  };
                  ret.parent = ret; // make it look like a simple root node
                  return ret;
                }
              };
              return node;
            }
          }, {}, '/proc/self/fd');
        },createStandardStreams:() => {
          // TODO deprecate the old functionality of a single
          // input / output callback and that utilizes FS.createDevice
          // and instead require a unique set of stream ops
    
          // by default, we symlink the standard streams to the
          // default tty devices. however, if the standard streams
          // have been overwritten we create a unique device for
          // them instead.
          if (Module['stdin']) {
            FS.createDevice('/dev', 'stdin', Module['stdin']);
          } else {
            FS.symlink('/dev/tty', '/dev/stdin');
          }
          if (Module['stdout']) {
            FS.createDevice('/dev', 'stdout', null, Module['stdout']);
          } else {
            FS.symlink('/dev/tty', '/dev/stdout');
          }
          if (Module['stderr']) {
            FS.createDevice('/dev', 'stderr', null, Module['stderr']);
          } else {
            FS.symlink('/dev/tty1', '/dev/stderr');
          }
    
          // open default streams for the stdin, stdout and stderr devices
          var stdin = FS.open('/dev/stdin', 0);
          var stdout = FS.open('/dev/stdout', 1);
          var stderr = FS.open('/dev/stderr', 1);
        },ensureErrnoError:() => {
          if (FS.ErrnoError) return;
          FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
            this.node = node;
            this.setErrno = /** @this{Object} */ function(errno) {
              this.errno = errno;
            };
            this.setErrno(errno);
            this.message = 'FS error';
    
          };
          FS.ErrnoError.prototype = new Error();
          FS.ErrnoError.prototype.constructor = FS.ErrnoError;
          // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
          [44].forEach((code) => {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = '<generic error, no stack>';
          });
        },staticInit:() => {
          FS.ensureErrnoError();
    
          FS.nameTable = new Array(4096);
    
          FS.mount(MEMFS, {}, '/');
    
          FS.createDefaultDirectories();
          FS.createDefaultDevices();
          FS.createSpecialDirectories();
    
          FS.filesystems = {
            'MEMFS': MEMFS,
            'IDBFS': IDBFS,
          };
        },init:(input, output, error) => {
          FS.init.initialized = true;
    
          FS.ensureErrnoError();
    
          // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
          Module['stdin'] = input || Module['stdin'];
          Module['stdout'] = output || Module['stdout'];
          Module['stderr'] = error || Module['stderr'];
    
          FS.createStandardStreams();
        },quit:() => {
          FS.init.initialized = false;
          // force-flush all streams, so we get musl std streams printed out
          _fflush(0);
          // close all of our streams
          for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
              continue;
            }
            FS.close(stream);
          }
        },getMode:(canRead, canWrite) => {
          var mode = 0;
          if (canRead) mode |= 292 | 73;
          if (canWrite) mode |= 146;
          return mode;
        },findObject:(path, dontResolveLastLink) => {
          var ret = FS.analyzePath(path, dontResolveLastLink);
          if (!ret.exists) {
            return null;
          }
          return ret.object;
        },analyzePath:(path, dontResolveLastLink) => {
          // operate from within the context of the symlink's target
          try {
            var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
            path = lookup.path;
          } catch (e) {
          }
          var ret = {
            isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
            parentExists: false, parentPath: null, parentObject: null
          };
          try {
            var lookup = FS.lookupPath(path, { parent: true });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === '/';
          } catch (e) {
            ret.error = e.errno;
          };
          return ret;
        },createPath:(parent, path, canRead, canWrite) => {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          var parts = path.split('/').reverse();
          while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);
            try {
              FS.mkdir(current);
            } catch (e) {
              // ignore EEXIST
            }
            parent = current;
          }
          return current;
        },createFile:(parent, name, properties, canRead, canWrite) => {
          var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(canRead, canWrite);
          return FS.create(path, mode);
        },createDataFile:(parent, name, data, canRead, canWrite, canOwn) => {
          var path = name;
          if (parent) {
            parent = typeof parent == 'string' ? parent : FS.getPath(parent);
            path = name ? PATH.join2(parent, name) : parent;
          }
          var mode = FS.getMode(canRead, canWrite);
          var node = FS.create(path, mode);
          if (data) {
            if (typeof data == 'string') {
              var arr = new Array(data.length);
              for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
              data = arr;
            }
            // make sure we can write to the file
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode);
          }
          return node;
        },createDevice:(parent, name, input, output) => {
          var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
          var mode = FS.getMode(!!input, !!output);
          if (!FS.createDevice.major) FS.createDevice.major = 64;
          var dev = FS.makedev(FS.createDevice.major++, 0);
          // Create a fake device that a set of stream ops to emulate
          // the old behavior.
          FS.registerDevice(dev, {
            open: (stream) => {
              stream.seekable = false;
            },
            close: (stream) => {
              // flush any pending line data
              if (output && output.buffer && output.buffer.length) {
                output(10);
              }
            },
            read: (stream, buffer, offset, length, pos /* ignored */) => {
              var bytesRead = 0;
              for (var i = 0; i < length; i++) {
                var result;
                try {
                  result = input();
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
                if (result === undefined && bytesRead === 0) {
                  throw new FS.ErrnoError(6);
                }
                if (result === null || result === undefined) break;
                bytesRead++;
                buffer[offset+i] = result;
              }
              if (bytesRead) {
                stream.node.timestamp = Date.now();
              }
              return bytesRead;
            },
            write: (stream, buffer, offset, length, pos) => {
              for (var i = 0; i < length; i++) {
                try {
                  output(buffer[offset+i]);
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
              }
              if (length) {
                stream.node.timestamp = Date.now();
              }
              return i;
            }
          });
          return FS.mkdev(path, mode, dev);
        },forceLoadFile:(obj) => {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
          if (typeof XMLHttpRequest != 'undefined') {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          } else if (read_) {
            // Command-line.
            try {
              // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
              //          read() will try to parse UTF8.
              obj.contents = intArrayFromString(read_(obj.url), true);
              obj.usedBytes = obj.contents.length;
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
          } else {
            throw new Error('Cannot load without read() or XMLHttpRequest.');
          }
        },createLazyFile:(parent, name, url, canRead, canWrite) => {
          // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
          /** @constructor */
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []; // Loaded chunks. Index is the chunk number
          }
          LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = (idx / this.chunkSize)|0;
            return this.getter(chunkNum)[chunkOffset];
          };
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          };
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            // Find length
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
    
            var chunkSize = 1024*1024; // Chunk size in bytes
    
            if (!hasByteServing) chunkSize = datalength;
    
            // Function to get a range from the remote URL.
            var doXHR = (from, to) => {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
    
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    
              // Some hints to the browser that we want binary data.
              xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
    
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              if (xhr.response !== undefined) {
                return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
              }
              return intArrayFromString(xhr.responseText || '', true);
            };
            var lazyArray = this;
            lazyArray.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum+1) * chunkSize - 1; // including this byte
              end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
              return lazyArray.chunks[chunkNum];
            });
    
            if (usesGzip || !datalength) {
              // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
              chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
    
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          };
          if (typeof XMLHttpRequest != 'undefined') {
            if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
            var lazyArray = new LazyUint8Array();
            Object.defineProperties(lazyArray, {
              length: {
                get: /** @this{Object} */ function() {
                  if (!this.lengthKnown) {
                    this.cacheLength();
                  }
                  return this._length;
                }
              },
              chunkSize: {
                get: /** @this{Object} */ function() {
                  if (!this.lengthKnown) {
                    this.cacheLength();
                  }
                  return this._chunkSize;
                }
              }
            });
    
            var properties = { isDevice: false, contents: lazyArray };
          } else {
            var properties = { isDevice: false, url: url };
          }
    
          var node = FS.createFile(parent, name, properties, canRead, canWrite);
          // This is a total hack, but I want to get this lazy file code out of the
          // core of MEMFS. If we want to keep this lazy file concept I feel it should
          // be its own thin LAZYFS proxying calls to MEMFS.
          if (properties.contents) {
            node.contents = properties.contents;
          } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
          }
          // Add a function that defers querying the file size until it is asked the first time.
          Object.defineProperties(node, {
            usedBytes: {
              get: /** @this {FSNode} */ function() { return this.contents.length; }
            }
          });
          // override each stream op with one that tries to force load the lazy file first
          var stream_ops = {};
          var keys = Object.keys(node.stream_ops);
          keys.forEach((key) => {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
              FS.forceLoadFile(node);
              return fn.apply(null, arguments);
            };
          });
          function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length)
              return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) { // normal array
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents[position + i];
              }
            } else {
              for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
                buffer[offset + i] = contents.get(position + i);
              }
            }
            return size;
          }
          // use a custom read function
          stream_ops.read = (stream, buffer, offset, length, position) => {
            FS.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position)
          };
          // use a custom mmap function
          stream_ops.mmap = (stream, length, position, prot, flags) => {
            FS.forceLoadFile(node);
            var ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            writeChunks(stream, HEAP8, ptr, length, position);
            return { ptr: ptr, allocated: true };
          };
          node.stream_ops = stream_ops;
          return node;
        },createPreloadedFile:(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
          // TODO we should allow people to just pass in a complete filename instead
          // of parent and name being that we just join them anyways
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
          var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
          function processData(byteArray) {
            function finish(byteArray) {
              if (preFinish) preFinish();
              if (!dontCreateFile) {
                FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
              }
              if (onload) onload();
              removeRunDependency(dep);
            }
            if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
              if (onerror) onerror();
              removeRunDependency(dep);
            })) {
              return;
            }
            finish(byteArray);
          }
          addRunDependency(dep);
          if (typeof url == 'string') {
            asyncLoad(url, (byteArray) => processData(byteArray), onerror);
          } else {
            processData(url);
          }
        },indexedDB:() => {
          return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        },DB_NAME:() => {
          return 'EM_FS_' + window.location.pathname;
        },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(paths, onload, onerror) => {
          onload = onload || (() => {});
          onerror = onerror || (() => {});
          var indexedDB = FS.indexedDB();
          try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
          } catch (e) {
            return onerror(e);
          }
          openRequest.onupgradeneeded = () => {
            out('creating db');
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME);
          };
          openRequest.onsuccess = () => {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0, fail = 0, total = paths.length;
            function finish() {
              if (fail == 0) onload(); else onerror();
            }
            paths.forEach((path) => {
              var putRequest = files.put(FS.analyzePath(path).object.contents, path);
              putRequest.onsuccess = () => { ok++; if (ok + fail == total) finish() };
              putRequest.onerror = () => { fail++; if (ok + fail == total) finish() };
            });
            transaction.onerror = onerror;
          };
          openRequest.onerror = onerror;
        },loadFilesFromDB:(paths, onload, onerror) => {
          onload = onload || (() => {});
          onerror = onerror || (() => {});
          var indexedDB = FS.indexedDB();
          try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
          } catch (e) {
            return onerror(e);
          }
          openRequest.onupgradeneeded = onerror; // no database to load from
          openRequest.onsuccess = () => {
            var db = openRequest.result;
            try {
              var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
            } catch(e) {
              onerror(e);
              return;
            }
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0, fail = 0, total = paths.length;
            function finish() {
              if (fail == 0) onload(); else onerror();
            }
            paths.forEach((path) => {
              var getRequest = files.get(path);
              getRequest.onsuccess = () => {
                if (FS.analyzePath(path).exists) {
                  FS.unlink(path);
                }
                FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                ok++;
                if (ok + fail == total) finish();
              };
              getRequest.onerror = () => { fail++; if (ok + fail == total) finish() };
            });
            transaction.onerror = onerror;
          };
          openRequest.onerror = onerror;
        }};
    var SOCKFS = {mount:function(mount) {
          // If Module['websocket'] has already been defined (e.g. for configuring
          // the subprotocol/url) use that, if not initialise it to a new object.
          Module['websocket'] = (Module['websocket'] && 
                                 ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
    
          // Add the Event registration mechanism to the exported websocket configuration
          // object so we can register network callbacks from native JavaScript too.
          // For more documentation see system/include/emscripten/emscripten.h
          Module['websocket']._callbacks = {};
          Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
            if ('function' === typeof callback) {
              this._callbacks[event] = callback;
            }
            return this;
          };
    
          Module['websocket'].emit = /** @this{Object} */ function(event, param) {
            if ('function' === typeof this._callbacks[event]) {
              this._callbacks[event].call(this, param);
            }
          };
    
          // If debug is enabled register simple default logging callbacks for each Event.
    
          return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
        },createSocket:function(family, type, protocol) {
          type &= ~526336; // Some applications may pass it; it makes no sense for a single process.
          var streaming = type == 1;
          if (streaming && protocol && protocol != 6) {
            throw new FS.ErrnoError(66); // if SOCK_STREAM, must be tcp or 0.
          }
    
          // create our internal socket structure
          var sock = {
            family: family,
            type: type,
            protocol: protocol,
            server: null,
            error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
            peers: {},
            pending: [],
            recv_queue: [],
            sock_ops: SOCKFS.websocket_sock_ops
          };
    
          // create the filesystem node to store the socket structure
          var name = SOCKFS.nextname();
          var node = FS.createNode(SOCKFS.root, name, 49152, 0);
          node.sock = sock;
    
          // and the wrapping stream that enables library functions such
          // as read and write to indirectly interact with the socket
          var stream = FS.createStream({
            path: name,
            node: node,
            flags: 2,
            seekable: false,
            stream_ops: SOCKFS.stream_ops
          });
    
          // map the new stream to the socket structure (sockets have a 1:1
          // relationship with a stream)
          sock.stream = stream;
    
          return sock;
        },getSocket:function(fd) {
          var stream = FS.getStream(fd);
          if (!stream || !FS.isSocket(stream.node.mode)) {
            return null;
          }
          return stream.node.sock;
        },stream_ops:{poll:function(stream) {
            var sock = stream.node.sock;
            return sock.sock_ops.poll(sock);
          },ioctl:function(stream, request, varargs) {
            var sock = stream.node.sock;
            return sock.sock_ops.ioctl(sock, request, varargs);
          },read:function(stream, buffer, offset, length, position /* ignored */) {
            var sock = stream.node.sock;
            var msg = sock.sock_ops.recvmsg(sock, length);
            if (!msg) {
              // socket is closed
              return 0;
            }
            buffer.set(msg.buffer, offset);
            return msg.buffer.length;
          },write:function(stream, buffer, offset, length, position /* ignored */) {
            var sock = stream.node.sock;
            return sock.sock_ops.sendmsg(sock, buffer, offset, length);
          },close:function(stream) {
            var sock = stream.node.sock;
            sock.sock_ops.close(sock);
          }},nextname:function() {
          if (!SOCKFS.nextname.current) {
            SOCKFS.nextname.current = 0;
          }
          return 'socket[' + (SOCKFS.nextname.current++) + ']';
        },websocket_sock_ops:{createPeer:function(sock, addr, port) {
            var ws;
    
            if (typeof addr == 'object') {
              ws = addr;
              addr = null;
              port = null;
            }
    
            if (ws) {
              // for sockets that've already connected (e.g. we're the server)
              // we can inspect the _socket property for the address
              if (ws._socket) {
                addr = ws._socket.remoteAddress;
                port = ws._socket.remotePort;
              }
              // if we're just now initializing a connection to the remote,
              // inspect the url property
              else {
                var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                if (!result) {
                  throw new Error('WebSocket URL must be in the format ws(s)://address:port');
                }
                addr = result[1];
                port = parseInt(result[2], 10);
              }
            } else {
              // create the actual websocket object and connect
              try {
                // runtimeConfig gets set to true if WebSocket runtime configuration is available.
                var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
    
                // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
                // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
                var url = 'ws:#'.replace('#', '//');
    
                if (runtimeConfig) {
                  if ('string' === typeof Module['websocket']['url']) {
                    url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                  }
                }
    
                if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                  var parts = addr.split('/');
                  url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
                }
    
                // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
                var subProtocols = 'binary'; // The default value is 'binary'
    
                if (runtimeConfig) {
                  if ('string' === typeof Module['websocket']['subprotocol']) {
                    subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                  }
                }
    
                // The default WebSocket options
                var opts = undefined;
    
                if (subProtocols !== 'null') {
                  // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                  // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                  subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
    
                  opts = subProtocols;
                }
    
                // some webservers (azure) does not support subprotocol header
                if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                  subProtocols = 'null';
                  opts = undefined;
                }
    
                // If node we use the ws library.
                var WebSocketConstructor;
                {
                  WebSocketConstructor = WebSocket;
                }
                ws = new WebSocketConstructor(url, opts);
                ws.binaryType = 'arraybuffer';
              } catch (e) {
                throw new FS.ErrnoError(23);
              }
            }
    
            var peer = {
              addr: addr,
              port: port,
              socket: ws,
              dgram_send_queue: []
            };
    
            SOCKFS.websocket_sock_ops.addPeer(sock, peer);
            SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
    
            // if this is a bound dgram socket, send the port number first to allow
            // us to override the ephemeral port reported to us by remotePort on the
            // remote end.
            if (sock.type === 2 && typeof sock.sport != 'undefined') {
              peer.dgram_send_queue.push(new Uint8Array([
                  255, 255, 255, 255,
                  'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                  ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
              ]));
            }
    
            return peer;
          },getPeer:function(sock, addr, port) {
            return sock.peers[addr + ':' + port];
          },addPeer:function(sock, peer) {
            sock.peers[peer.addr + ':' + peer.port] = peer;
          },removePeer:function(sock, peer) {
            delete sock.peers[peer.addr + ':' + peer.port];
          },handlePeerEvents:function(sock, peer) {
            var first = true;
    
            var handleOpen = function () {
    
              Module['websocket'].emit('open', sock.stream.fd);
    
              try {
                var queued = peer.dgram_send_queue.shift();
                while (queued) {
                  peer.socket.send(queued);
                  queued = peer.dgram_send_queue.shift();
                }
              } catch (e) {
                // not much we can do here in the way of proper error handling as we've already
                // lied and said this data was sent. shut it down.
                peer.socket.close();
              }
            };
    
            function handleMessage(data) {
              if (typeof data == 'string') {
                var encoder = new TextEncoder(); // should be utf-8
                data = encoder.encode(data); // make a typed array from the string
              } else {
                assert(data.byteLength !== undefined); // must receive an ArrayBuffer
                if (data.byteLength == 0) {
                  // An empty ArrayBuffer will emit a pseudo disconnect event
                  // as recv/recvmsg will return zero which indicates that a socket
                  // has performed a shutdown although the connection has not been disconnected yet.
                  return;
                }
                data = new Uint8Array(data); // make a typed array view on the array buffer
              }
    
              // if this is the port message, override the peer's port with it
              var wasfirst = first;
              first = false;
              if (wasfirst &&
                  data.length === 10 &&
                  data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                  data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
                // update the peer's port and it's key in the peer map
                var newport = ((data[8] << 8) | data[9]);
                SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                peer.port = newport;
                SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                return;
              }
    
              sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
              Module['websocket'].emit('message', sock.stream.fd);
            };
    
            if (ENVIRONMENT_IS_NODE) {
              peer.socket.on('open', handleOpen);
              peer.socket.on('message', function(data, isBinary) {
                if (!isBinary) {
                  return;
                }
                handleMessage((new Uint8Array(data)).buffer); // copy from node Buffer -> ArrayBuffer
              });
              peer.socket.on('close', function() {
                Module['websocket'].emit('close', sock.stream.fd);
              });
              peer.socket.on('error', function(error) {
                // Although the ws library may pass errors that may be more descriptive than
                // ECONNREFUSED they are not necessarily the expected error code e.g. 
                // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
                // is still probably the most useful thing to do.
                sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
                Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
                // don't throw
              });
            } else {
              peer.socket.onopen = handleOpen;
              peer.socket.onclose = function() {
                Module['websocket'].emit('close', sock.stream.fd);
              };
              peer.socket.onmessage = function peer_socket_onmessage(event) {
                handleMessage(event.data);
              };
              peer.socket.onerror = function(error) {
                // The WebSocket spec only allows a 'simple event' to be thrown on error,
                // so we only really know as much as ECONNREFUSED.
                sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
                Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              };
            }
          },poll:function(sock) {
            if (sock.type === 1 && sock.server) {
              // listen sockets should only say they're available for reading
              // if there are pending clients.
              return sock.pending.length ? (64 | 1) : 0;
            }
    
            var mask = 0;
            var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
              SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
              null;
    
            if (sock.recv_queue.length ||
                !dest ||  // connection-less sockets are always ready to read
                (dest && dest.socket.readyState === dest.socket.CLOSING) ||
                (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
              mask |= (64 | 1);
            }
    
            if (!dest ||  // connection-less sockets are always ready to write
                (dest && dest.socket.readyState === dest.socket.OPEN)) {
              mask |= 4;
            }
    
            if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
                (dest && dest.socket.readyState === dest.socket.CLOSED)) {
              mask |= 16;
            }
    
            return mask;
          },ioctl:function(sock, request, arg) {
            switch (request) {
              case 21531:
                var bytes = 0;
                if (sock.recv_queue.length) {
                  bytes = sock.recv_queue[0].data.length;
                }
                HEAP32[((arg)>>2)] = bytes;
                return 0;
              default:
                return 28;
            }
          },close:function(sock) {
            // if we've spawned a listen server, close it
            if (sock.server) {
              try {
                sock.server.close();
              } catch (e) {
              }
              sock.server = null;
            }
            // close any peer connections
            var peers = Object.keys(sock.peers);
            for (var i = 0; i < peers.length; i++) {
              var peer = sock.peers[peers[i]];
              try {
                peer.socket.close();
              } catch (e) {
              }
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
            }
            return 0;
          },bind:function(sock, addr, port) {
            if (typeof sock.saddr != 'undefined' || typeof sock.sport != 'undefined') {
              throw new FS.ErrnoError(28);  // already bound
            }
            sock.saddr = addr;
            sock.sport = port;
            // in order to emulate dgram sockets, we need to launch a listen server when
            // binding on a connection-less socket
            // note: this is only required on the server side
            if (sock.type === 2) {
              // close the existing server if it exists
              if (sock.server) {
                sock.server.close();
                sock.server = null;
              }
              // swallow error operation not supported error that occurs when binding in the
              // browser where this isn't supported
              try {
                sock.sock_ops.listen(sock, 0);
              } catch (e) {
                if (!(e instanceof FS.ErrnoError)) throw e;
                if (e.errno !== 138) throw e;
              }
            }
          },connect:function(sock, addr, port) {
            if (sock.server) {
              throw new FS.ErrnoError(138);
            }
    
            // TODO autobind
            // if (!sock.addr && sock.type == 2) {
            // }
    
            // early out if we're already connected / in the middle of connecting
            if (typeof sock.daddr != 'undefined' && typeof sock.dport != 'undefined') {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (dest) {
                if (dest.socket.readyState === dest.socket.CONNECTING) {
                  throw new FS.ErrnoError(7);
                } else {
                  throw new FS.ErrnoError(30);
                }
              }
            }
    
            // add the socket to our peer list and set our
            // destination address / port to match
            var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
            sock.daddr = peer.addr;
            sock.dport = peer.port;
    
            // always "fail" in non-blocking mode
            throw new FS.ErrnoError(26);
          },listen:function(sock, backlog) {
            if (!ENVIRONMENT_IS_NODE) {
              throw new FS.ErrnoError(138);
            }
          },accept:function(listensock) {
            if (!listensock.server || !listensock.pending.length) {
              throw new FS.ErrnoError(28);
            }
            var newsock = listensock.pending.shift();
            newsock.stream.flags = listensock.stream.flags;
            return newsock;
          },getname:function(sock, peer) {
            var addr, port;
            if (peer) {
              if (sock.daddr === undefined || sock.dport === undefined) {
                throw new FS.ErrnoError(53);
              }
              addr = sock.daddr;
              port = sock.dport;
            } else {
              // TODO saddr and sport will be set for bind()'d UDP sockets, but what
              // should we be returning for TCP sockets that've been connect()'d?
              addr = sock.saddr || 0;
              port = sock.sport || 0;
            }
            return { addr: addr, port: port };
          },sendmsg:function(sock, buffer, offset, length, addr, port) {
            if (sock.type === 2) {
              // connection-less sockets will honor the message address,
              // and otherwise fall back to the bound destination address
              if (addr === undefined || port === undefined) {
                addr = sock.daddr;
                port = sock.dport;
              }
              // if there was no address to fall back to, error out
              if (addr === undefined || port === undefined) {
                throw new FS.ErrnoError(17);
              }
            } else {
              // connection-based sockets will only use the bound
              addr = sock.daddr;
              port = sock.dport;
            }
    
            // find the peer for the destination address
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
    
            // early out if not connected with a connection-based socket
            if (sock.type === 1) {
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                throw new FS.ErrnoError(53);
              } else if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(6);
              }
            }
    
            // create a copy of the incoming data to send, as the WebSocket API
            // doesn't work entirely with an ArrayBufferView, it'll just send
            // the entire underlying buffer
            if (ArrayBuffer.isView(buffer)) {
              offset += buffer.byteOffset;
              buffer = buffer.buffer;
            }
    
            var data;
              data = buffer.slice(offset, offset + length);
    
            // if we're emulating a connection-less dgram socket and don't have
            // a cached connection, queue the buffer to send upon connect and
            // lie, saying the data was sent now.
            if (sock.type === 2) {
              if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
                // if we're not connected, open a new connection
                if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                  dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
                }
                dest.dgram_send_queue.push(data);
                return length;
              }
            }
    
            try {
              // send the actual data
              dest.socket.send(data);
              return length;
            } catch (e) {
              throw new FS.ErrnoError(28);
            }
          },recvmsg:function(sock, length) {
            // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
            if (sock.type === 1 && sock.server) {
              // tcp servers should not be recv()'ing on the listen socket
              throw new FS.ErrnoError(53);
            }
    
            var queued = sock.recv_queue.shift();
            if (!queued) {
              if (sock.type === 1) {
                var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
    
                if (!dest) {
                  // if we have a destination address but are not connected, error out
                  throw new FS.ErrnoError(53);
                }
                if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                  // return null if the socket has closed
                  return null;
                }
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(6);
              }
              throw new FS.ErrnoError(6);
            }
    
            // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
            // requeued TCP data it'll be an ArrayBufferView
            var queuedLength = queued.data.byteLength || queued.data.length;
            var queuedOffset = queued.data.byteOffset || 0;
            var queuedBuffer = queued.data.buffer || queued.data;
            var bytesRead = Math.min(length, queuedLength);
            var res = {
              buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
              addr: queued.addr,
              port: queued.port
            };
    
            // push back any unread data for TCP connections
            if (sock.type === 1 && bytesRead < queuedLength) {
              var bytesRemaining = queuedLength - bytesRead;
              queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
              sock.recv_queue.unshift(queued);
            }
    
            return res;
          }}};
    function getSocketFromFD(fd) {
        var socket = SOCKFS.getSocket(fd);
        if (!socket) throw new FS.ErrnoError(8);
        return socket;
      }
    
    function setErrNo(value) {
        HEAP32[((___errno_location())>>2)] = value;
        return value;
      }
    var Sockets = {BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
    
    function inetPton4(str) {
        var b = str.split('.');
        for (var i = 0; i < 4; i++) {
          var tmp = Number(b[i]);
          if (isNaN(tmp)) return null;
          b[i] = tmp;
        }
        return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
      }
    
    /** @suppress {checkTypes} */
    function jstoi_q(str) {
        return parseInt(str);
      }
    function inetPton6(str) {
        var words;
        var w, offset, z, i;
        /* http://home.deds.nl/~aeron/regex/ */
        var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
        var parts = [];
        if (!valid6regx.test(str)) {
          return null;
        }
        if (str === "::") {
          return [0, 0, 0, 0, 0, 0, 0, 0];
        }
        // Z placeholder to keep track of zeros when splitting the string on ":"
        if (str.startsWith("::")) {
          str = str.replace("::", "Z:"); // leading zeros case
        } else {
          str = str.replace("::", ":Z:");
        }
    
        if (str.indexOf(".") > 0) {
          // parse IPv4 embedded stress
          str = str.replace(new RegExp('[.]', 'g'), ":");
          words = str.split(":");
          words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
          words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
          words = words.slice(0, words.length-2);
        } else {
          words = str.split(":");
        }
    
        offset = 0; z = 0;
        for (w=0; w < words.length; w++) {
          if (typeof words[w] == 'string') {
            if (words[w] === 'Z') {
              // compressed zeros - write appropriate number of zero words
              for (z = 0; z < (8 - words.length+1); z++) {
                parts[w+z] = 0;
              }
              offset = z-1;
            } else {
              // parse hex to field to 16-bit value and write it in network byte-order
              parts[w+offset] = _htons(parseInt(words[w],16));
            }
          } else {
            // parsed IPv4 words
            parts[w+offset] = words[w];
          }
        }
        return [
          (parts[1] << 16) | parts[0],
          (parts[3] << 16) | parts[2],
          (parts[5] << 16) | parts[4],
          (parts[7] << 16) | parts[6]
        ];
      }
    /** @param {number=} addrlen */
    function writeSockaddr(sa, family, addr, port, addrlen) {
        switch (family) {
          case 2:
            addr = inetPton4(addr);
            zeroMemory(sa, 16);
            if (addrlen) {
              HEAP32[((addrlen)>>2)] = 16;
            }
            HEAP16[((sa)>>1)] = family;
            HEAP32[(((sa)+(4))>>2)] = addr;
            HEAP16[(((sa)+(2))>>1)] = _htons(port);
            break;
          case 10:
            addr = inetPton6(addr);
            zeroMemory(sa, 28);
            if (addrlen) {
              HEAP32[((addrlen)>>2)] = 28;
            }
            HEAP32[((sa)>>2)] = family;
            HEAP32[(((sa)+(8))>>2)] = addr[0];
            HEAP32[(((sa)+(12))>>2)] = addr[1];
            HEAP32[(((sa)+(16))>>2)] = addr[2];
            HEAP32[(((sa)+(20))>>2)] = addr[3];
            HEAP16[(((sa)+(2))>>1)] = _htons(port);
            break;
          default:
            return 5;
        }
        return 0;
      }
    
    var DNS = {address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
          // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
          var res = inetPton4(name);
          if (res !== null) {
            return name;
          }
          res = inetPton6(name);
          if (res !== null) {
            return name;
          }
    
          // See if this name is already mapped.
          var addr;
    
          if (DNS.address_map.addrs[name]) {
            addr = DNS.address_map.addrs[name];
          } else {
            var id = DNS.address_map.id++;
            assert(id < 65535, 'exceeded max address mappings of 65535');
    
            addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
    
            DNS.address_map.names[addr] = name;
            DNS.address_map.addrs[name] = addr;
          }
    
          return addr;
        },lookup_addr:function (addr) {
          if (DNS.address_map.names[addr]) {
            return DNS.address_map.names[addr];
          }
    
          return null;
        }};
    
    var SYSCALLS = {DEFAULT_POLLMASK:5,calculateAt:function(dirfd, path, allowEmpty) {
          if (PATH.isAbs(path)) {
            return path;
          }
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          if (path.length == 0) {
            if (!allowEmpty) {
              throw new FS.ErrnoError(44);;
            }
            return dir;
          }
          return PATH.join2(dir, path);
        },doStat:function(func, path, buf) {
          try {
            var stat = func(path);
          } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
              // an error occurred while trying to look up the path; we should just report ENOTDIR
              return -54;
            }
            throw e;
          }
          HEAP32[((buf)>>2)] = stat.dev;
          HEAP32[(((buf)+(8))>>2)] = stat.ino;
          HEAP32[(((buf)+(12))>>2)] = stat.mode;
          HEAP32[(((buf)+(16))>>2)] = stat.nlink;
          HEAP32[(((buf)+(20))>>2)] = stat.uid;
          HEAP32[(((buf)+(24))>>2)] = stat.gid;
          HEAP32[(((buf)+(28))>>2)] = stat.rdev;
          (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
          HEAP32[(((buf)+(48))>>2)] = 4096;
          HEAP32[(((buf)+(52))>>2)] = stat.blocks;
          (tempI64 = [Math.floor(stat.atime.getTime() / 1000)>>>0,(tempDouble=Math.floor(stat.atime.getTime() / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
          HEAP32[(((buf)+(64))>>2)] = 0;
          (tempI64 = [Math.floor(stat.mtime.getTime() / 1000)>>>0,(tempDouble=Math.floor(stat.mtime.getTime() / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
          HEAP32[(((buf)+(80))>>2)] = 0;
          (tempI64 = [Math.floor(stat.ctime.getTime() / 1000)>>>0,(tempDouble=Math.floor(stat.ctime.getTime() / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
          HEAP32[(((buf)+(96))>>2)] = 0;
          (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(104))>>2)] = tempI64[0],HEAP32[(((buf)+(108))>>2)] = tempI64[1]);
          return 0;
        },doMsync:function(addr, stream, len, flags, offset) {
          var buffer = HEAPU8.slice(addr, addr + len);
          FS.msync(stream, buffer, offset, len, flags);
        },varargs:undefined,get:function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
          return ret;
        },getStr:function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        },getStreamFromFD:function(fd) {
          var stream = FS.getStream(fd);
          if (!stream) throw new FS.ErrnoError(8);
          return stream;
        }};
    function ___syscall_accept4(fd, addr, addrlen, flags) {
    try {
    
        var sock = getSocketFromFD(fd);
        var newsock = sock.sock_ops.accept(sock);
        if (addr) {
          var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
        }
        return newsock.stream.fd;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function inetNtop4(addr) {
        return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
      }
    
    function inetNtop6(ints) {
        //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
        //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
        //  128-bits are split into eight 16-bit words
        //  stored in network byte order (big-endian)
        //  |                80 bits               | 16 |      32 bits        |
        //  +-----------------------------------------------------------------+
        //  |               10 bytes               |  2 |      4 bytes        |
        //  +--------------------------------------+--------------------------+
        //  +               5 words                |  1 |      2 words        |
        //  +--------------------------------------+--------------------------+
        //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
        //  +--------------------------------------+----+---------------------+
        //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
        //  +--------------------------------------+----+---------------------+
        var str = "";
        var word = 0;
        var longest = 0;
        var lastzero = 0;
        var zstart = 0;
        var len = 0;
        var i = 0;
        var parts = [
          ints[0] & 0xffff,
          (ints[0] >> 16),
          ints[1] & 0xffff,
          (ints[1] >> 16),
          ints[2] & 0xffff,
          (ints[2] >> 16),
          ints[3] & 0xffff,
          (ints[3] >> 16)
        ];
    
        // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
    
        var hasipv4 = true;
        var v4part = "";
        // check if the 10 high-order bytes are all zeros (first 5 words)
        for (i = 0; i < 5; i++) {
          if (parts[i] !== 0) { hasipv4 = false; break; }
        }
    
        if (hasipv4) {
          // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
          v4part = inetNtop4(parts[6] | (parts[7] << 16));
          // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
          if (parts[5] === -1) {
            str = "::ffff:";
            str += v4part;
            return str;
          }
          // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
          if (parts[5] === 0) {
            str = "::";
            //special case IPv6 addresses
            if (v4part === "0.0.0.0") v4part = ""; // any/unspecified address
            if (v4part === "0.0.0.1") v4part = "1";// loopback address
            str += v4part;
            return str;
          }
        }
    
        // Handle all other IPv6 addresses
    
        // first run to find the longest contiguous zero words
        for (word = 0; word < 8; word++) {
          if (parts[word] === 0) {
            if (word - lastzero > 1) {
              len = 0;
            }
            lastzero = word;
            len++;
          }
          if (len > longest) {
            longest = len;
            zstart = word - longest + 1;
          }
        }
    
        for (word = 0; word < 8; word++) {
          if (longest > 1) {
            // compress contiguous zeros - to produce "::"
            if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
              if (word === zstart) {
                str += ":";
                if (zstart === 0) str += ":"; //leading zeros case
              }
              continue;
            }
          }
          // converts 16-bit words from big-endian to little-endian before converting to hex string
          str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
          str += word < 7 ? ":" : "";
        }
        return str;
      }
    function readSockaddr(sa, salen) {
        // family / port offsets are common to both sockaddr_in and sockaddr_in6
        var family = HEAP16[((sa)>>1)];
        var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
        var addr;
    
        switch (family) {
          case 2:
            if (salen !== 16) {
              return { errno: 28 };
            }
            addr = HEAP32[(((sa)+(4))>>2)];
            addr = inetNtop4(addr);
            break;
          case 10:
            if (salen !== 28) {
              return { errno: 28 };
            }
            addr = [
              HEAP32[(((sa)+(8))>>2)],
              HEAP32[(((sa)+(12))>>2)],
              HEAP32[(((sa)+(16))>>2)],
              HEAP32[(((sa)+(20))>>2)]
            ];
            addr = inetNtop6(addr);
            break;
          default:
            return { errno: 5 };
        }
    
        return { family: family, addr: addr, port: port };
      }
    /** @param {boolean=} allowNull */
    function getSocketAddress(addrp, addrlen, allowNull) {
        if (allowNull && addrp === 0) return null;
        var info = readSockaddr(addrp, addrlen);
        if (info.errno) throw new FS.ErrnoError(info.errno);
        info.addr = DNS.lookup_addr(info.addr) || info.addr;
        return info;
      }
    function ___syscall_bind(fd, addr, addrlen) {
    try {
    
        var sock = getSocketFromFD(fd);
        var info = getSocketAddress(addr, addrlen);
        sock.sock_ops.bind(sock, info.addr, info.port);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_chdir(path) {
    try {
    
        path = SYSCALLS.getStr(path);
        FS.chdir(path);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_chmod(path, mode) {
    try {
    
        path = SYSCALLS.getStr(path);
        FS.chmod(path, mode);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_connect(fd, addr, addrlen) {
    try {
    
        var sock = getSocketFromFD(fd);
        var info = getSocketAddress(addr, addrlen);
        sock.sock_ops.connect(sock, info.addr, info.port);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_faccessat(dirfd, path, amode, flags) {
    try {
    
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_fcntl64(fd, cmd, varargs) {
    SYSCALLS.varargs = varargs;
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = SYSCALLS.get();
            if (arg < 0) {
              return -28;
            }
            var newStream;
            newStream = FS.createStream(stream, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;  // FD_CLOEXEC makes no sense for a single process.
          case 3:
            return stream.flags;
          case 4: {
            var arg = SYSCALLS.get();
            stream.flags |= arg;
            return 0;
          }
          case 5:
          /* case 5: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
            
            var arg = SYSCALLS.get();
            var offset = 0;
            // We're always unlocked.
            HEAP16[(((arg)+(offset))>>1)] = 2;
            return 0;
          }
          case 6:
          case 7:
          /* case 6: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          /* case 7: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
            
            
            return 0; // Pretend that the locking is successful.
          case 16:
          case 8:
            return -28; // These are for sockets. We don't have them fully implemented yet.
          case 9:
            // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fcntl() returns that, and we set errno ourselves.
            setErrNo(28);
            return -1;
          default: {
            return -28;
          }
        }
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_fstat64(fd, buf) {
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_getcwd(buf, size) {
    try {
    
        if (size === 0) return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
        if (size < cwdLengthInBytes) return -68;
        stringToUTF8(cwd, buf, size);
        return cwdLengthInBytes;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_getdents64(fd, dirp, count) {
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd)
        if (!stream.getdents) {
          stream.getdents = FS.readdir(stream.path);
        }
    
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
    
        var idx = Math.floor(off / struct_size);
    
        while (idx < stream.getdents.length && pos + struct_size <= count) {
          var id;
          var type;
          var name = stream.getdents[idx];
          if (name === '.') {
            id = stream.node.id;
            type = 4; // DT_DIR
          }
          else if (name === '..') {
            var lookup = FS.lookupPath(stream.path, { parent: true });
            id = lookup.node.id;
            type = 4; // DT_DIR
          }
          else {
            var child = FS.lookupNode(stream.node, name);
            id = child.id;
            type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                   FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                   FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                   8;                             // DT_REG, regular file.
          }
          (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)] = tempI64[1]);
          (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)] = tempI64[1]);
          HEAP16[(((dirp + pos)+(16))>>1)] = 280;
          HEAP8[(((dirp + pos)+(18))>>0)] = type;
          stringToUTF8(name, dirp + pos + 19, 256);
          pos += struct_size;
          idx += 1;
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_ioctl(fd, op, varargs) {
    SYSCALLS.varargs = varargs;
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509:
          case 21505: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty) return -59;
            return 0; // no-op, not actually adjusting terminal settings
          }
          case 21519: {
            if (!stream.tty) return -59;
            var argp = SYSCALLS.get();
            HEAP32[((argp)>>2)] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty) return -59;
            return -28; // not supported
          }
          case 21531: {
            var argp = SYSCALLS.get();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            // TODO: in theory we should write to the winsize struct that gets
            // passed in, but for now musl doesn't read anything on it
            if (!stream.tty) return -59;
            return 0;
          }
          case 21524: {
            // TODO: technically, this ioctl call should change the window size.
            // but, since emscripten doesn't have any concept of a terminal window
            // yet, we'll just silently throw it away as we do TIOCGWINSZ
            if (!stream.tty) return -59;
            return 0;
          }
          default: return -28; // not supported
        }
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_listen(fd, backlog) {
    try {
    
        var sock = getSocketFromFD(fd);
        sock.sock_ops.listen(sock, backlog);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_lstat64(path, buf) {
    try {
    
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.lstat, path, buf);
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_mkdirat(dirfd, path, mode) {
    try {
    
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_newfstatat(dirfd, path, buf, flags) {
    try {
    
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        var allowEmpty = flags & 4096;
        flags = flags & (~4352);
        path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
        return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_openat(dirfd, path, flags, varargs) {
    SYSCALLS.varargs = varargs;
    try {
    
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? SYSCALLS.get() : 0;
        return FS.open(path, flags, mode).fd;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_poll(fds, nfds, timeout) {
    try {
    
        var nonzero = 0;
        for (var i = 0; i < nfds; i++) {
          var pollfd = fds + 8 * i;
          var fd = HEAP32[((pollfd)>>2)];
          var events = HEAP16[(((pollfd)+(4))>>1)];
          var mask = 32;
          var stream = FS.getStream(fd);
          if (stream) {
            mask = SYSCALLS.DEFAULT_POLLMASK;
            if (stream.stream_ops.poll) {
              mask = stream.stream_ops.poll(stream);
            }
          }
          mask &= events | 8 | 16;
          if (mask) nonzero++;
          HEAP16[(((pollfd)+(6))>>1)] = mask;
        }
        return nonzero;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
    try {
    
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
    
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
        return len;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
    try {
    
        var sock = getSocketFromFD(fd);
        var msg = sock.sock_ops.recvmsg(sock, len);
        if (!msg) return 0; // socket is closed
        if (addr) {
          var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
        }
        HEAPU8.set(msg.buffer, buf);
        return msg.buffer.byteLength;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
    try {
    
        oldpath = SYSCALLS.getStr(oldpath);
        newpath = SYSCALLS.getStr(newpath);
        oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
        newpath = SYSCALLS.calculateAt(newdirfd, newpath);
        FS.rename(oldpath, newpath);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_rmdir(path) {
    try {
    
        path = SYSCALLS.getStr(path);
        FS.rmdir(path);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_sendmsg(fd, message, flags) {
    try {
    
        var sock = getSocketFromFD(fd);
        var iov = HEAPU32[(((message)+(8))>>2)];
        var num = HEAP32[(((message)+(12))>>2)];
        // read the address and port to send to
        var addr, port;
        var name = HEAPU32[((message)>>2)];
        var namelen = HEAP32[(((message)+(4))>>2)];
        if (name) {
          var info = readSockaddr(name, namelen);
          if (info.errno) return -info.errno;
          port = info.port;
          addr = DNS.lookup_addr(info.addr) || info.addr;
        }
        // concatenate scatter-gather arrays into one message buffer
        var total = 0;
        for (var i = 0; i < num; i++) {
          total += HEAP32[(((iov)+((8 * i) + 4))>>2)];
        }
        var view = new Uint8Array(total);
        var offset = 0;
        for (var i = 0; i < num; i++) {
          var iovbase = HEAPU32[(((iov)+((8 * i) + 0))>>2)];
          var iovlen = HEAP32[(((iov)+((8 * i) + 4))>>2)];
          for (var j = 0; j < iovlen; j++) {  
            view[offset++] = HEAP8[(((iovbase)+(j))>>0)];
          }
        }
        // write the buffer
        return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
    try {
    
        var sock = getSocketFromFD(fd);
        var dest = getSocketAddress(addr, addr_len, true);
        if (!dest) {
          // send, no address provided
          return FS.write(sock.stream, HEAP8,message, length);
        }
        // sendto an address
        return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_socket(domain, type, protocol) {
    try {
    
        var sock = SOCKFS.createSocket(domain, type, protocol);
        return sock.stream.fd;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_stat64(path, buf) {
    try {
    
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_statfs64(path, size, buf) {
    try {
    
        path = SYSCALLS.getStr(path);
        // NOTE: None of the constants here are true. We're just returning safe and
        //       sane values.
        HEAP32[(((buf)+(4))>>2)] = 4096;
        HEAP32[(((buf)+(40))>>2)] = 4096;
        HEAP32[(((buf)+(8))>>2)] = 1000000;
        HEAP32[(((buf)+(12))>>2)] = 500000;
        HEAP32[(((buf)+(16))>>2)] = 500000;
        HEAP32[(((buf)+(20))>>2)] = FS.nextInode;
        HEAP32[(((buf)+(24))>>2)] = 1000000;
        HEAP32[(((buf)+(28))>>2)] = 42;
        HEAP32[(((buf)+(44))>>2)] = 2;  // ST_NOSUID
        HEAP32[(((buf)+(36))>>2)] = 255;
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_symlink(target, linkpath) {
    try {
    
        target = SYSCALLS.getStr(target);
        linkpath = SYSCALLS.getStr(linkpath);
        FS.symlink(target, linkpath);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function ___syscall_unlinkat(dirfd, path, flags) {
    try {
    
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (flags === 0) {
          FS.unlink(path);
        } else if (flags === 512) {
          FS.rmdir(path);
        } else {
          abort('Invalid flags passed to unlinkat');
        }
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return -e.errno;
    }
    }
  
    function __dlinit(main_dso_handle) {}
  
    var dlopenMissingError =  'To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking';
    function __dlopen_js(filename, flag) {
        abort(dlopenMissingError);
      }
  
    function __dlsym_js(handle, symbol) {
        abort(dlopenMissingError);
      }
  
    function __emscripten_date_now() {
        return Date.now();
      }
  
    var nowIsMonotonic = true;;
    function __emscripten_get_now_is_monotonic() {
        return nowIsMonotonic;
      }
  
    function __emscripten_throw_longjmp() { throw Infinity; }
  
    function readI53FromI64(ptr) {
        return HEAPU32[ptr>>2] + HEAP32[ptr+4>>2] * 4294967296;
      }
    function __gmtime_js(time, tmPtr) {
        var date = new Date(readI53FromI64(time)*1000);
        HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
        HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
        HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
        HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
        HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
        HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
        HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
        var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
        var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
        HEAP32[(((tmPtr)+(28))>>2)] = yday;
      }
  
    function __localtime_js(time, tmPtr) {
        var date = new Date(readI53FromI64(time)*1000);
        HEAP32[((tmPtr)>>2)] = date.getSeconds();
        HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
        HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
        HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
        HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
        HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
        HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
    
        var start = new Date(date.getFullYear(), 0, 1);
        var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
        HEAP32[(((tmPtr)+(28))>>2)] = yday;
        HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
    
        // Attention: DST is in December in South, and some regions don't have DST at all.
        var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
        var winterOffset = start.getTimezoneOffset();
        var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
        HEAP32[(((tmPtr)+(32))>>2)] = dst;
      }
  
    function allocateUTF8(str) {
        var size = lengthBytesUTF8(str) + 1;
        var ret = _malloc(size);
        if (ret) stringToUTF8Array(str, HEAP8, ret, size);
        return ret;
      }
    function _tzset_impl(timezone, daylight, tzname) {
        var currentYear = new Date().getFullYear();
        var winter = new Date(currentYear, 0, 1);
        var summer = new Date(currentYear, 6, 1);
        var winterOffset = winter.getTimezoneOffset();
        var summerOffset = summer.getTimezoneOffset();
    
        // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
        // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST).
        // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
        var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
    
        // timezone is specified as seconds west of UTC ("The external variable
        // `timezone` shall be set to the difference, in seconds, between
        // Coordinated Universal Time (UTC) and local standard time."), the same
        // as returned by stdTimezoneOffset.
        // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
        HEAP32[((timezone)>>2)] = stdTimezoneOffset * 60;
    
        HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
    
        function extractZone(date) {
          var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return match ? match[1] : "GMT";
        };
        var winterName = extractZone(winter);
        var summerName = extractZone(summer);
        var winterNamePtr = allocateUTF8(winterName);
        var summerNamePtr = allocateUTF8(summerName);
        if (summerOffset < winterOffset) {
          // Northern hemisphere
          HEAPU32[((tzname)>>2)] = winterNamePtr;
          HEAPU32[(((tzname)+(4))>>2)] = summerNamePtr;
        } else {
          HEAPU32[((tzname)>>2)] = summerNamePtr;
          HEAPU32[(((tzname)+(4))>>2)] = winterNamePtr;
        }
      }
    function __tzset_js(timezone, daylight, tzname) {
        // TODO: Use (malleable) environment variables instead of system settings.
        if (__tzset_js.called) return;
        __tzset_js.called = true;
        _tzset_impl(timezone, daylight, tzname);
      }
  
    function _abort() {
        abort('');
      }
  
    function runtimeKeepalivePush() {
        runtimeKeepaliveCounter += 1;
      }
    function _emscripten_set_main_loop_timing(mode, value) {
        Browser.mainLoop.timingMode = mode;
        Browser.mainLoop.timingValue = value;
    
        if (!Browser.mainLoop.func) {
          return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
        }
    
        if (!Browser.mainLoop.running) {
          runtimeKeepalivePush();
          Browser.mainLoop.running = true;
        }
        if (mode == 0 /*EM_TIMING_SETTIMEOUT*/) {
          Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
            var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now())|0;
            setTimeout(Browser.mainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
          };
          Browser.mainLoop.method = 'timeout';
        } else if (mode == 1 /*EM_TIMING_RAF*/) {
          Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
            Browser.requestAnimationFrame(Browser.mainLoop.runner);
          };
          Browser.mainLoop.method = 'rAF';
        } else if (mode == 2 /*EM_TIMING_SETIMMEDIATE*/) {
          if (typeof setImmediate == 'undefined') {
            // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
            var setImmediates = [];
            var emscriptenMainLoopMessageId = 'setimmediate';
            /** @param {Event} event */
            var Browser_setImmediate_messageHandler = (event) => {
              // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
              // so check for both cases.
              if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                event.stopPropagation();
                setImmediates.shift()();
              }
            };
            addEventListener("message", Browser_setImmediate_messageHandler, true);
            setImmediate = /** @type{function(function(): ?, ...?): number} */(function Browser_emulated_setImmediate(func) {
              setImmediates.push(func);
              if (ENVIRONMENT_IS_WORKER) {
                if (Module['setImmediates'] === undefined) Module['setImmediates'] = [];
                Module['setImmediates'].push(func);
                postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
              } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
            })
          }
          Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
            setImmediate(Browser.mainLoop.runner);
          };
          Browser.mainLoop.method = 'immediate';
        }
        return 0;
      }
    
    var _emscripten_get_now;_emscripten_get_now = () => performance.now();
    ;
    
    function _emscripten_webgl_do_commit_frame() {
        if (!GL.currentContext || !GL.currentContext.GLctx) {
          return -3;
        }
    
        if (GL.currentContext.defaultFbo) {
          GL.blitOffscreenFramebuffer(GL.currentContext);
          return 0;
        }
        if (!GL.currentContext.attributes.explicitSwapControl) {
          return -3;
        }
        // We would do GL.currentContext.GLctx.commit(); here, but the current implementation
        // in browsers has removed it - swap is implicit, so this function is a no-op for now
        // (until/unless the spec changes).
        return 0;
      }
    var _emscripten_webgl_commit_frame = _emscripten_webgl_do_commit_frame;
    
    function _proc_exit(code) {
        EXITSTATUS = code;
        if (!keepRuntimeAlive()) {
          if (Module['onExit']) Module['onExit'](code);
          ABORT = true;
        }
        quit_(code, new ExitStatus(code));
      }
    /** @param {boolean|number=} implicit */
    function exitJS(status, implicit) {
        EXITSTATUS = status;
    
        if (!keepRuntimeAlive()) {
          exitRuntime();
        }
    
        _proc_exit(status);
      }
    var _exit = exitJS;
    function maybeExit() {
        if (!keepRuntimeAlive()) {
          try {
            _exit(EXITSTATUS);
          } catch (e) {
            handleException(e);
          }
        }
      }
    
    function runtimeKeepalivePop() {
        runtimeKeepaliveCounter -= 1;
      }
    
      /**
       * @param {number=} arg
       * @param {boolean=} noSetTiming
       */
    function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
        assert(!Browser.mainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
    
        Browser.mainLoop.func = browserIterationFunc;
        Browser.mainLoop.arg = arg;
    
        var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
        function checkIsRunning() {
          if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
            runtimeKeepalivePop();
            maybeExit();
            return false;
          }
          return true;
        }
    
        // We create the loop runner here but it is not actually running until
        // _emscripten_set_main_loop_timing is called (which might happen a
        // later time).  This member signifies that the current runner has not
        // yet been started so that we can call runtimeKeepalivePush when it
        // gets it timing set for the first time.
        Browser.mainLoop.running = false;
        Browser.mainLoop.runner = function Browser_mainLoop_runner() {
          if (ABORT) return;
          if (Browser.mainLoop.queue.length > 0) {
            var start = Date.now();
            var blocker = Browser.mainLoop.queue.shift();
            blocker.func(blocker.arg);
            if (Browser.mainLoop.remainingBlockers) {
              var remaining = Browser.mainLoop.remainingBlockers;
              var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
              if (blocker.counted) {
                Browser.mainLoop.remainingBlockers = next;
              } else {
                // not counted, but move the progress along a tiny bit
                next = next + 0.5; // do not steal all the next one's progress
                Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
              }
            }
            out('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
            Browser.mainLoop.updateStatus();
    
            // catches pause/resume main loop from blocker execution
            if (!checkIsRunning()) return;
    
            setTimeout(Browser.mainLoop.runner, 0);
            return;
          }
    
          // catch pauses from non-main loop sources
          if (!checkIsRunning()) return;
    
          // Implement very basic swap interval control
          Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
          if (Browser.mainLoop.timingMode == 1/*EM_TIMING_RAF*/ && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
            // Not the scheduled time to render this frame - skip.
            Browser.mainLoop.scheduler();
            return;
          } else if (Browser.mainLoop.timingMode == 0/*EM_TIMING_SETTIMEOUT*/) {
            Browser.mainLoop.tickStartTime = _emscripten_get_now();
          }
    
          // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
          // VBO double-buffering and reduce GPU stalls.
    
          Browser.mainLoop.runIter(browserIterationFunc);
    
          // catch pauses from the main loop itself
          if (!checkIsRunning()) return;
    
          // Queue new audio data. This is important to be right after the main loop invocation, so that we will immediately be able
          // to queue the newest produced audio samples.
          // TODO: Consider adding pre- and post- rAF callbacks so that GL.newRenderingFrameStarted() and SDL.audio.queueNewAudioData()
          //       do not need to be hardcoded into this function, but can be more generic.
          if (typeof SDL == 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
    
          Browser.mainLoop.scheduler();
        }
    
        if (!noSetTiming) {
          if (fps && fps > 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 1000.0 / fps);
          else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, 1); // Do rAF by rendering each frame (no decimating)
    
          Browser.mainLoop.scheduler();
        }
    
        if (simulateInfiniteLoop) {
          throw 'unwind';
        }
      }
    
    function callUserCallback(func) {
        if (runtimeExited || ABORT) {
          return;
        }
        try {
          func();
            maybeExit();
        } catch (e) {
          handleException(e);
        }
      }
    
    /** @param {number=} timeout */
    function safeSetTimeout(func, timeout) {
        runtimeKeepalivePush();
        return setTimeout(function() {
          runtimeKeepalivePop();
          callUserCallback(func);
        }, timeout);
      }
    
    function warnOnce(text) {
        if (!warnOnce.shown) warnOnce.shown = {};
        if (!warnOnce.shown[text]) {
          warnOnce.shown[text] = 1;
          err(text);
        }
      }
    var Browser = {mainLoop:{running:false,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function() {
            Browser.mainLoop.scheduler = null;
            // Incrementing this signals the previous main loop that it's now become old, and it must return.
            Browser.mainLoop.currentlyRunningMainloop++;
          },resume:function() {
            Browser.mainLoop.currentlyRunningMainloop++;
            var timingMode = Browser.mainLoop.timingMode;
            var timingValue = Browser.mainLoop.timingValue;
            var func = Browser.mainLoop.func;
            Browser.mainLoop.func = null;
            // do not set timing and call scheduler, we will do it on the next lines
            setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
            _emscripten_set_main_loop_timing(timingMode, timingValue);
            Browser.mainLoop.scheduler();
          },updateStatus:function() {
            if (Module['setStatus']) {
              var message = Module['statusMessage'] || 'Please wait...';
              var remaining = Browser.mainLoop.remainingBlockers;
              var expected = Browser.mainLoop.expectedBlockers;
              if (remaining) {
                if (remaining < expected) {
                  Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
                } else {
                  Module['setStatus'](message);
                }
              } else {
                Module['setStatus']('');
              }
            }
          },runIter:function(func) {
            if (ABORT) return;
            if (Module['preMainLoop']) {
              var preRet = Module['preMainLoop']();
              if (preRet === false) {
                return; // |return false| skips a frame
              }
            }
            callUserCallback(func);
            if (Module['postMainLoop']) Module['postMainLoop']();
          }},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function() {
          if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
    
          if (Browser.initted) return;
          Browser.initted = true;
    
          try {
            new Blob();
            Browser.hasBlobConstructor = true;
          } catch(e) {
            Browser.hasBlobConstructor = false;
            err("warning: no blob constructor, cannot create blobs with mimetypes");
          }
          Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? err("warning: no BlobBuilder") : null));
          Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
          if (!Module.noImageDecoding && typeof Browser.URLObject == 'undefined') {
            err("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.noImageDecoding = true;
          }
    
          // Support for plugins that can process preloaded files. You can add more of these to
          // your app by creating and appending to Module.preloadPlugins.
          //
          // Each plugin is asked if it can handle a file based on the file's name. If it can,
          // it is given the file's raw data. When it is done, it calls a callback with the file's
          // (possibly modified) data. For example, a plugin might decompress a file, or it
          // might create some side data structure for use later (like an Image element, etc.).
    
          var imagePlugin = {};
          imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
            return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
          };
          imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
            var b = null;
            if (Browser.hasBlobConstructor) {
              try {
                b = new Blob([byteArray], { type: Browser.getMimetype(name) });
                if (b.size !== byteArray.length) { // Safari bug #118630
                  // Safari's Blob can only take an ArrayBuffer
                  b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
                }
              } catch(e) {
                warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
              }
            }
            if (!b) {
              var bb = new Browser.BlobBuilder();
              bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
              b = bb.getBlob();
            }
            var url = Browser.URLObject.createObjectURL(b);
            var img = new Image();
            img.onload = () => {
              assert(img.complete, 'Image ' + name + ' could not be decoded');
              var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));
              canvas.width = img.width;
              canvas.height = img.height;
              var ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              preloadedImages[name] = canvas;
              Browser.URLObject.revokeObjectURL(url);
              if (onload) onload(byteArray);
            };
            img.onerror = (event) => {
              out('Image ' + url + ' could not be decoded');
              if (onerror) onerror();
            };
            img.src = url;
          };
          Module['preloadPlugins'].push(imagePlugin);
    
          var audioPlugin = {};
          audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
            return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
          };
          audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
            var done = false;
            function finish(audio) {
              if (done) return;
              done = true;
              preloadedAudios[name] = audio;
              if (onload) onload(byteArray);
            }
            function fail() {
              if (done) return;
              done = true;
              preloadedAudios[name] = new Audio(); // empty shim
              if (onerror) onerror();
            }
            if (Browser.hasBlobConstructor) {
              try {
                var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              } catch(e) {
                return fail();
              }
              var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
              var audio = new Audio();
              audio.addEventListener('canplaythrough', () => finish(audio), false); // use addEventListener due to chromium bug 124926
              audio.onerror = function audio_onerror(event) {
                if (done) return;
                err('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
                function encode64(data) {
                  var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                  var PAD = '=';
                  var ret = '';
                  var leftchar = 0;
                  var leftbits = 0;
                  for (var i = 0; i < data.length; i++) {
                    leftchar = (leftchar << 8) | data[i];
                    leftbits += 8;
                    while (leftbits >= 6) {
                      var curr = (leftchar >> (leftbits-6)) & 0x3f;
                      leftbits -= 6;
                      ret += BASE[curr];
                    }
                  }
                  if (leftbits == 2) {
                    ret += BASE[(leftchar&3) << 4];
                    ret += PAD + PAD;
                  } else if (leftbits == 4) {
                    ret += BASE[(leftchar&0xf) << 2];
                    ret += PAD;
                  }
                  return ret;
                }
                audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
                finish(audio); // we don't wait for confirmation this worked - but it's worth trying
              };
              audio.src = url;
              // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
              safeSetTimeout(function() {
                finish(audio); // try to use it even though it is not necessarily ready to play
              }, 10000);
            } else {
              return fail();
            }
          };
          Module['preloadPlugins'].push(audioPlugin);
    
          // Canvas event setup
    
          function pointerLockChange() {
            Browser.pointerLock = document['pointerLockElement'] === Module['canvas'] ||
                                  document['mozPointerLockElement'] === Module['canvas'] ||
                                  document['webkitPointerLockElement'] === Module['canvas'] ||
                                  document['msPointerLockElement'] === Module['canvas'];
          }
          var canvas = Module['canvas'];
          if (canvas) {
            // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
            // Module['forcedAspectRatio'] = 4 / 3;
    
            canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                        canvas['mozRequestPointerLock'] ||
                                        canvas['webkitRequestPointerLock'] ||
                                        canvas['msRequestPointerLock'] ||
                                        (() => {});
            canvas.exitPointerLock = document['exitPointerLock'] ||
                                     document['mozExitPointerLock'] ||
                                     document['webkitExitPointerLock'] ||
                                     document['msExitPointerLock'] ||
                                     (() => {}); // no-op if function does not exist
            canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
    
            document.addEventListener('pointerlockchange', pointerLockChange, false);
            document.addEventListener('mozpointerlockchange', pointerLockChange, false);
            document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
            document.addEventListener('mspointerlockchange', pointerLockChange, false);
    
            if (Module['elementPointerLock']) {
              canvas.addEventListener("click", (ev) => {
                if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
                  Module['canvas'].requestPointerLock();
                  ev.preventDefault();
                }
              }, false);
            }
          }
        },handledByPreloadPlugin:function(byteArray, fullname, finish, onerror) {
          // Ensure plugins are ready.
          Browser.init();
    
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, onerror);
              handled = true;
            }
          });
          return handled;
        },createContext:function(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
          if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx; // no need to recreate GL context if it's already been created for this canvas.
    
          var ctx;
          var contextHandle;
          if (useWebGL) {
            // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
            var contextAttributes = {
              antialias: false,
              alpha: false,
              majorVersion: (typeof WebGL2RenderingContext != 'undefined') ? 2 : 1,
            };
    
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
    
            // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
            // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
            // Browser.createContext() should not even be emitted.
            if (typeof GL != 'undefined') {
              contextHandle = GL.createContext(canvas, contextAttributes);
              if (contextHandle) {
                ctx = GL.getContext(contextHandle).GLctx;
              }
            }
          } else {
            ctx = canvas.getContext('2d');
          }
    
          if (!ctx) return null;
    
          if (setInModule) {
            if (!useWebGL) assert(typeof GLctx == 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
    
            Module.ctx = ctx;
            if (useWebGL) GL.makeContextCurrent(contextHandle);
            Module.useWebGL = useWebGL;
            Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
            Browser.init();
          }
          return ctx;
        },destroyContext:function(canvas, useWebGL, setInModule) {},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer, resizeCanvas) {
          Browser.lockPointer = lockPointer;
          Browser.resizeCanvas = resizeCanvas;
          if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
          if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
    
          var canvas = Module['canvas'];
          function fullscreenChange() {
            Browser.isFullscreen = false;
            var canvasContainer = canvas.parentNode;
            if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
                 document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
                 document['webkitCurrentFullScreenElement']) === canvasContainer) {
              canvas.exitFullscreen = Browser.exitFullscreen;
              if (Browser.lockPointer) canvas.requestPointerLock();
              Browser.isFullscreen = true;
              if (Browser.resizeCanvas) {
                Browser.setFullscreenCanvasSize();
              } else {
                Browser.updateCanvasDimensions(canvas);
              }
            } else {
              // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
              canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
              canvasContainer.parentNode.removeChild(canvasContainer);
    
              if (Browser.resizeCanvas) {
                Browser.setWindowedCanvasSize();
              } else {
                Browser.updateCanvasDimensions(canvas);
              }
            }
            if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullscreen);
            if (Module['onFullscreen']) Module['onFullscreen'](Browser.isFullscreen);
          }
    
          if (!Browser.fullscreenHandlersInstalled) {
            Browser.fullscreenHandlersInstalled = true;
            document.addEventListener('fullscreenchange', fullscreenChange, false);
            document.addEventListener('mozfullscreenchange', fullscreenChange, false);
            document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
            document.addEventListener('MSFullscreenChange', fullscreenChange, false);
          }
    
          // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
          var canvasContainer = document.createElement("div");
          canvas.parentNode.insertBefore(canvasContainer, canvas);
          canvasContainer.appendChild(canvas);
    
          // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
          canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                              canvasContainer['mozRequestFullScreen'] ||
                                              canvasContainer['msRequestFullscreen'] ||
                                             (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) : null) ||
                                             (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) : null);
    
          canvasContainer.requestFullscreen();
        },exitFullscreen:function() {
          // This is workaround for chrome. Trying to exit from fullscreen
          // not in fullscreen state will cause "TypeError: Document not active"
          // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
          if (!Browser.isFullscreen) {
            return false;
          }
    
          var CFS = document['exitFullscreen'] ||
                    document['cancelFullScreen'] ||
                    document['mozCancelFullScreen'] ||
                    document['msExitFullscreen'] ||
                    document['webkitCancelFullScreen'] ||
              (function() {});
          CFS.apply(document, []);
          return true;
        },nextRAF:0,fakeRequestAnimationFrame:function(func) {
          // try to keep 60fps between calls to here
          var now = Date.now();
          if (Browser.nextRAF === 0) {
            Browser.nextRAF = now + 1000/60;
          } else {
            while (now + 2 >= Browser.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
              Browser.nextRAF += 1000/60;
            }
          }
          var delay = Math.max(Browser.nextRAF - now, 0);
          setTimeout(func, delay);
        },requestAnimationFrame:function(func) {
          if (typeof requestAnimationFrame == 'function') {
            requestAnimationFrame(func);
            return;
          }
          var RAF = Browser.fakeRequestAnimationFrame;
          RAF(func);
        },safeSetTimeout:function(func) {
          // Legacy function, this is used by the SDL2 port so we need to keep it
          // around at least until that is updated.
          return safeSetTimeout(func);
        },safeRequestAnimationFrame:function(func) {
          runtimeKeepalivePush();
          return Browser.requestAnimationFrame(function() {
            runtimeKeepalivePop();
            callUserCallback(func);
          });
        },getMimetype:function(name) {
          return {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'bmp': 'image/bmp',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav',
            'mp3': 'audio/mpeg'
          }[name.substr(name.lastIndexOf('.')+1)];
        },getUserMedia:function(func) {
          if (!window.getUserMedia) {
            window.getUserMedia = navigator['getUserMedia'] ||
                                  navigator['mozGetUserMedia'];
          }
          window.getUserMedia(func);
        },getMovementX:function(event) {
          return event['movementX'] ||
                 event['mozMovementX'] ||
                 event['webkitMovementX'] ||
                 0;
        },getMovementY:function(event) {
          return event['movementY'] ||
                 event['mozMovementY'] ||
                 event['webkitMovementY'] ||
                 0;
        },getMouseWheelDelta:function(event) {
          var delta = 0;
          switch (event.type) {
            case 'DOMMouseScroll':
              // 3 lines make up a step
              delta = event.detail / 3;
              break;
            case 'mousewheel':
              // 120 units make up a step
              delta = event.wheelDelta / 120;
              break;
            case 'wheel':
              delta = event.deltaY
              switch (event.deltaMode) {
                case 0:
                  // DOM_DELTA_PIXEL: 100 pixels make up a step
                  delta /= 100;
                  break;
                case 1:
                  // DOM_DELTA_LINE: 3 lines make up a step
                  delta /= 3;
                  break;
                case 2:
                  // DOM_DELTA_PAGE: A page makes up 80 steps
                  delta *= 80;
                  break;
                default:
                  throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
              }
              break;
            default:
              throw 'unrecognized mouse wheel event: ' + event.type;
          }
          return delta;
        },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event) { // event should be mousemove, mousedown or mouseup
          if (Browser.pointerLock) {
            // When the pointer is locked, calculate the coordinates
            // based on the movement of the mouse.
            // Workaround for Firefox bug 764498
            if (event.type != 'mousemove' &&
                ('mozMovementX' in event)) {
              Browser.mouseMovementX = Browser.mouseMovementY = 0;
            } else {
              Browser.mouseMovementX = Browser.getMovementX(event);
              Browser.mouseMovementY = Browser.getMovementY(event);
            }
    
            // check if SDL is available
            if (typeof SDL != "undefined") {
              Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
              Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
            } else {
              // just add the mouse delta to the current absolut mouse position
              // FIXME: ideally this should be clamped against the canvas size and zero
              Browser.mouseX += Browser.mouseMovementX;
              Browser.mouseY += Browser.mouseMovementY;
            }
          } else {
            // Otherwise, calculate the movement based on the changes
            // in the coordinates.
            var rect = Module["canvas"].getBoundingClientRect();
            var cw = Module["canvas"].width;
            var ch = Module["canvas"].height;
    
            // Neither .scrollX or .pageXOffset are defined in a spec, but
            // we prefer .scrollX because it is currently in a spec draft.
            // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
            var scrollX = ((typeof window.scrollX != 'undefined') ? window.scrollX : window.pageXOffset);
            var scrollY = ((typeof window.scrollY != 'undefined') ? window.scrollY : window.pageYOffset);
    
            if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
              var touch = event.touch;
              if (touch === undefined) {
                return; // the "touch" property is only defined in SDL
    
              }
              var adjustedX = touch.pageX - (scrollX + rect.left);
              var adjustedY = touch.pageY - (scrollY + rect.top);
    
              adjustedX = adjustedX * (cw / rect.width);
              adjustedY = adjustedY * (ch / rect.height);
    
              var coords = { x: adjustedX, y: adjustedY };
    
              if (event.type === 'touchstart') {
                Browser.lastTouches[touch.identifier] = coords;
                Browser.touches[touch.identifier] = coords;
              } else if (event.type === 'touchend' || event.type === 'touchmove') {
                var last = Browser.touches[touch.identifier];
                if (!last) last = coords;
                Browser.lastTouches[touch.identifier] = last;
                Browser.touches[touch.identifier] = coords;
              }
              return;
            }
    
            var x = event.pageX - (scrollX + rect.left);
            var y = event.pageY - (scrollY + rect.top);
    
            // the canvas might be CSS-scaled compared to its backbuffer;
            // SDL-using content will want mouse coordinates in terms
            // of backbuffer units.
            x = x * (cw / rect.width);
            y = y * (ch / rect.height);
    
            Browser.mouseMovementX = x - Browser.mouseX;
            Browser.mouseMovementY = y - Browser.mouseY;
            Browser.mouseX = x;
            Browser.mouseY = y;
          }
        },resizeListeners:[],updateResizeListeners:function() {
          var canvas = Module['canvas'];
          Browser.resizeListeners.forEach(function(listener) {
            listener(canvas.width, canvas.height);
          });
        },setCanvasSize:function(width, height, noUpdates) {
          var canvas = Module['canvas'];
          Browser.updateCanvasDimensions(canvas, width, height);
          if (!noUpdates) Browser.updateResizeListeners();
        },windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function() {
          // check if SDL is available
          if (typeof SDL != "undefined") {
            var flags = HEAPU32[((SDL.screen)>>2)];
            flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
            HEAP32[((SDL.screen)>>2)] = flags;
          }
          Browser.updateCanvasDimensions(Module['canvas']);
          Browser.updateResizeListeners();
        },setWindowedCanvasSize:function() {
          // check if SDL is available
          if (typeof SDL != "undefined") {
            var flags = HEAPU32[((SDL.screen)>>2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            HEAP32[((SDL.screen)>>2)] = flags;
          }
          Browser.updateCanvasDimensions(Module['canvas']);
          Browser.updateResizeListeners();
        },updateCanvasDimensions:function(canvas, wNative, hNative) {
          if (wNative && hNative) {
            canvas.widthNative = wNative;
            canvas.heightNative = hNative;
          } else {
            wNative = canvas.widthNative;
            hNative = canvas.heightNative;
          }
          var w = wNative;
          var h = hNative;
          if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
            if (w/h < Module['forcedAspectRatio']) {
              w = Math.round(h * Module['forcedAspectRatio']);
            } else {
              h = Math.round(w / Module['forcedAspectRatio']);
            }
          }
          if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
             var factor = Math.min(screen.width / w, screen.height / h);
             w = Math.round(w * factor);
             h = Math.round(h * factor);
          }
          if (Browser.resizeCanvas) {
            if (canvas.width  != w) canvas.width  = w;
            if (canvas.height != h) canvas.height = h;
            if (typeof canvas.style != 'undefined') {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          } else {
            if (canvas.width  != wNative) canvas.width  = wNative;
            if (canvas.height != hNative) canvas.height = hNative;
            if (typeof canvas.style != 'undefined') {
              if (w != wNative || h != hNative) {
                canvas.style.setProperty( "width", w + "px", "important");
                canvas.style.setProperty("height", h + "px", "important");
              } else {
                canvas.style.removeProperty( "width");
                canvas.style.removeProperty("height");
              }
            }
          }
        }};
    function _emscripten_cancel_main_loop() {
        Browser.mainLoop.pause();
        Browser.mainLoop.func = null;
      }
  
    function _emscripten_force_exit(status) {
        noExitRuntime = false;
        runtimeKeepaliveCounter = 0;
        _exit(status);
      }
  
    function getHeapMax() {
        // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
        // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
        // for any code that deals with heap sizes, which would require special
        // casing all heap size related code to treat 0 specially.
        return 2147483648;
      }
    function _emscripten_get_heap_max() {
        return getHeapMax();
      }
  
  
    function __webgl_enable_ANGLE_instanced_arrays(ctx) {
        // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
        var ext = ctx.getExtension('ANGLE_instanced_arrays');
        if (ext) {
          ctx['vertexAttribDivisor'] = function(index, divisor) { ext['vertexAttribDivisorANGLE'](index, divisor); };
          ctx['drawArraysInstanced'] = function(mode, first, count, primcount) { ext['drawArraysInstancedANGLE'](mode, first, count, primcount); };
          ctx['drawElementsInstanced'] = function(mode, count, type, indices, primcount) { ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount); };
          return 1;
        }
      }
    
    function __webgl_enable_OES_vertex_array_object(ctx) {
        // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
        var ext = ctx.getExtension('OES_vertex_array_object');
        if (ext) {
          ctx['createVertexArray'] = function() { return ext['createVertexArrayOES'](); };
          ctx['deleteVertexArray'] = function(vao) { ext['deleteVertexArrayOES'](vao); };
          ctx['bindVertexArray'] = function(vao) { ext['bindVertexArrayOES'](vao); };
          ctx['isVertexArray'] = function(vao) { return ext['isVertexArrayOES'](vao); };
          return 1;
        }
      }
    
    function __webgl_enable_WEBGL_draw_buffers(ctx) {
        // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
        var ext = ctx.getExtension('WEBGL_draw_buffers');
        if (ext) {
          ctx['drawBuffers'] = function(n, bufs) { ext['drawBuffersWEBGL'](n, bufs); };
          return 1;
        }
      }
    
    function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
        // Closure is expected to be allowed to minify the '.dibvbi' property, so not accessing it quoted.
        return !!(ctx.dibvbi = ctx.getExtension('WEBGL_draw_instanced_base_vertex_base_instance'));
      }
    
    function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
        // Closure is expected to be allowed to minify the '.mdibvbi' property, so not accessing it quoted.
        return !!(ctx.mdibvbi = ctx.getExtension('WEBGL_multi_draw_instanced_base_vertex_base_instance'));
      }
    
    function __webgl_enable_WEBGL_multi_draw(ctx) {
        // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
        return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
      }
    var GL = {counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],samplers:[],transformFeedbacks:[],syncs:[],stringCache:{},stringiCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {
          if (!GL.lastError) {
            GL.lastError = errorCode;
          }
        },getNewId:function(table) {
          var ret = GL.counter++;
          for (var i = table.length; i < ret; i++) {
            table[i] = null;
          }
          return ret;
        },getSource:function(shader, count, string, length) {
          var source = '';
          for (var i = 0; i < count; ++i) {
            var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;
            source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);
          }
          return source;
        },createContext:function(/** @type {HTMLCanvasElement} */ canvas, webGLContextAttributes) {
          // In proxied operation mode, rAF()/setTimeout() functions do not delimit frame boundaries, so can't have WebGL implementation
          // try to detect when it's ok to discard contents of the rendered backbuffer.
          if (webGLContextAttributes.renderViaOffscreenBackBuffer) webGLContextAttributes['preserveDrawingBuffer'] = true;
    
          // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL context on a canvas,
          // calling .getContext() will always return that context independent of which 'webgl' or 'webgl2'
          // context version was passed. See https://bugs.webkit.org/show_bug.cgi?id=222758 and
          // https://github.com/emscripten-core/emscripten/issues/13295.
          // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari version field in above check.
          if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;
            /** @type {function(this:HTMLCanvasElement, string, (Object|null)=): (Object|null)} */
            function fixedGetContext(ver, attrs) {
              var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
              return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
            }
            canvas.getContext = fixedGetContext;
          }
    
          var ctx = 
            (webGLContextAttributes.majorVersion > 1)
            ?
              canvas.getContext("webgl2", webGLContextAttributes)
            :
            (canvas.getContext("webgl", webGLContextAttributes)
              // https://caniuse.com/#feat=webgl
              );
    
          if (!ctx) return 0;
    
          var handle = GL.registerContext(ctx, webGLContextAttributes);
    
          return handle;
        },enableOffscreenFramebufferAttributes:function(webGLContextAttributes) {
          webGLContextAttributes.renderViaOffscreenBackBuffer = true;
          webGLContextAttributes.preserveDrawingBuffer = true;
        },createOffscreenFramebuffer:function(context) {
          var gl = context.GLctx;
    
          // Create FBO
          var fbo = gl.createFramebuffer();
          gl.bindFramebuffer(0x8D40 /*GL_FRAMEBUFFER*/, fbo);
          context.defaultFbo = fbo;
    
          context.defaultFboForbidBlitFramebuffer = false;
          if (gl.getContextAttributes().antialias) {
            context.defaultFboForbidBlitFramebuffer = true;
          }
          else {
            // The WebGL 2 blit path doesn't work in Firefox < 67 (except in fullscreen).
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1523030
            var firefoxMatch = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/);
            if (firefoxMatch != null) {
              var firefoxVersion = firefoxMatch[1];
              context.defaultFboForbidBlitFramebuffer = firefoxVersion < 67;
            }
          }
    
          // Create render targets to the FBO
          context.defaultColorTarget = gl.createTexture();
          context.defaultDepthTarget = gl.createRenderbuffer();
          GL.resizeOffscreenFramebuffer(context); // Size them up correctly (use the same mechanism when resizing on demand)
    
          gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget);
          gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2801 /*GL_TEXTURE_MIN_FILTER*/, 0x2600 /*GL_NEAREST*/);
          gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2800 /*GL_TEXTURE_MAG_FILTER*/, 0x2600 /*GL_NEAREST*/);
          gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2802 /*GL_TEXTURE_WRAP_S*/, 0x812F /*GL_CLAMP_TO_EDGE*/);
          gl.texParameteri(0xDE1 /*GL_TEXTURE_2D*/, 0x2803 /*GL_TEXTURE_WRAP_T*/, 0x812F /*GL_CLAMP_TO_EDGE*/);
          gl.texImage2D(0xDE1 /*GL_TEXTURE_2D*/, 0, 0x1908 /*GL_RGBA*/, gl.canvas.width, gl.canvas.height, 0, 0x1908 /*GL_RGBA*/, 0x1401 /*GL_UNSIGNED_BYTE*/, null);
          gl.framebufferTexture2D(0x8D40 /*GL_FRAMEBUFFER*/, 0x8CE0 /*GL_COLOR_ATTACHMENT0*/, 0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget, 0);
          gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, null);
    
          // Create depth render target to the FBO
          var depthTarget = gl.createRenderbuffer();
          gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, context.defaultDepthTarget);
          gl.renderbufferStorage(0x8D41 /*GL_RENDERBUFFER*/, 0x81A5 /*GL_DEPTH_COMPONENT16*/, gl.canvas.width, gl.canvas.height);
          gl.framebufferRenderbuffer(0x8D40 /*GL_FRAMEBUFFER*/, 0x8D00 /*GL_DEPTH_ATTACHMENT*/, 0x8D41 /*GL_RENDERBUFFER*/, context.defaultDepthTarget);
          gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, null);
    
          // Create blitter
          var vertices = [
            -1, -1,
            -1,  1,
             1, -1,
             1,  1
          ];
          var vb = gl.createBuffer();
          gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, vb);
          gl.bufferData(0x8892 /*GL_ARRAY_BUFFER*/, new Float32Array(vertices), 0x88E4 /*GL_STATIC_DRAW*/);
          gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, null);
          context.blitVB = vb;
    
          var vsCode =
            'attribute vec2 pos;' +
            'varying lowp vec2 tex;' +
            'void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }';
          var vs = gl.createShader(0x8B31 /*GL_VERTEX_SHADER*/);
          gl.shaderSource(vs, vsCode);
          gl.compileShader(vs);
    
          var fsCode =
            'varying lowp vec2 tex;' +
            'uniform sampler2D sampler;' +
            'void main() { gl_FragColor = texture2D(sampler, tex); }';
          var fs = gl.createShader(0x8B30 /*GL_FRAGMENT_SHADER*/);
          gl.shaderSource(fs, fsCode);
          gl.compileShader(fs);
    
          var blitProgram = gl.createProgram();
          gl.attachShader(blitProgram, vs);
          gl.attachShader(blitProgram, fs);
          gl.linkProgram(blitProgram);
          context.blitProgram = blitProgram;
          context.blitPosLoc = gl.getAttribLocation(blitProgram, "pos");
          gl.useProgram(blitProgram);
          gl.uniform1i(gl.getUniformLocation(blitProgram, "sampler"), 0);
          gl.useProgram(null);
    
          context.defaultVao = undefined;
          if (gl.createVertexArray) {
            context.defaultVao = gl.createVertexArray();
            gl.bindVertexArray(context.defaultVao);
            gl.enableVertexAttribArray(context.blitPosLoc);
            gl.bindVertexArray(null);
          }
        },resizeOffscreenFramebuffer:function(context) {
          var gl = context.GLctx;
    
          // Resize color buffer
          if (context.defaultColorTarget) {
            var prevTextureBinding = gl.getParameter(0x8069 /*GL_TEXTURE_BINDING_2D*/);
            gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget);
            gl.texImage2D(0xDE1 /*GL_TEXTURE_2D*/, 0, 0x1908 /*GL_RGBA*/, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, 0x1908 /*GL_RGBA*/, 0x1401 /*GL_UNSIGNED_BYTE*/, null);
            gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, prevTextureBinding);
          }
    
          // Resize depth buffer
          if (context.defaultDepthTarget) {
            var prevRenderBufferBinding = gl.getParameter(0x8CA7 /*GL_RENDERBUFFER_BINDING*/);
            gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, context.defaultDepthTarget);
            gl.renderbufferStorage(0x8D41 /*GL_RENDERBUFFER*/, 0x81A5 /*GL_DEPTH_COMPONENT16*/, gl.drawingBufferWidth, gl.drawingBufferHeight); // TODO: Read context creation parameters for what type of depth and stencil to use
            gl.bindRenderbuffer(0x8D41 /*GL_RENDERBUFFER*/, prevRenderBufferBinding);
          }
        },blitOffscreenFramebuffer:function(context) {
          var gl = context.GLctx;
    
          var prevScissorTest = gl.getParameter(0xC11 /*GL_SCISSOR_TEST*/);
          if (prevScissorTest) gl.disable(0xC11 /*GL_SCISSOR_TEST*/);
    
          var prevFbo = gl.getParameter(0x8CA6 /*GL_FRAMEBUFFER_BINDING*/);
    
          if (gl.blitFramebuffer && !context.defaultFboForbidBlitFramebuffer) {
            gl.bindFramebuffer(0x8CA8 /*GL_READ_FRAMEBUFFER*/, context.defaultFbo);
            gl.bindFramebuffer(0x8CA9 /*GL_DRAW_FRAMEBUFFER*/, null);
            gl.blitFramebuffer(0, 0, gl.canvas.width, gl.canvas.height,
                               0, 0, gl.canvas.width, gl.canvas.height,
                               0x4000 /*GL_COLOR_BUFFER_BIT*/, 0x2600/*GL_NEAREST*/);
          }
          else
          {
            gl.bindFramebuffer(0x8D40 /*GL_FRAMEBUFFER*/, null);
    
            var prevProgram = gl.getParameter(0x8B8D /*GL_CURRENT_PROGRAM*/);
            gl.useProgram(context.blitProgram);
    
            var prevVB = gl.getParameter(0x8894 /*GL_ARRAY_BUFFER_BINDING*/);
            gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, context.blitVB);
    
            var prevActiveTexture = gl.getParameter(0x84E0 /*GL_ACTIVE_TEXTURE*/);
            gl.activeTexture(0x84C0 /*GL_TEXTURE0*/);
    
            var prevTextureBinding = gl.getParameter(0x8069 /*GL_TEXTURE_BINDING_2D*/);
            gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, context.defaultColorTarget);
    
            var prevBlend = gl.getParameter(0xBE2 /*GL_BLEND*/);
            if (prevBlend) gl.disable(0xBE2 /*GL_BLEND*/);
    
            var prevCullFace = gl.getParameter(0xB44 /*GL_CULL_FACE*/);
            if (prevCullFace) gl.disable(0xB44 /*GL_CULL_FACE*/);
    
            var prevDepthTest = gl.getParameter(0xB71 /*GL_DEPTH_TEST*/);
            if (prevDepthTest) gl.disable(0xB71 /*GL_DEPTH_TEST*/);
    
            var prevStencilTest = gl.getParameter(0xB90 /*GL_STENCIL_TEST*/);
            if (prevStencilTest) gl.disable(0xB90 /*GL_STENCIL_TEST*/);
    
            function draw() {
              gl.vertexAttribPointer(context.blitPosLoc, 2, 0x1406 /*GL_FLOAT*/, false, 0, 0);
              gl.drawArrays(5/*GL_TRIANGLE_STRIP*/, 0, 4);
            }
    
            if (context.defaultVao) {
              // WebGL 2 or OES_vertex_array_object
              var prevVAO = gl.getParameter(0x85B5 /*GL_VERTEX_ARRAY_BINDING*/);
              gl.bindVertexArray(context.defaultVao);
              draw();
              gl.bindVertexArray(prevVAO);
            }
            else
            {
              var prevVertexAttribPointer = {
                buffer: gl.getVertexAttrib(context.blitPosLoc, 0x889F /*GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/),
                size: gl.getVertexAttrib(context.blitPosLoc, 0x8623 /*GL_VERTEX_ATTRIB_ARRAY_SIZE*/),
                stride: gl.getVertexAttrib(context.blitPosLoc, 0x8624 /*GL_VERTEX_ATTRIB_ARRAY_STRIDE*/),
                type: gl.getVertexAttrib(context.blitPosLoc, 0x8625 /*GL_VERTEX_ATTRIB_ARRAY_TYPE*/),
                normalized: gl.getVertexAttrib(context.blitPosLoc, 0x886A /*GL_VERTEX_ATTRIB_ARRAY_NORMALIZED*/),
                pointer: gl.getVertexAttribOffset(context.blitPosLoc, 0x8645 /*GL_VERTEX_ATTRIB_ARRAY_POINTER*/),
              };
              var maxVertexAttribs = gl.getParameter(0x8869 /*GL_MAX_VERTEX_ATTRIBS*/);
              var prevVertexAttribEnables = [];
              for (var i = 0; i < maxVertexAttribs; ++i) {
                var prevEnabled = gl.getVertexAttrib(i, 0x8622 /*GL_VERTEX_ATTRIB_ARRAY_ENABLED*/);
                var wantEnabled = i == context.blitPosLoc;
                if (prevEnabled && !wantEnabled) {
                  gl.disableVertexAttribArray(i);
                }
                if (!prevEnabled && wantEnabled) {
                  gl.enableVertexAttribArray(i);
                }
                prevVertexAttribEnables[i] = prevEnabled;
              }
    
              draw();
    
              for (var i = 0; i < maxVertexAttribs; ++i) {
                var prevEnabled = prevVertexAttribEnables[i];
                var nowEnabled = i == context.blitPosLoc;
                if (prevEnabled && !nowEnabled) {
                  gl.enableVertexAttribArray(i);
                }
                if (!prevEnabled && nowEnabled) {
                  gl.disableVertexAttribArray(i);
                }
              }
              gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, prevVertexAttribPointer.buffer);
              gl.vertexAttribPointer(context.blitPosLoc,
                                     prevVertexAttribPointer.size,
                                     prevVertexAttribPointer.type,
                                     prevVertexAttribPointer.normalized,
                                     prevVertexAttribPointer.stride,
                                     prevVertexAttribPointer.offset);
            }
    
            if (prevStencilTest) gl.enable(0xB90 /*GL_STENCIL_TEST*/);
            if (prevDepthTest) gl.enable(0xB71 /*GL_DEPTH_TEST*/);
            if (prevCullFace) gl.enable(0xB44 /*GL_CULL_FACE*/);
            if (prevBlend) gl.enable(0xBE2 /*GL_BLEND*/);
    
            gl.bindTexture(0xDE1 /*GL_TEXTURE_2D*/, prevTextureBinding);
            gl.activeTexture(prevActiveTexture);
            gl.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, prevVB);
            gl.useProgram(prevProgram);
          }
          gl.bindFramebuffer(0x8D40 /*GL_FRAMEBUFFER*/, prevFbo);
          if (prevScissorTest) gl.enable(0xC11 /*GL_SCISSOR_TEST*/);
        },registerContext:function(ctx, webGLContextAttributes) {
          // without pthreads a context is just an integer ID
          var handle = GL.getNewId(GL.contexts);
    
          var context = {
            handle: handle,
            attributes: webGLContextAttributes,
            version: webGLContextAttributes.majorVersion,
            GLctx: ctx
          };
    
          // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.
          if (ctx.canvas) ctx.canvas.GLctxObject = context;
          GL.contexts[handle] = context;
          if (typeof webGLContextAttributes.enableExtensionsByDefault == 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context);
          }
    
          if (webGLContextAttributes.renderViaOffscreenBackBuffer) GL.createOffscreenFramebuffer(context);
          return handle;
        },makeContextCurrent:function(contextHandle) {
    
          GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.
          Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.
          return !(contextHandle && !GLctx);
        },getContext:function(contextHandle) {
          return GL.contexts[contextHandle];
        },deleteContext:function(contextHandle) {
          if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
          if (typeof JSEvents == 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.
          if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.
          GL.contexts[contextHandle] = null;
        },initExtensions:function(context) {
          // If this function is called without a specific context object, init the extensions of the currently active context.
          if (!context) context = GL.currentContext;
    
          if (context.initExtensionsDone) return;
          context.initExtensionsDone = true;
    
          var GLctx = context.GLctx;
    
          // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.
    
          // Extensions that are only available in WebGL 1 (the calls will be no-ops if called on a WebGL 2 context active)
          __webgl_enable_ANGLE_instanced_arrays(GLctx);
          __webgl_enable_OES_vertex_array_object(GLctx);
          __webgl_enable_WEBGL_draw_buffers(GLctx);
          // Extensions that are available from WebGL >= 2 (no-op if called on a WebGL 1 context active)
          __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
          __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
    
          // On WebGL 2, EXT_disjoint_timer_query is replaced with an alternative
          // that's based on core APIs, and exposes only the queryCounterEXT()
          // entrypoint.
          if (context.version >= 2) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
          }
    
          // However, Firefox exposes the WebGL 1 version on WebGL 2 as well and
          // thus we look for the WebGL 1 version again if the WebGL 2 version
          // isn't present. https://bugzilla.mozilla.org/show_bug.cgi?id=1328882
          if (context.version < 2 || !GLctx.disjointTimerQueryExt)
          {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
          }
    
          __webgl_enable_WEBGL_multi_draw(GLctx);
    
          // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
          var exts = GLctx.getSupportedExtensions() || [];
          exts.forEach(function(ext) {
            // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders are not enabled by default.
            if (!ext.includes('lose_context') && !ext.includes('debug')) {
              // Call .getExtension() to enable that extension permanently.
              GLctx.getExtension(ext);
            }
          });
        }};
    function _emscripten_glActiveTexture(x0) { GLctx['activeTexture'](x0) }
  
    function _emscripten_glAttachShader(program, shader) {
        GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
      }
  
    function _emscripten_glBeginQuery(target, id) {
        GLctx['beginQuery'](target, GL.queries[id]);
      }
  
    function _emscripten_glBeginQueryEXT(target, id) {
        GLctx.disjointTimerQueryExt['beginQueryEXT'](target, GL.queries[id]);
      }
  
    function _emscripten_glBeginTransformFeedback(x0) { GLctx['beginTransformFeedback'](x0) }
  
    function _emscripten_glBindAttribLocation(program, index, name) {
        GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
      }
  
    function _emscripten_glBindBuffer(target, buffer) {
    
        if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
          // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2 API function call when a buffer is bound to
          // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that binding point is non-null to know what is
          // the proper API function to call.
          GLctx.currentPixelPackBufferBinding = buffer;
        } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
          // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
          // use a different WebGL 2 API function call when a buffer is bound to
          // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
          // binding point is non-null to know what is the proper API function to
          // call.
          GLctx.currentPixelUnpackBufferBinding = buffer;
        }
        GLctx.bindBuffer(target, GL.buffers[buffer]);
      }
  
    function _emscripten_glBindBufferBase(target, index, buffer) {
        GLctx['bindBufferBase'](target, index, GL.buffers[buffer]);
      }
  
    function _emscripten_glBindBufferRange(target, index, buffer, offset, ptrsize) {
        GLctx['bindBufferRange'](target, index, GL.buffers[buffer], offset, ptrsize);
      }
  
    function _emscripten_glBindFramebuffer(target, framebuffer) {
    
        // defaultFbo may not be present if 'renderViaOffscreenBackBuffer' was not enabled during context creation time,
        // i.e. setting -sOFFSCREEN_FRAMEBUFFER at compilation time does not yet mandate that offscreen back buffer
        // is being used, but that is ultimately decided at context creation time.
        GLctx.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : GL.currentContext.defaultFbo);
    
      }
  
    function _emscripten_glBindRenderbuffer(target, renderbuffer) {
        GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
      }
  
    function _emscripten_glBindSampler(unit, sampler) {
        GLctx['bindSampler'](unit, GL.samplers[sampler]);
      }
  
    function _emscripten_glBindTexture(target, texture) {
        GLctx.bindTexture(target, GL.textures[texture]);
      }
  
    function _emscripten_glBindTransformFeedback(target, id) {
        GLctx['bindTransformFeedback'](target, GL.transformFeedbacks[id]);
      }
  
    function _emscripten_glBindVertexArray(vao) {
        GLctx['bindVertexArray'](GL.vaos[vao]);
      }
  
    function _emscripten_glBindVertexArrayOES(vao) {
        GLctx['bindVertexArray'](GL.vaos[vao]);
      }
  
    function _emscripten_glBlendColor(x0, x1, x2, x3) { GLctx['blendColor'](x0, x1, x2, x3) }
  
    function _emscripten_glBlendEquation(x0) { GLctx['blendEquation'](x0) }
  
    function _emscripten_glBlendEquationSeparate(x0, x1) { GLctx['blendEquationSeparate'](x0, x1) }
  
    function _emscripten_glBlendFunc(x0, x1) { GLctx['blendFunc'](x0, x1) }
  
    function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) { GLctx['blendFuncSeparate'](x0, x1, x2, x3) }
  
    function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) { GLctx['blitFramebuffer'](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) }
  
    function _emscripten_glBufferData(target, size, data, usage) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          // If size is zero, WebGL would interpret uploading the whole input arraybuffer (starting from given offset), which would
          // not make sense in WebAssembly, so avoid uploading if size is zero. However we must still call bufferData to establish a
          // backing storage of zero bytes.
          if (data && size) {
            GLctx.bufferData(target, HEAPU8, usage, data, size);
          } else {
            GLctx.bufferData(target, size, usage);
          }
        } else {
          // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
          // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
          GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
        }
      }
  
    function _emscripten_glBufferSubData(target, offset, size, data) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
          return;
        }
        GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
      }
  
    function _emscripten_glCheckFramebufferStatus(x0) { return GLctx['checkFramebufferStatus'](x0) }
  
    function _emscripten_glClear(x0) { GLctx['clear'](x0) }
  
    function _emscripten_glClearBufferfi(x0, x1, x2, x3) { GLctx['clearBufferfi'](x0, x1, x2, x3) }
  
    function _emscripten_glClearBufferfv(buffer, drawbuffer, value) {
    
        GLctx['clearBufferfv'](buffer, drawbuffer, HEAPF32, value>>2);
      }
  
    function _emscripten_glClearBufferiv(buffer, drawbuffer, value) {
    
        GLctx['clearBufferiv'](buffer, drawbuffer, HEAP32, value>>2);
      }
  
    function _emscripten_glClearBufferuiv(buffer, drawbuffer, value) {
    
        GLctx['clearBufferuiv'](buffer, drawbuffer, HEAPU32, value>>2);
      }
  
    function _emscripten_glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }
  
    function _emscripten_glClearDepthf(x0) { GLctx['clearDepth'](x0) }
  
    function _emscripten_glClearStencil(x0) { GLctx['clearStencil'](x0) }
  
    function convertI32PairToI53(lo, hi) {
        return (lo >>> 0) + hi * 4294967296;
      }
    function _emscripten_glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
        // WebGL2 vs GLES3 differences: in GLES3, the timeout parameter is a uint64, where 0xFFFFFFFFFFFFFFFFULL means GL_TIMEOUT_IGNORED.
        // In JS, there's no 64-bit value types, so instead timeout is taken to be signed, and GL_TIMEOUT_IGNORED is given value -1.
        // Inherently the value accepted in the timeout is lossy, and can't take in arbitrary u64 bit pattern (but most likely doesn't matter)
        // See https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15
        return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
      }
  
    function _emscripten_glColorMask(red, green, blue, alpha) {
        GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
      }
  
    function _emscripten_glCompileShader(shader) {
        GLctx.compileShader(GL.shaders[shader]);
      }
  
    function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, imageSize, data);
          } else {
            GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
          }
          return;
        }
        GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
      }
  
    function _emscripten_glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexImage3D'](target, level, internalFormat, width, height, depth, border, imageSize, data);
        } else {
          GLctx['compressedTexImage3D'](target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
        }
      }
  
    function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, imageSize, data);
          } else {
            GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
          }
          return;
        }
        GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
      }
  
    function _emscripten_glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
        } else {
          GLctx['compressedTexSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
        }
      }
  
    function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) { GLctx['copyBufferSubData'](x0, x1, x2, x3, x4) }
  
    function _emscripten_glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }
  
    function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexSubImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }
  
    function _emscripten_glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) { GLctx['copyTexSubImage3D'](x0, x1, x2, x3, x4, x5, x6, x7, x8) }
  
    function _emscripten_glCreateProgram() {
        var id = GL.getNewId(GL.programs);
        var program = GLctx.createProgram();
        // Store additional information needed for each shader program:
        program.name = id;
        // Lazy cache results of glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
        program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
        program.uniformIdCounter = 1;
        GL.programs[id] = program;
        return id;
      }
  
    function _emscripten_glCreateShader(shaderType) {
        var id = GL.getNewId(GL.shaders);
        GL.shaders[id] = GLctx.createShader(shaderType);
    
        return id;
      }
  
    function _emscripten_glCullFace(x0) { GLctx['cullFace'](x0) }
  
    function _emscripten_glDeleteBuffers(n, buffers) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((buffers)+(i*4))>>2)];
          var buffer = GL.buffers[id];
    
          // From spec: "glDeleteBuffers silently ignores 0's and names that do not
          // correspond to existing buffer objects."
          if (!buffer) continue;
    
          GLctx.deleteBuffer(buffer);
          buffer.name = 0;
          GL.buffers[id] = null;
    
          if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
          if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
        }
      }
  
    function _emscripten_glDeleteFramebuffers(n, framebuffers) {
        for (var i = 0; i < n; ++i) {
          var id = HEAP32[(((framebuffers)+(i*4))>>2)];
          var framebuffer = GL.framebuffers[id];
          if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
          GLctx.deleteFramebuffer(framebuffer);
          framebuffer.name = 0;
          GL.framebuffers[id] = null;
        }
      }
  
    function _emscripten_glDeleteProgram(id) {
        if (!id) return;
        var program = GL.programs[id];
        if (!program) { // glDeleteProgram actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        GLctx.deleteProgram(program);
        program.name = 0;
        GL.programs[id] = null;
      }
  
    function _emscripten_glDeleteQueries(n, ids) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((ids)+(i*4))>>2)];
          var query = GL.queries[id];
          if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
          GLctx['deleteQuery'](query);
          GL.queries[id] = null;
        }
      }
  
    function _emscripten_glDeleteQueriesEXT(n, ids) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((ids)+(i*4))>>2)];
          var query = GL.queries[id];
          if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
          GLctx.disjointTimerQueryExt['deleteQueryEXT'](query);
          GL.queries[id] = null;
        }
      }
  
    function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
          var renderbuffer = GL.renderbuffers[id];
          if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
          GLctx.deleteRenderbuffer(renderbuffer);
          renderbuffer.name = 0;
          GL.renderbuffers[id] = null;
        }
      }
  
    function _emscripten_glDeleteSamplers(n, samplers) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((samplers)+(i*4))>>2)];
          var sampler = GL.samplers[id];
          if (!sampler) continue;
          GLctx['deleteSampler'](sampler);
          sampler.name = 0;
          GL.samplers[id] = null;
        }
      }
  
    function _emscripten_glDeleteShader(id) {
        if (!id) return;
        var shader = GL.shaders[id];
        if (!shader) { // glDeleteShader actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        GLctx.deleteShader(shader);
        GL.shaders[id] = null;
      }
  
    function _emscripten_glDeleteSync(id) {
        if (!id) return;
        var sync = GL.syncs[id];
        if (!sync) { // glDeleteSync signals an error when deleting a nonexisting object, unlike some other GL delete functions.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        GLctx.deleteSync(sync);
        sync.name = 0;
        GL.syncs[id] = null;
      }
  
    function _emscripten_glDeleteTextures(n, textures) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((textures)+(i*4))>>2)];
          var texture = GL.textures[id];
          if (!texture) continue; // GL spec: "glDeleteTextures silently ignores 0s and names that do not correspond to existing textures".
          GLctx.deleteTexture(texture);
          texture.name = 0;
          GL.textures[id] = null;
        }
      }
  
    function _emscripten_glDeleteTransformFeedbacks(n, ids) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((ids)+(i*4))>>2)];
          var transformFeedback = GL.transformFeedbacks[id];
          if (!transformFeedback) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
          GLctx['deleteTransformFeedback'](transformFeedback);
          transformFeedback.name = 0;
          GL.transformFeedbacks[id] = null;
        }
      }
  
    function _emscripten_glDeleteVertexArrays(n, vaos) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((vaos)+(i*4))>>2)];
          GLctx['deleteVertexArray'](GL.vaos[id]);
          GL.vaos[id] = null;
        }
      }
  
    function _emscripten_glDeleteVertexArraysOES(n, vaos) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((vaos)+(i*4))>>2)];
          GLctx['deleteVertexArray'](GL.vaos[id]);
          GL.vaos[id] = null;
        }
      }
  
    function _emscripten_glDepthFunc(x0) { GLctx['depthFunc'](x0) }
  
    function _emscripten_glDepthMask(flag) {
        GLctx.depthMask(!!flag);
      }
  
    function _emscripten_glDepthRangef(x0, x1) { GLctx['depthRange'](x0, x1) }
  
    function _emscripten_glDetachShader(program, shader) {
        GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
      }
  
    function _emscripten_glDisable(x0) { GLctx['disable'](x0) }
  
    function _emscripten_glDisableVertexAttribArray(index) {
        GLctx.disableVertexAttribArray(index);
      }
  
    function _emscripten_glDrawArrays(mode, first, count) {
    
        GLctx.drawArrays(mode, first, count);
    
      }
  
    function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
        GLctx['drawArraysInstanced'](mode, first, count, primcount);
      }
  
    function _emscripten_glDrawArraysInstancedANGLE(mode, first, count, primcount) {
        GLctx['drawArraysInstanced'](mode, first, count, primcount);
      }
  
    function _emscripten_glDrawArraysInstancedARB(mode, first, count, primcount) {
        GLctx['drawArraysInstanced'](mode, first, count, primcount);
      }
  
    function _emscripten_glDrawArraysInstancedEXT(mode, first, count, primcount) {
        GLctx['drawArraysInstanced'](mode, first, count, primcount);
      }
  
    function _emscripten_glDrawArraysInstancedNV(mode, first, count, primcount) {
        GLctx['drawArraysInstanced'](mode, first, count, primcount);
      }
  
    var tempFixedLengthArray = [];
    function _emscripten_glDrawBuffers(n, bufs) {
    
        var bufArray = tempFixedLengthArray[n];
        for (var i = 0; i < n; i++) {
          bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
        }
    
        GLctx['drawBuffers'](bufArray);
      }
  
    function _emscripten_glDrawBuffersEXT(n, bufs) {
    
        var bufArray = tempFixedLengthArray[n];
        for (var i = 0; i < n; i++) {
          bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
        }
    
        GLctx['drawBuffers'](bufArray);
      }
  
    function _emscripten_glDrawBuffersWEBGL(n, bufs) {
    
        var bufArray = tempFixedLengthArray[n];
        for (var i = 0; i < n; i++) {
          bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
        }
    
        GLctx['drawBuffers'](bufArray);
      }
  
    function _emscripten_glDrawElements(mode, count, type, indices) {
    
        GLctx.drawElements(mode, count, type, indices);
    
      }
  
    function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
        GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
      }
  
    function _emscripten_glDrawElementsInstancedANGLE(mode, count, type, indices, primcount) {
        GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
      }
  
    function _emscripten_glDrawElementsInstancedARB(mode, count, type, indices, primcount) {
        GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
      }
  
    function _emscripten_glDrawElementsInstancedEXT(mode, count, type, indices, primcount) {
        GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
      }
  
    function _emscripten_glDrawElementsInstancedNV(mode, count, type, indices, primcount) {
        GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
      }
  
    function _glDrawElements(mode, count, type, indices) {
    
        GLctx.drawElements(mode, count, type, indices);
    
      }
    function _emscripten_glDrawRangeElements(mode, start, end, count, type, indices) {
        // TODO: This should be a trivial pass-though function registered at the bottom of this page as
        // glFuncs[6][1] += ' drawRangeElements';
        // but due to https://bugzilla.mozilla.org/show_bug.cgi?id=1202427,
        // we work around by ignoring the range.
        _glDrawElements(mode, count, type, indices);
      }
  
    function _emscripten_glEnable(x0) { GLctx['enable'](x0) }
  
    function _emscripten_glEnableVertexAttribArray(index) {
        GLctx.enableVertexAttribArray(index);
      }
  
    function _emscripten_glEndQuery(x0) { GLctx['endQuery'](x0) }
  
    function _emscripten_glEndQueryEXT(target) {
        GLctx.disjointTimerQueryExt['endQueryEXT'](target);
      }
  
    function _emscripten_glEndTransformFeedback() { GLctx['endTransformFeedback']() }
  
    function _emscripten_glFenceSync(condition, flags) {
        var sync = GLctx.fenceSync(condition, flags);
        if (sync) {
          var id = GL.getNewId(GL.syncs);
          sync.name = id;
          GL.syncs[id] = sync;
          return id;
        }
        return 0; // Failed to create a sync object
      }
  
    function _emscripten_glFinish() { GLctx['finish']() }
  
    function _emscripten_glFlush() { GLctx['flush']() }
  
    function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
        GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                           GL.renderbuffers[renderbuffer]);
      }
  
    function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
        GLctx.framebufferTexture2D(target, attachment, textarget,
                                        GL.textures[texture], level);
      }
  
    function _emscripten_glFramebufferTextureLayer(target, attachment, texture, level, layer) {
        GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
      }
  
    function _emscripten_glFrontFace(x0) { GLctx['frontFace'](x0) }
  
    function __glGenObject(n, buffers, createFunction, objectTable
        ) {
        for (var i = 0; i < n; i++) {
          var buffer = GLctx[createFunction]();
          var id = buffer && GL.getNewId(objectTable);
          if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer;
          } else {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          }
          HEAP32[(((buffers)+(i*4))>>2)] = id;
        }
      }
    function _emscripten_glGenBuffers(n, buffers) {
        __glGenObject(n, buffers, 'createBuffer', GL.buffers
          );
      }
  
    function _emscripten_glGenFramebuffers(n, ids) {
        __glGenObject(n, ids, 'createFramebuffer', GL.framebuffers
          );
      }
  
    function _emscripten_glGenQueries(n, ids) {
        __glGenObject(n, ids, 'createQuery', GL.queries
          );
      }
  
    function _emscripten_glGenQueriesEXT(n, ids) {
        for (var i = 0; i < n; i++) {
          var query = GLctx.disjointTimerQueryExt['createQueryEXT']();
          if (!query) {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */);
            while (i < n) HEAP32[(((ids)+(i++*4))>>2)] = 0;
            return;
          }
          var id = GL.getNewId(GL.queries);
          query.name = id;
          GL.queries[id] = query;
          HEAP32[(((ids)+(i*4))>>2)] = id;
        }
      }
  
    function _emscripten_glGenRenderbuffers(n, renderbuffers) {
        __glGenObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
          );
      }
  
    function _emscripten_glGenSamplers(n, samplers) {
        __glGenObject(n, samplers, 'createSampler', GL.samplers
          );
      }
  
    function _emscripten_glGenTextures(n, textures) {
        __glGenObject(n, textures, 'createTexture', GL.textures
          );
      }
  
    function _emscripten_glGenTransformFeedbacks(n, ids) {
        __glGenObject(n, ids, 'createTransformFeedback', GL.transformFeedbacks
          );
      }
  
    function _emscripten_glGenVertexArrays(n, arrays) {
        __glGenObject(n, arrays, 'createVertexArray', GL.vaos
          );
      }
  
    function _emscripten_glGenVertexArraysOES(n, arrays) {
        __glGenObject(n, arrays, 'createVertexArray', GL.vaos
          );
      }
  
    function _emscripten_glGenerateMipmap(x0) { GLctx['generateMipmap'](x0) }
  
    function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
        program = GL.programs[program];
        var info = GLctx[funcName](program, index);
        if (info) { // If an error occurs, nothing will be written to length, size and type and name.
          var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
          if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
          if (size) HEAP32[((size)>>2)] = info.size;
          if (type) HEAP32[((type)>>2)] = info.type;
        }
      }
    function _emscripten_glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
        __glGetActiveAttribOrUniform('getActiveAttrib', program, index, bufSize, length, size, type, name);
      }
  
    function _emscripten_glGetActiveUniform(program, index, bufSize, length, size, type, name) {
        __glGetActiveAttribOrUniform('getActiveUniform', program, index, bufSize, length, size, type, name);
      }
  
    function _emscripten_glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
        program = GL.programs[program];
    
        var result = GLctx['getActiveUniformBlockName'](program, uniformBlockIndex);
        if (!result) return; // If an error occurs, nothing will be written to uniformBlockName or length.
        if (uniformBlockName && bufSize > 0) {
          var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
          if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        } else {
          if (length) HEAP32[((length)>>2)] = 0;
        }
      }
  
    function _emscripten_glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if params == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        program = GL.programs[program];
    
        if (pname == 0x8A41 /* GL_UNIFORM_BLOCK_NAME_LENGTH */) {
          var name = GLctx['getActiveUniformBlockName'](program, uniformBlockIndex);
          HEAP32[((params)>>2)] = name.length+1;
          return;
        }
    
        var result = GLctx['getActiveUniformBlockParameter'](program, uniformBlockIndex, pname);
        if (result === null) return; // If an error occurs, nothing should be written to params.
        if (pname == 0x8A43 /*GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES*/) {
          for (var i = 0; i < result.length; i++) {
            HEAP32[(((params)+(i*4))>>2)] = result[i];
          }
        } else {
          HEAP32[((params)>>2)] = result;
        }
      }
  
    function _emscripten_glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if params == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        if (uniformCount > 0 && uniformIndices == 0) {
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        program = GL.programs[program];
        var ids = [];
        for (var i = 0; i < uniformCount; i++) {
          ids.push(HEAP32[(((uniformIndices)+(i*4))>>2)]);
        }
    
        var result = GLctx['getActiveUniforms'](program, ids, pname);
        if (!result) return; // GL spec: If an error is generated, nothing is written out to params.
    
        var len = result.length;
        for (var i = 0; i < len; i++) {
          HEAP32[(((params)+(i*4))>>2)] = result[i];
        }
      }
  
    function _emscripten_glGetAttachedShaders(program, maxCount, count, shaders) {
        var result = GLctx.getAttachedShaders(GL.programs[program]);
        var len = result.length;
        if (len > maxCount) {
          len = maxCount;
        }
        HEAP32[((count)>>2)] = len;
        for (var i = 0; i < len; ++i) {
          var id = GL.shaders.indexOf(result[i]);
          HEAP32[(((shaders)+(i*4))>>2)] = id;
        }
      }
  
    function _emscripten_glGetAttribLocation(program, name) {
        return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
      }
  
    function writeI53ToI64(ptr, num) {
        HEAPU32[ptr>>2] = num;
        HEAPU32[ptr+4>>2] = (num - HEAPU32[ptr>>2])/4294967296;
      }
    function emscriptenWebGLGet(name_, p, type) {
        // Guard against user passing a null pointer.
        // Note that GLES2 spec does not say anything about how passing a null pointer should be treated.
        // Testing on desktop core GL 3, the application crashes on glGetIntegerv to a null pointer, but
        // better to report an error instead of doing anything random.
        if (!p) {
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var ret = undefined;
        switch (name_) { // Handle a few trivial GLES values
          case 0x8DFA: // GL_SHADER_COMPILER
            ret = 1;
            break;
          case 0x8DF8: // GL_SHADER_BINARY_FORMATS
            if (type != 0 && type != 1) {
              GL.recordError(0x500); // GL_INVALID_ENUM
            }
            return; // Do not write anything to the out pointer, since no binary formats are supported.
          case 0x87FE: // GL_NUM_PROGRAM_BINARY_FORMATS
          case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
            ret = 0;
            break;
          case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
            // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be queried for length),
            // so implement it ourselves to allow C++ GLES2 code get the length.
            var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
            ret = formats ? formats.length : 0;
            break;
    
          case 0x821D: // GL_NUM_EXTENSIONS
            if (GL.currentContext.version < 2) {
              GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
              return;
            }
            // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            var exts = GLctx.getSupportedExtensions() || [];
            ret = 2 * exts.length; // each extension is duplicated, first in unprefixed WebGL form, and then a second time with "GL_" prefix.
            break;
          case 0x821B: // GL_MAJOR_VERSION
          case 0x821C: // GL_MINOR_VERSION
            if (GL.currentContext.version < 2) {
              GL.recordError(0x500); // GL_INVALID_ENUM
              return;
            }
            ret = name_ == 0x821B ? 3 : 0; // return version 3.0
            break;
        }
    
        if (ret === undefined) {
          var result = GLctx.getParameter(name_);
          switch (typeof result) {
            case "number":
              ret = result;
              break;
            case "boolean":
              ret = result ? 1 : 0;
              break;
            case "string":
              GL.recordError(0x500); // GL_INVALID_ENUM
              return;
            case "object":
              if (result === null) {
                // null is a valid result for some (e.g., which buffer is bound - perhaps nothing is bound), but otherwise
                // can mean an invalid name_, which we need to report as an error
                switch (name_) {
                  case 0x8894: // ARRAY_BUFFER_BINDING
                  case 0x8B8D: // CURRENT_PROGRAM
                  case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                  case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                  case 0x8CA7: // RENDERBUFFER_BINDING
                  case 0x8069: // TEXTURE_BINDING_2D
                  case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                  case 0x8F36: // COPY_READ_BUFFER_BINDING or COPY_READ_BUFFER
                  case 0x8F37: // COPY_WRITE_BUFFER_BINDING or COPY_WRITE_BUFFER
                  case 0x88ED: // PIXEL_PACK_BUFFER_BINDING
                  case 0x88EF: // PIXEL_UNPACK_BUFFER_BINDING
                  case 0x8CAA: // READ_FRAMEBUFFER_BINDING
                  case 0x8919: // SAMPLER_BINDING
                  case 0x8C1D: // TEXTURE_BINDING_2D_ARRAY
                  case 0x806A: // TEXTURE_BINDING_3D
                  case 0x8E25: // TRANSFORM_FEEDBACK_BINDING
                  case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
                  case 0x8A28: // UNIFORM_BUFFER_BINDING
                  case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                    ret = 0;
                    break;
                  }
                  default: {
                    GL.recordError(0x500); // GL_INVALID_ENUM
                    return;
                  }
                }
              } else if (result instanceof Float32Array ||
                         result instanceof Uint32Array ||
                         result instanceof Int32Array ||
                         result instanceof Array) {
                for (var i = 0; i < result.length; ++i) {
                  switch (type) {
                    case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                    case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                    case 4: HEAP8[(((p)+(i))>>0)] = result[i] ? 1 : 0; break;
                  }
                }
                return;
              } else {
                try {
                  ret = result.name | 0;
                } catch(e) {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  err('GL_INVALID_ENUM in glGet' + type + 'v: Unknown object returned from WebGL getParameter(' + name_ + ')! (error: ' + e + ')');
                  return;
                }
              }
              break;
            default:
              GL.recordError(0x500); // GL_INVALID_ENUM
              err('GL_INVALID_ENUM in glGet' + type + 'v: Native code calling glGet' + type + 'v(' + name_ + ') and it returns ' + result + ' of type ' + typeof(result) + '!');
              return;
          }
        }
    
        switch (type) {
          case 1: writeI53ToI64(p, ret); break;
          case 0: HEAP32[((p)>>2)] = ret; break;
          case 2:   HEAPF32[((p)>>2)] = ret; break;
          case 4: HEAP8[((p)>>0)] = ret ? 1 : 0; break;
        }
      }
    function _emscripten_glGetBooleanv(name_, p) {
        emscriptenWebGLGet(name_, p, 4);
      }
  
    function _emscripten_glGetBufferParameteri64v(target, value, data) {
        if (!data) {
          // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
          // if data == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        writeI53ToI64(data, GLctx.getBufferParameter(target, value));
      }
  
    function _emscripten_glGetBufferParameteriv(target, value, data) {
        if (!data) {
          // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
          // if data == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
      }
  
    function _emscripten_glGetError() {
        var error = GLctx.getError() || GL.lastError;
        GL.lastError = 0/*GL_NO_ERROR*/;
        return error;
      }
  
    function _emscripten_glGetFloatv(name_, p) {
        emscriptenWebGLGet(name_, p, 2);
      }
  
    function _emscripten_glGetFragDataLocation(program, name) {
        return GLctx['getFragDataLocation'](GL.programs[program], UTF8ToString(name));
      }
  
    function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
        var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
        if (result instanceof WebGLRenderbuffer ||
            result instanceof WebGLTexture) {
          result = result.name | 0;
        }
        HEAP32[((params)>>2)] = result;
      }
  
    function emscriptenWebGLGetIndexed(target, index, data, type) {
        if (!data) {
          // GLES2 specification does not specify how to behave if data is a null pointer. Since calling this function does not make sense
          // if data == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var result = GLctx['getIndexedParameter'](target, index);
        var ret;
        switch (typeof result) {
          case 'boolean':
            ret = result ? 1 : 0;
            break;
          case 'number':
            ret = result;
            break;
          case 'object':
            if (result === null) {
              switch (target) {
                case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
                case 0x8A28: // UNIFORM_BUFFER_BINDING
                  ret = 0;
                  break;
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof WebGLBuffer) {
              ret = result.name | 0;
            } else {
              GL.recordError(0x500); // GL_INVALID_ENUM
              return;
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
        }
    
        switch (type) {
          case 1: writeI53ToI64(data, ret); break;
          case 0: HEAP32[((data)>>2)] = ret; break;
          case 2: HEAPF32[((data)>>2)] = ret; break;
          case 4: HEAP8[((data)>>0)] = ret ? 1 : 0; break;
          default: throw 'internal emscriptenWebGLGetIndexed() error, bad type: ' + type;
        }
      }
    function _emscripten_glGetInteger64i_v(target, index, data) {
        emscriptenWebGLGetIndexed(target, index, data, 1);
      }
  
    function _emscripten_glGetInteger64v(name_, p) {
        emscriptenWebGLGet(name_, p, 1);
      }
  
    function _emscripten_glGetIntegeri_v(target, index, data) {
        emscriptenWebGLGetIndexed(target, index, data, 0);
      }
  
    function _emscripten_glGetIntegerv(name_, p) {
        emscriptenWebGLGet(name_, p, 0);
      }
  
    function _emscripten_glGetInternalformativ(target, internalformat, pname, bufSize, params) {
        if (bufSize < 0) {
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        if (!params) {
          // GLES3 specification does not specify how to behave if values is a null pointer. Since calling this function does not make sense
          // if values == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var ret = GLctx['getInternalformatParameter'](target, internalformat, pname);
        if (ret === null) return;
        for (var i = 0; i < ret.length && i < bufSize; ++i) {
          HEAP32[(((params)+(i*4))>>2)] = ret[i];
        }
      }
  
    function _emscripten_glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
  
    function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
        var log = GLctx.getProgramInfoLog(GL.programs[program]);
        if (log === null) log = '(unknown error)';
        var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      }
  
    function _emscripten_glGetProgramiv(program, pname, p) {
        if (!p) {
          // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
    
        if (program >= GL.counter) {
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
    
        program = GL.programs[program];
    
        if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
          var log = GLctx.getProgramInfoLog(program);
          if (log === null) log = '(unknown error)';
          HEAP32[((p)>>2)] = log.length + 1;
        } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
          if (!program.maxUniformLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
              program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
            }
          }
          HEAP32[((p)>>2)] = program.maxUniformLength;
        } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
          if (!program.maxAttributeLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/); ++i) {
              program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
            }
          }
          HEAP32[((p)>>2)] = program.maxAttributeLength;
        } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
          if (!program.maxUniformBlockNameLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/); ++i) {
              program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
            }
          }
          HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
        } else {
          HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
        }
      }
  
    function _emscripten_glGetQueryObjecti64vEXT(id, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var query = GL.queries[id];
        var param;
        if (GL.currentContext.version < 2)
        {
          param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
        }
        else {
          param = GLctx['getQueryParameter'](query, pname);
        }
        var ret;
        if (typeof param == 'boolean') {
          ret = param ? 1 : 0;
        } else {
          ret = param;
        }
        writeI53ToI64(params, ret);
      }
  
    function _emscripten_glGetQueryObjectivEXT(id, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var query = GL.queries[id];
        var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
        var ret;
        if (typeof param == 'boolean') {
          ret = param ? 1 : 0;
        } else {
          ret = param;
        }
        HEAP32[((params)>>2)] = ret;
      }
  
    function _emscripten_glGetQueryObjectui64vEXT(id, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var query = GL.queries[id];
        var param;
        if (GL.currentContext.version < 2)
        {
          param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
        }
        else {
          param = GLctx['getQueryParameter'](query, pname);
        }
        var ret;
        if (typeof param == 'boolean') {
          ret = param ? 1 : 0;
        } else {
          ret = param;
        }
        writeI53ToI64(params, ret);
      }
  
    function _emscripten_glGetQueryObjectuiv(id, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var query = GL.queries[id];
        var param = GLctx['getQueryParameter'](query, pname);
        var ret;
        if (typeof param == 'boolean') {
          ret = param ? 1 : 0;
        } else {
          ret = param;
        }
        HEAP32[((params)>>2)] = ret;
      }
  
    function _emscripten_glGetQueryObjectuivEXT(id, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var query = GL.queries[id];
        var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
        var ret;
        if (typeof param == 'boolean') {
          ret = param ? 1 : 0;
        } else {
          ret = param;
        }
        HEAP32[((params)>>2)] = ret;
      }
  
    function _emscripten_glGetQueryiv(target, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((params)>>2)] = GLctx['getQuery'](target, pname);
      }
  
    function _emscripten_glGetQueryivEXT(target, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((params)>>2)] = GLctx.disjointTimerQueryExt['getQueryEXT'](target, pname);
      }
  
    function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if params == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
      }
  
    function _emscripten_glGetSamplerParameterfv(sampler, pname, params) {
        if (!params) {
          // GLES3 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAPF32[((params)>>2)] = GLctx['getSamplerParameter'](GL.samplers[sampler], pname);
      }
  
    function _emscripten_glGetSamplerParameteriv(sampler, pname, params) {
        if (!params) {
          // GLES3 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((params)>>2)] = GLctx['getSamplerParameter'](GL.samplers[sampler], pname);
      }
  
    function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      }
  
    function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
        var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
        HEAP32[((range)>>2)] = result.rangeMin;
        HEAP32[(((range)+(4))>>2)] = result.rangeMax;
        HEAP32[((precision)>>2)] = result.precision;
      }
  
    function _emscripten_glGetShaderSource(shader, bufSize, length, source) {
        var result = GLctx.getShaderSource(GL.shaders[shader]);
        if (!result) return; // If an error occurs, nothing will be written to length or source.
        var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      }
  
    function _emscripten_glGetShaderiv(shader, pname, p) {
        if (!p) {
          // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
          var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
          if (log === null) log = '(unknown error)';
          // The GLES2 specification says that if the shader has an empty info log,
          // a value of 0 is returned. Otherwise the log has a null char appended.
          // (An empty string is falsey, so we can just check that instead of
          // looking at log.length.)
          var logLength = log ? log.length + 1 : 0;
          HEAP32[((p)>>2)] = logLength;
        } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
          var source = GLctx.getShaderSource(GL.shaders[shader]);
          // source may be a null, or the empty string, both of which are falsey
          // values that we report a 0 length for.
          var sourceLength = source ? source.length + 1 : 0;
          HEAP32[((p)>>2)] = sourceLength;
        } else {
          HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
        }
      }
  
    function stringToNewUTF8(jsString) {
        var length = lengthBytesUTF8(jsString)+1;
        var cString = _malloc(length);
        stringToUTF8(jsString, cString, length);
        return cString;
      }
    function _emscripten_glGetString(name_) {
        var ret = GL.stringCache[name_];
        if (!ret) {
          switch (name_) {
            case 0x1F03 /* GL_EXTENSIONS */:
              var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
              exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
              ret = stringToNewUTF8(exts.join(' '));
              break;
            case 0x1F00 /* GL_VENDOR */:
            case 0x1F01 /* GL_RENDERER */:
            case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
            case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
              var s = GLctx.getParameter(name_);
              if (!s) {
                GL.recordError(0x500/*GL_INVALID_ENUM*/);
              }
              ret = s && stringToNewUTF8(s);
              break;
    
            case 0x1F02 /* GL_VERSION */:
              var glVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
              // return GLES version string corresponding to the version of the WebGL context
              if (GL.currentContext.version >= 2) glVersion = 'OpenGL ES 3.0 (' + glVersion + ')';
              else
              {
                glVersion = 'OpenGL ES 2.0 (' + glVersion + ')';
              }
              ret = stringToNewUTF8(glVersion);
              break;
            case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
              var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
              // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
              var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
              var ver_num = glslVersion.match(ver_re);
              if (ver_num !== null) {
                if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
                glslVersion = 'OpenGL ES GLSL ES ' + ver_num[1] + ' (' + glslVersion + ')';
              }
              ret = stringToNewUTF8(glslVersion);
              break;
            default:
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
              // fall through
          }
          GL.stringCache[name_] = ret;
        }
        return ret;
      }
  
    function _emscripten_glGetStringi(name, index) {
        if (GL.currentContext.version < 2) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
          return 0;
        }
        var stringiCache = GL.stringiCache[name];
        if (stringiCache) {
          if (index < 0 || index >= stringiCache.length) {
            GL.recordError(0x501/*GL_INVALID_VALUE*/);
            return 0;
          }
          return stringiCache[index];
        }
        switch (name) {
          case 0x1F03 /* GL_EXTENSIONS */:
            var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
            exts = exts.map(function(e) { return stringToNewUTF8(e); });
    
            stringiCache = GL.stringiCache[name] = exts;
            if (index < 0 || index >= stringiCache.length) {
              GL.recordError(0x501/*GL_INVALID_VALUE*/);
              return 0;
            }
            return stringiCache[index];
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            return 0;
        }
      }
  
    function _emscripten_glGetSynciv(sync, pname, bufSize, length, values) {
        if (bufSize < 0) {
          // GLES3 specification does not specify how to behave if bufSize < 0, however in the spec wording for glGetInternalformativ, it does say that GL_INVALID_VALUE should be raised,
          // so raise GL_INVALID_VALUE here as well.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        if (!values) {
          // GLES3 specification does not specify how to behave if values is a null pointer. Since calling this function does not make sense
          // if values == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
        if (ret !== null) {
          HEAP32[((values)>>2)] = ret;
          if (length) HEAP32[((length)>>2)] = 1; // Report a single value outputted.
        }
      }
  
    function _emscripten_glGetTexParameterfv(target, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAPF32[((params)>>2)] = GLctx.getTexParameter(target, pname);
      }
  
    function _emscripten_glGetTexParameteriv(target, pname, params) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((params)>>2)] = GLctx.getTexParameter(target, pname);
      }
  
    function _emscripten_glGetTransformFeedbackVarying(program, index, bufSize, length, size, type, name) {
        program = GL.programs[program];
        var info = GLctx['getTransformFeedbackVarying'](program, index);
        if (!info) return; // If an error occurred, the return parameters length, size, type and name will be unmodified.
    
        if (name && bufSize > 0) {
          var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
          if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        } else {
          if (length) HEAP32[((length)>>2)] = 0;
        }
    
        if (size) HEAP32[((size)>>2)] = info.size;
        if (type) HEAP32[((type)>>2)] = info.type;
      }
  
    function _emscripten_glGetUniformBlockIndex(program, uniformBlockName) {
        return GLctx['getUniformBlockIndex'](GL.programs[program], UTF8ToString(uniformBlockName));
      }
  
    function _emscripten_glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
        if (!uniformIndices) {
          // GLES2 specification does not specify how to behave if uniformIndices is a null pointer. Since calling this function does not make sense
          // if uniformIndices == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        program = GL.programs[program];
        var names = [];
        for (var i = 0; i < uniformCount; i++)
          names.push(UTF8ToString(HEAP32[(((uniformNames)+(i*4))>>2)]));
    
        var result = GLctx['getUniformIndices'](program, names);
        if (!result) return; // GL spec: If an error is generated, nothing is written out to uniformIndices.
    
        var len = result.length;
        for (var i = 0; i < len; i++) {
          HEAP32[(((uniformIndices)+(i*4))>>2)] = result[i];
        }
      }
  
    /** @noinline */
    function webglGetLeftBracePos(name) {
        return name.slice(-1) == ']' && name.lastIndexOf('[');
      }
    function webglPrepareUniformLocationsBeforeFirstUse(program) {
        var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
          uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
          i, j;
    
        // On the first time invocation of glGetUniformLocation on this shader program:
        // initialize cache data structures and discover which uniforms are arrays.
        if (!uniformLocsById) {
          // maps GLint integer locations to WebGLUniformLocations
          program.uniformLocsById = uniformLocsById = {};
          // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
          program.uniformArrayNamesById = {};
    
          for (i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
            var u = GLctx.getActiveUniform(program, i);
            var nm = u.name;
            var sz = u.size;
            var lb = webglGetLeftBracePos(nm);
            var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
    
            // Assign a new location.
            var id = program.uniformIdCounter;
            program.uniformIdCounter += sz;
            // Eagerly get the location of the uniformArray[0] base element.
            // The remaining indices >0 will be left for lazy evaluation to
            // improve performance. Those may never be needed to fetch, if the
            // application fills arrays always in full starting from the first
            // element of the array.
            uniformSizeAndIdsByName[arrayName] = [sz, id];
    
            // Store placeholder integers in place that highlight that these
            // >0 index locations are array indices pending population.
            for(j = 0; j < sz; ++j) {
              uniformLocsById[id] = j;
              program.uniformArrayNamesById[id++] = arrayName;
            }
          }
        }
      }
    function _emscripten_glGetUniformLocation(program, name) {
    
        name = UTF8ToString(name);
    
        if (program = GL.programs[program]) {
          webglPrepareUniformLocationsBeforeFirstUse(program);
          var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
          var arrayIndex = 0;
          var uniformBaseName = name;
    
          // Invariant: when populating integer IDs for uniform locations, we must maintain the precondition that
          // arrays reside in contiguous addresses, i.e. for a 'vec4 colors[10];', colors[4] must be at location colors[0]+4.
          // However, user might call glGetUniformLocation(program, "colors") for an array, so we cannot discover based on the user
          // input arguments whether the uniform we are dealing with is an array. The only way to discover which uniforms are arrays
          // is to enumerate over all the active uniforms in the program.
          var leftBrace = webglGetLeftBracePos(name);
    
          // If user passed an array accessor "[index]", parse the array index off the accessor.
          if (leftBrace > 0) {
            arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
            uniformBaseName = name.slice(0, leftBrace);
          }
    
          // Have we cached the location of this uniform before?
          var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName]; // A pair [array length, GLint of the uniform location]
    
          // If an uniform with this name exists, and if its index is within the array limits (if it's even an array),
          // query the WebGLlocation, or return an existing cached location.
          if (sizeAndId && arrayIndex < sizeAndId[0]) {
            arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
            if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
              return arrayIndex;
            }
          }
        }
        else {
          // N.b. we are currently unable to distinguish between GL program IDs that never existed vs GL program IDs that have been deleted,
          // so report GL_INVALID_VALUE in both cases.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
        }
        return -1;
      }
  
    function webglGetUniformLocation(location) {
        var p = GLctx.currentProgram;
    
        if (p) {
          var webglLoc = p.uniformLocsById[location];
          // p.uniformLocsById[location] stores either an integer, or a WebGLUniformLocation.
    
          // If an integer, we have not yet bound the location, so do it now. The integer value specifies the array index
          // we should bind to.
          if (typeof webglLoc == 'number') {
            p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? '[' + webglLoc + ']' : ''));
          }
          // Else an already cached WebGLUniformLocation, return it.
          return webglLoc;
        } else {
          GL.recordError(0x502/*GL_INVALID_OPERATION*/);
        }
      }
    /** @suppress{checkTypes} */
    function emscriptenWebGLGetUniform(program, location, params, type) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if params == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        program = GL.programs[program];
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var data = GLctx.getUniform(program, webglGetUniformLocation(location));
        if (typeof data == 'number' || typeof data == 'boolean') {
          switch (type) {
            case 0: HEAP32[((params)>>2)] = data; break;
            case 2: HEAPF32[((params)>>2)] = data; break;
          }
        } else {
          for (var i = 0; i < data.length; i++) {
            switch (type) {
              case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
              case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
            }
          }
        }
      }
    function _emscripten_glGetUniformfv(program, location, params) {
        emscriptenWebGLGetUniform(program, location, params, 2);
      }
  
    function _emscripten_glGetUniformiv(program, location, params) {
        emscriptenWebGLGetUniform(program, location, params, 0);
      }
  
    function _emscripten_glGetUniformuiv(program, location, params) {
        emscriptenWebGLGetUniform(program, location, params, 0);
      }
  
    /** @suppress{checkTypes} */
    function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
        if (!params) {
          // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
          // if params == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        var data = GLctx.getVertexAttrib(index, pname);
        if (pname == 0x889F/*VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/) {
          HEAP32[((params)>>2)] = data && data["name"];
        } else if (typeof data == 'number' || typeof data == 'boolean') {
          switch (type) {
            case 0: HEAP32[((params)>>2)] = data; break;
            case 2: HEAPF32[((params)>>2)] = data; break;
            case 5: HEAP32[((params)>>2)] = Math.fround(data); break;
          }
        } else {
          for (var i = 0; i < data.length; i++) {
            switch (type) {
              case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
              case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
              case 5: HEAP32[(((params)+(i*4))>>2)] = Math.fround(data[i]); break;
            }
          }
        }
      }
    function _emscripten_glGetVertexAttribIiv(index, pname, params) {
        // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttribI4iv(),
        // otherwise the results are undefined. (GLES3 spec 6.1.12)
        emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
      }
  
    function _emscripten_glGetVertexAttribIuiv(index, pname, params) {
        // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttribI4iv(),
        // otherwise the results are undefined. (GLES3 spec 6.1.12)
        emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
      }
  
    function _emscripten_glGetVertexAttribPointerv(index, pname, pointer) {
        if (!pointer) {
          // GLES2 specification does not specify how to behave if pointer is a null pointer. Since calling this function does not make sense
          // if pointer == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        HEAP32[((pointer)>>2)] = GLctx.getVertexAttribOffset(index, pname);
      }
  
    function _emscripten_glGetVertexAttribfv(index, pname, params) {
        // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttrib*f(),
        // otherwise the results are undefined. (GLES3 spec 6.1.12)
        emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
      }
  
    function _emscripten_glGetVertexAttribiv(index, pname, params) {
        // N.B. This function may only be called if the vertex attribute was specified using the function glVertexAttrib*f(),
        // otherwise the results are undefined. (GLES3 spec 6.1.12)
        emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
      }
  
    function _emscripten_glHint(x0, x1) { GLctx['hint'](x0, x1) }
  
    function _emscripten_glInvalidateFramebuffer(target, numAttachments, attachments) {
        var list = tempFixedLengthArray[numAttachments];
        for (var i = 0; i < numAttachments; i++) {
          list[i] = HEAP32[(((attachments)+(i*4))>>2)];
        }
    
        GLctx['invalidateFramebuffer'](target, list);
      }
  
    function _emscripten_glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
        var list = tempFixedLengthArray[numAttachments];
        for (var i = 0; i < numAttachments; i++) {
          list[i] = HEAP32[(((attachments)+(i*4))>>2)];
        }
    
        GLctx['invalidateSubFramebuffer'](target, list, x, y, width, height);
      }
  
    function _emscripten_glIsBuffer(buffer) {
        var b = GL.buffers[buffer];
        if (!b) return 0;
        return GLctx.isBuffer(b);
      }
  
    function _emscripten_glIsEnabled(x0) { return GLctx['isEnabled'](x0) }
  
    function _emscripten_glIsFramebuffer(framebuffer) {
        var fb = GL.framebuffers[framebuffer];
        if (!fb) return 0;
        return GLctx.isFramebuffer(fb);
      }
  
    function _emscripten_glIsProgram(program) {
        program = GL.programs[program];
        if (!program) return 0;
        return GLctx.isProgram(program);
      }
  
    function _emscripten_glIsQuery(id) {
        var query = GL.queries[id];
        if (!query) return 0;
        return GLctx['isQuery'](query);
      }
  
    function _emscripten_glIsQueryEXT(id) {
        var query = GL.queries[id];
        if (!query) return 0;
        return GLctx.disjointTimerQueryExt['isQueryEXT'](query);
      }
  
    function _emscripten_glIsRenderbuffer(renderbuffer) {
        var rb = GL.renderbuffers[renderbuffer];
        if (!rb) return 0;
        return GLctx.isRenderbuffer(rb);
      }
  
    function _emscripten_glIsSampler(id) {
        var sampler = GL.samplers[id];
        if (!sampler) return 0;
        return GLctx['isSampler'](sampler);
      }
  
    function _emscripten_glIsShader(shader) {
        var s = GL.shaders[shader];
        if (!s) return 0;
        return GLctx.isShader(s);
      }
  
    function _emscripten_glIsSync(sync) {
        return GLctx.isSync(GL.syncs[sync]);
      }
  
    function _emscripten_glIsTexture(id) {
        var texture = GL.textures[id];
        if (!texture) return 0;
        return GLctx.isTexture(texture);
      }
  
    function _emscripten_glIsTransformFeedback(id) {
        return GLctx['isTransformFeedback'](GL.transformFeedbacks[id]);
      }
  
    function _emscripten_glIsVertexArray(array) {
    
        var vao = GL.vaos[array];
        if (!vao) return 0;
        return GLctx['isVertexArray'](vao);
      }
  
    function _emscripten_glIsVertexArrayOES(array) {
    
        var vao = GL.vaos[array];
        if (!vao) return 0;
        return GLctx['isVertexArray'](vao);
      }
  
    function _emscripten_glLineWidth(x0) { GLctx['lineWidth'](x0) }
  
    function _emscripten_glLinkProgram(program) {
        program = GL.programs[program];
        GLctx.linkProgram(program);
        // Invalidate earlier computed uniform->ID mappings, those have now become stale
        program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
        program.uniformSizeAndIdsByName = {};
    
      }
  
    function _emscripten_glPauseTransformFeedback() { GLctx['pauseTransformFeedback']() }
  
    function _emscripten_glPixelStorei(pname, param) {
        if (pname == 0xCF5 /* GL_UNPACK_ALIGNMENT */) {
          GL.unpackAlignment = param;
        }
        GLctx.pixelStorei(pname, param);
      }
  
    function _emscripten_glPolygonOffset(x0, x1) { GLctx['polygonOffset'](x0, x1) }
  
    function _emscripten_glProgramBinary(program, binaryFormat, binary, length) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
      }
  
    function _emscripten_glProgramParameteri(program, pname, value) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
      }
  
    function _emscripten_glQueryCounterEXT(id, target) {
        GLctx.disjointTimerQueryExt['queryCounterEXT'](GL.queries[id], target);
      }
  
    function _emscripten_glReadBuffer(x0) { GLctx['readBuffer'](x0) }
  
    function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
        function roundedToNextMultipleOf(x, y) {
          return (x + y - 1) & -y;
        }
        var plainRowSize = width * sizePerPixel;
        var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
        return height * alignedRowSize;
      }
    
    function __colorChannelsInGlTextureFormat(format) {
        // Micro-optimizations for size: map format to size by subtracting smallest enum value (0x1902) from all values first.
        // Also omit the most common size value (1) from the list, which is assumed by formats not on the list.
        var colorChannels = {
          // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
          // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
          5: 3,
          6: 4,
          // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
          8: 2,
          29502: 3,
          29504: 4,
          // 0x1903 /* GL_RED */ - 0x1902: 1,
          26917: 2,
          26918: 2,
          // 0x8D94 /* GL_RED_INTEGER */ - 0x1902: 1,
          29846: 3,
          29847: 4
        };
        return colorChannels[format - 0x1902]||1;
      }
    
    function heapObjectForWebGLType(type) {
        // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
        // smaller values for the heap, for shorter generated code size.
        // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
        // (since most types are HEAPU16)
        type -= 0x1400;
        if (type == 0) return HEAP8;
    
        if (type == 1) return HEAPU8;
    
        if (type == 2) return HEAP16;
    
        if (type == 4) return HEAP32;
    
        if (type == 6) return HEAPF32;
    
        if (type == 5
          || type == 28922
          || type == 28520
          || type == 30779
          || type == 30782
          )
          return HEAPU32;
    
        return HEAPU16;
      }
    
    function heapAccessShiftForWebGLHeap(heap) {
        return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
      }
    function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
        var heap = heapObjectForWebGLType(type);
        var shift = heapAccessShiftForWebGLHeap(heap);
        var byteSize = 1<<shift;
        var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
        var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
        return heap.subarray(pixels >> shift, pixels + bytes >> shift);
      }
    function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelPackBufferBinding) {
            GLctx.readPixels(x, y, width, height, format, type, pixels);
          } else {
            var heap = heapObjectForWebGLType(type);
            GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
          }
          return;
        }
        var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
        if (!pixelData) {
          GL.recordError(0x500/*GL_INVALID_ENUM*/);
          return;
        }
        GLctx.readPixels(x, y, width, height, format, type, pixelData);
      }
  
    function _emscripten_glReleaseShaderCompiler() {
        // NOP (as allowed by GLES 2.0 spec)
      }
  
    function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) { GLctx['renderbufferStorage'](x0, x1, x2, x3) }
  
    function _emscripten_glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) { GLctx['renderbufferStorageMultisample'](x0, x1, x2, x3, x4) }
  
    function _emscripten_glResumeTransformFeedback() { GLctx['resumeTransformFeedback']() }
  
    function _emscripten_glSampleCoverage(value, invert) {
        GLctx.sampleCoverage(value, !!invert);
      }
  
    function _emscripten_glSamplerParameterf(sampler, pname, param) {
        GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
      }
  
    function _emscripten_glSamplerParameterfv(sampler, pname, params) {
        var param = HEAPF32[((params)>>2)];
        GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
      }
  
    function _emscripten_glSamplerParameteri(sampler, pname, param) {
        GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
      }
  
    function _emscripten_glSamplerParameteriv(sampler, pname, params) {
        var param = HEAP32[((params)>>2)];
        GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
      }
  
    function _emscripten_glScissor(x0, x1, x2, x3) { GLctx['scissor'](x0, x1, x2, x3) }
  
    function _emscripten_glShaderBinary() {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
      }
  
    function _emscripten_glShaderSource(shader, count, string, length) {
        var source = GL.getSource(shader, count, string, length);
    
        GLctx.shaderSource(GL.shaders[shader], source);
      }
  
    function _emscripten_glStencilFunc(x0, x1, x2) { GLctx['stencilFunc'](x0, x1, x2) }
  
    function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) { GLctx['stencilFuncSeparate'](x0, x1, x2, x3) }
  
    function _emscripten_glStencilMask(x0) { GLctx['stencilMask'](x0) }
  
    function _emscripten_glStencilMaskSeparate(x0, x1) { GLctx['stencilMaskSeparate'](x0, x1) }
  
    function _emscripten_glStencilOp(x0, x1, x2) { GLctx['stencilOp'](x0, x1, x2) }
  
    function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) { GLctx['stencilOpSeparate'](x0, x1, x2, x3) }
  
    function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
        if (GL.currentContext.version >= 2) {
          // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
          } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
          } else {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
          }
          return;
        }
        GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
      }
  
    function _emscripten_glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, null);
        }
      }
  
    function _emscripten_glTexParameterf(x0, x1, x2) { GLctx['texParameterf'](x0, x1, x2) }
  
    function _emscripten_glTexParameterfv(target, pname, params) {
        var param = HEAPF32[((params)>>2)];
        GLctx.texParameterf(target, pname, param);
      }
  
    function _emscripten_glTexParameteri(x0, x1, x2) { GLctx['texParameteri'](x0, x1, x2) }
  
    function _emscripten_glTexParameteriv(target, pname, params) {
        var param = HEAP32[((params)>>2)];
        GLctx.texParameteri(target, pname, param);
      }
  
    function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) { GLctx['texStorage2D'](x0, x1, x2, x3, x4) }
  
    function _emscripten_glTexStorage3D(x0, x1, x2, x3, x4, x5) { GLctx['texStorage3D'](x0, x1, x2, x3, x4, x5) }
  
    function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
        if (GL.currentContext.version >= 2) {
          // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
          } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
          } else {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
          }
          return;
        }
        var pixelData = null;
        if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
        GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
      }
  
    function _emscripten_glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
        }
      }
  
    function _emscripten_glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
        program = GL.programs[program];
        var vars = [];
        for (var i = 0; i < count; i++)
          vars.push(UTF8ToString(HEAP32[(((varyings)+(i*4))>>2)]));
    
        GLctx['transformFeedbackVaryings'](program, vars, bufferMode);
      }
  
    function _emscripten_glUniform1f(location, v0) {
        GLctx.uniform1f(webglGetUniformLocation(location), v0);
      }
  
    var miniTempWebGLFloatBuffers = [];
    function _emscripten_glUniform1fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value>>2, count);
          return;
        }
    
        if (count <= 288) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[count-1];
          for (var i = 0; i < count; ++i) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*4)>>2);
        }
        GLctx.uniform1fv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform1i(location, v0) {
        GLctx.uniform1i(webglGetUniformLocation(location), v0);
      }
  
    var __miniTempWebGLIntBuffers = [];
    function _emscripten_glUniform1iv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value>>2, count);
          return;
        }
    
        if (count <= 288) {
          // avoid allocation when uploading few enough uniforms
          var view = __miniTempWebGLIntBuffers[count-1];
          for (var i = 0; i < count; ++i) {
            view[i] = HEAP32[(((value)+(4*i))>>2)];
          }
        } else
        {
          var view = HEAP32.subarray((value)>>2, (value+count*4)>>2);
        }
        GLctx.uniform1iv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform1ui(location, v0) {
        GLctx.uniform1ui(webglGetUniformLocation(location), v0);
      }
  
    function _emscripten_glUniform1uiv(location, count, value) {
        count && GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count);
      }
  
    function _emscripten_glUniform2f(location, v0, v1) {
        GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
      }
  
    function _emscripten_glUniform2fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*2);
          return;
        }
    
        if (count <= 144) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[2*count-1];
          for (var i = 0; i < 2*count; i += 2) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*8)>>2);
        }
        GLctx.uniform2fv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform2i(location, v0, v1) {
        GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
      }
  
    function _emscripten_glUniform2iv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value>>2, count*2);
          return;
        }
    
        if (count <= 144) {
          // avoid allocation when uploading few enough uniforms
          var view = __miniTempWebGLIntBuffers[2*count-1];
          for (var i = 0; i < 2*count; i += 2) {
            view[i] = HEAP32[(((value)+(4*i))>>2)];
            view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          }
        } else
        {
          var view = HEAP32.subarray((value)>>2, (value+count*8)>>2);
        }
        GLctx.uniform2iv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform2ui(location, v0, v1) {
        GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1);
      }
  
    function _emscripten_glUniform2uiv(location, count, value) {
        count && GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count*2);
      }
  
    function _emscripten_glUniform3f(location, v0, v1, v2) {
        GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
      }
  
    function _emscripten_glUniform3fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*3);
          return;
        }
    
        if (count <= 96) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[3*count-1];
          for (var i = 0; i < 3*count; i += 3) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*12)>>2);
        }
        GLctx.uniform3fv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform3i(location, v0, v1, v2) {
        GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
      }
  
    function _emscripten_glUniform3iv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value>>2, count*3);
          return;
        }
    
        if (count <= 96) {
          // avoid allocation when uploading few enough uniforms
          var view = __miniTempWebGLIntBuffers[3*count-1];
          for (var i = 0; i < 3*count; i += 3) {
            view[i] = HEAP32[(((value)+(4*i))>>2)];
            view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
          }
        } else
        {
          var view = HEAP32.subarray((value)>>2, (value+count*12)>>2);
        }
        GLctx.uniform3iv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform3ui(location, v0, v1, v2) {
        GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2);
      }
  
    function _emscripten_glUniform3uiv(location, count, value) {
        count && GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count*3);
      }
  
    function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
        GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
      }
  
    function _emscripten_glUniform4fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*4);
          return;
        }
    
        if (count <= 72) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[4*count-1];
          // hoist the heap out of the loop for size and for pthreads+growth.
          var heap = HEAPF32;
          value >>= 2;
          for (var i = 0; i < 4 * count; i += 4) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
        }
        GLctx.uniform4fv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
        GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
      }
  
    function _emscripten_glUniform4iv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value>>2, count*4);
          return;
        }
    
        if (count <= 72) {
          // avoid allocation when uploading few enough uniforms
          var view = __miniTempWebGLIntBuffers[4*count-1];
          for (var i = 0; i < 4*count; i += 4) {
            view[i] = HEAP32[(((value)+(4*i))>>2)];
            view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
            view[i+3] = HEAP32[(((value)+(4*i+12))>>2)];
          }
        } else
        {
          var view = HEAP32.subarray((value)>>2, (value+count*16)>>2);
        }
        GLctx.uniform4iv(webglGetUniformLocation(location), view);
      }
  
    function _emscripten_glUniform4ui(location, v0, v1, v2, v3) {
        GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3);
      }
  
    function _emscripten_glUniform4uiv(location, count, value) {
        count && GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value>>2, count*4);
      }
  
    function _emscripten_glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
        program = GL.programs[program];
    
        GLctx['uniformBlockBinding'](program, uniformBlockIndex, uniformBlockBinding);
      }
  
    function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*4);
          return;
        }
    
        if (count <= 72) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[4*count-1];
          for (var i = 0; i < 4*count; i += 4) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
            view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
        }
        GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
      }
  
    function _emscripten_glUniformMatrix2x3fv(location, count, transpose, value) {
        count && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*6);
      }
  
    function _emscripten_glUniformMatrix2x4fv(location, count, transpose, value) {
        count && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*8);
      }
  
    function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*9);
          return;
        }
    
        if (count <= 32) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[9*count-1];
          for (var i = 0; i < 9*count; i += 9) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
            view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
            view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
            view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
            view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
            view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
            view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*36)>>2);
        }
        GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
      }
  
    function _emscripten_glUniformMatrix3x2fv(location, count, transpose, value) {
        count && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*6);
      }
  
    function _emscripten_glUniformMatrix3x4fv(location, count, transpose, value) {
        count && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*12);
      }
  
    function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*16);
          return;
        }
    
        if (count <= 18) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[16*count-1];
          // hoist the heap out of the loop for size and for pthreads+growth.
          var heap = HEAPF32;
          value >>= 2;
          for (var i = 0; i < 16 * count; i += 16) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3];
            view[i + 4] = heap[dst + 4];
            view[i + 5] = heap[dst + 5];
            view[i + 6] = heap[dst + 6];
            view[i + 7] = heap[dst + 7];
            view[i + 8] = heap[dst + 8];
            view[i + 9] = heap[dst + 9];
            view[i + 10] = heap[dst + 10];
            view[i + 11] = heap[dst + 11];
            view[i + 12] = heap[dst + 12];
            view[i + 13] = heap[dst + 13];
            view[i + 14] = heap[dst + 14];
            view[i + 15] = heap[dst + 15];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*64)>>2);
        }
        GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
      }
  
    function _emscripten_glUniformMatrix4x2fv(location, count, transpose, value) {
        count && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*8);
      }
  
    function _emscripten_glUniformMatrix4x3fv(location, count, transpose, value) {
        count && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*12);
      }
  
    function _emscripten_glUseProgram(program) {
        program = GL.programs[program];
        GLctx.useProgram(program);
        // Record the currently active program so that we can access the uniform
        // mapping table of that program.
        GLctx.currentProgram = program;
      }
  
    function _emscripten_glValidateProgram(program) {
        GLctx.validateProgram(GL.programs[program]);
      }
  
    function _emscripten_glVertexAttrib1f(x0, x1) { GLctx['vertexAttrib1f'](x0, x1) }
  
    function _emscripten_glVertexAttrib1fv(index, v) {
    
        GLctx.vertexAttrib1f(index, HEAPF32[v>>2]);
      }
  
    function _emscripten_glVertexAttrib2f(x0, x1, x2) { GLctx['vertexAttrib2f'](x0, x1, x2) }
  
    function _emscripten_glVertexAttrib2fv(index, v) {
    
        GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
      }
  
    function _emscripten_glVertexAttrib3f(x0, x1, x2, x3) { GLctx['vertexAttrib3f'](x0, x1, x2, x3) }
  
    function _emscripten_glVertexAttrib3fv(index, v) {
    
        GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
      }
  
    function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) { GLctx['vertexAttrib4f'](x0, x1, x2, x3, x4) }
  
    function _emscripten_glVertexAttrib4fv(index, v) {
    
        GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
      }
  
    function _emscripten_glVertexAttribDivisor(index, divisor) {
        GLctx['vertexAttribDivisor'](index, divisor);
      }
  
    function _emscripten_glVertexAttribDivisorANGLE(index, divisor) {
        GLctx['vertexAttribDivisor'](index, divisor);
      }
  
    function _emscripten_glVertexAttribDivisorARB(index, divisor) {
        GLctx['vertexAttribDivisor'](index, divisor);
      }
  
    function _emscripten_glVertexAttribDivisorEXT(index, divisor) {
        GLctx['vertexAttribDivisor'](index, divisor);
      }
  
    function _emscripten_glVertexAttribDivisorNV(index, divisor) {
        GLctx['vertexAttribDivisor'](index, divisor);
      }
  
    function _emscripten_glVertexAttribI4i(x0, x1, x2, x3, x4) { GLctx['vertexAttribI4i'](x0, x1, x2, x3, x4) }
  
    function _emscripten_glVertexAttribI4iv(index, v) {
        GLctx.vertexAttribI4i(index, HEAP32[v>>2], HEAP32[v+4>>2], HEAP32[v+8>>2], HEAP32[v+12>>2]);
      }
  
    function _emscripten_glVertexAttribI4ui(x0, x1, x2, x3, x4) { GLctx['vertexAttribI4ui'](x0, x1, x2, x3, x4) }
  
    function _emscripten_glVertexAttribI4uiv(index, v) {
        GLctx.vertexAttribI4ui(index, HEAPU32[v>>2], HEAPU32[v+4>>2], HEAPU32[v+8>>2], HEAPU32[v+12>>2]);
      }
  
    function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
        GLctx['vertexAttribIPointer'](index, size, type, stride, ptr);
      }
  
    function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
        GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
      }
  
    function _emscripten_glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }
  
    function _emscripten_glWaitSync(sync, flags, timeoutLo, timeoutHi) {
        // See WebGL2 vs GLES3 difference on GL_TIMEOUT_IGNORED above (https://www.khronos.org/registry/webgl/specs/latest/2.0/#5.15)
        GLctx.waitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
      }
  
    function _emscripten_memcpy_big(dest, src, num) {
        HEAPU8.copyWithin(dest, src, src + num);
      }
  
    function emscripten_realloc_buffer(size) {
        try {
          // round size grow request up to wasm page size (fixed 64KB per spec)
          wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
          updateGlobalBufferAndViews(wasmMemory.buffer);
          return 1 /*success*/;
        } catch(e) {
        }
        // implicit 0 return to save code size (caller will cast "undefined" into 0
        // anyhow)
      }
    function _emscripten_resize_heap(requestedSize) {
        var oldSize = HEAPU8.length;
        requestedSize = requestedSize >>> 0;
        // With multithreaded builds, races can happen (another thread might increase the size
        // in between), so return a failure, and let the caller retry.
    
        // Memory resize rules:
        // 1.  Always increase heap size to at least the requested size, rounded up
        //     to next page multiple.
        // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
        //     geometrically: increase the heap size according to
        //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
        //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
        // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
        //     linearly: increase the heap size by at least
        //     MEMORY_GROWTH_LINEAR_STEP bytes.
        // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
        //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
        // 4.  If we were unable to allocate as much memory, it may be due to
        //     over-eager decision to excessively reserve due to (3) above.
        //     Hence if an allocation fails, cut down on the amount of excess
        //     growth, in an attempt to succeed to perform a smaller allocation.
    
        // A limit is set for how much we can grow. We should not exceed that
        // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
        var maxHeapSize = getHeapMax();
        if (requestedSize > maxHeapSize) {
          return false;
        }
    
        let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
    
        // Loop through potential heap size increases. If we attempt a too eager
        // reservation that fails, cut down on the attempted size and reserve a
        // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
        for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
          var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
          // but limit overreserving (default to capping at +96MB overgrowth at most)
          overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
    
          var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
    
          var replacement = emscripten_realloc_buffer(newSize);
          if (replacement) {
    
            return true;
          }
        }
        return false;
      }
  
    function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
        var browserIterationFunc = getWasmTableEntry(func);
        setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
      }
  
  
    var JSEvents = {inEventHandler:0,removeAllEventListeners:function() {
          for (var i = JSEvents.eventHandlers.length-1; i >= 0; --i) {
            JSEvents._removeHandler(i);
          }
          JSEvents.eventHandlers = [];
          JSEvents.deferredCalls = [];
        },registerRemoveEventListeners:function() {
          if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true;
          }
        },deferredCalls:[],deferCall:function(targetFunction, precedence, argsList) {
          function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length) return false;
    
            for (var i in arrA) {
              if (arrA[i] != arrB[i]) return false;
            }
            return true;
          }
          // Test if the given call was already queued, and if so, don't add it again.
          for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
              return;
            }
          }
          JSEvents.deferredCalls.push({
            targetFunction: targetFunction,
            precedence: precedence,
            argsList: argsList
          });
    
          JSEvents.deferredCalls.sort(function(x,y) { return x.precedence < y.precedence; });
        },removeDeferredCalls:function(targetFunction) {
          for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
              JSEvents.deferredCalls.splice(i, 1);
              --i;
            }
          }
        },canPerformEventHandlerRequests:function() {
          return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
        },runDeferredCalls:function() {
          if (!JSEvents.canPerformEventHandlerRequests()) {
            return;
          }
          for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(null, call.argsList);
          }
        },eventHandlers:[],removeAllHandlersOnTarget:function(target, eventTypeString) {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && 
              (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
               JSEvents._removeHandler(i--);
             }
          }
        },_removeHandler:function(i) {
          var h = JSEvents.eventHandlers[i];
          h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
          JSEvents.eventHandlers.splice(i, 1);
        },registerOrRemoveHandler:function(eventHandler) {
          var jsEventHandler = function jsEventHandler(event) {
            // Increment nesting count for the event handler.
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            // Process any old deferred calls the user has placed.
            JSEvents.runDeferredCalls();
            // Process the actual event, calls back to user C code handler.
            eventHandler.handlerFunc(event);
            // Process any new deferred calls that were placed right now from this event handler.
            JSEvents.runDeferredCalls();
            // Out of event handler - restore nesting count.
            --JSEvents.inEventHandler;
          };
          
          if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners();
          } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
              if (JSEvents.eventHandlers[i].target == eventHandler.target
               && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                 JSEvents._removeHandler(i--);
               }
            }
          }
        },getNodeNameForTarget:function(target) {
          if (!target) return '';
          if (target == window) return '#window';
          if (target == screen) return '#screen';
          return (target && target.nodeName) ? target.nodeName : '';
        },fullscreenEnabled:function() {
          return document.fullscreenEnabled
          // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.
          // TODO: If Safari at some point ships with unprefixed version, update the version check above.
          || document.webkitFullscreenEnabled
           ;
        }};
    
    var __emscripten_webgl_power_preferences = ['default', 'low-power', 'high-performance'];
    
    function maybeCStringToJsString(cString) {
        // "cString > 2" checks if the input is a number, and isn't of the special
        // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).
        // In other words, if cString > 2 then it's a pointer to a valid place in
        // memory, and points to a C string.
        return cString > 2 ? UTF8ToString(cString) : cString;
      }
    
    var specialHTMLTargets = [0, typeof document != 'undefined' ? document : 0, typeof window != 'undefined' ? window : 0];
    function findEventTarget(target) {
        target = maybeCStringToJsString(target);
        var domElement = specialHTMLTargets[target] || (typeof document != 'undefined' ? document.querySelector(target) : undefined);
        return domElement;
      }
    
    function findCanvasEventTarget(target) { return findEventTarget(target); }
    function _emscripten_webgl_do_create_context(target, attributes) {
        var a = attributes >> 2;
        var powerPreference = HEAP32[a + (24>>2)];
        var contextAttributes = {
          'alpha': !!HEAP32[a + (0>>2)],
          'depth': !!HEAP32[a + (4>>2)],
          'stencil': !!HEAP32[a + (8>>2)],
          'antialias': !!HEAP32[a + (12>>2)],
          'premultipliedAlpha': !!HEAP32[a + (16>>2)],
          'preserveDrawingBuffer': !!HEAP32[a + (20>>2)],
          'powerPreference': __emscripten_webgl_power_preferences[powerPreference],
          'failIfMajorPerformanceCaveat': !!HEAP32[a + (28>>2)],
          // The following are not predefined WebGL context attributes in the WebGL specification, so the property names can be minified by Closure.
          majorVersion: HEAP32[a + (32>>2)],
          minorVersion: HEAP32[a + (36>>2)],
          enableExtensionsByDefault: HEAP32[a + (40>>2)],
          explicitSwapControl: HEAP32[a + (44>>2)],
          proxyContextToMainThread: HEAP32[a + (48>>2)],
          renderViaOffscreenBackBuffer: HEAP32[a + (52>>2)]
        };
    
        var canvas = findCanvasEventTarget(target);
    
        if (!canvas) {
          return 0;
        }
    
        if (contextAttributes.explicitSwapControl && !contextAttributes.renderViaOffscreenBackBuffer) {
          contextAttributes.renderViaOffscreenBackBuffer = true;
        }
    
        var contextHandle = GL.createContext(canvas, contextAttributes);
        return contextHandle;
      }
    var _emscripten_webgl_create_context = _emscripten_webgl_do_create_context;
  
    function _emscripten_webgl_destroy_context(contextHandle) {
        if (GL.currentContext == contextHandle) GL.currentContext = 0;
        GL.deleteContext(contextHandle);
      }
  
    function _emscripten_webgl_init_context_attributes(attributes) {
        var a = attributes >> 2;
        for (var i = 0; i < (56>>2); ++i) {
          HEAP32[a+i] = 0;
        }
    
        HEAP32[a + (0>>2)] =
        HEAP32[a + (4>>2)] = 
        HEAP32[a + (12>>2)] = 
        HEAP32[a + (16>>2)] = 
        HEAP32[a + (32>>2)] = 
        HEAP32[a + (40>>2)] = 1;
    
      }
  
    function _emscripten_webgl_make_context_current(contextHandle) {
        var success = GL.makeContextCurrent(contextHandle);
        return success ? 0 : -5;
      }
  
    var ENV = {};
    
    function getExecutableName() {
        return thisProgram || './this.program';
      }
    function getEnvStrings() {
        if (!getEnvStrings.strings) {
          // Default values.
          // Browser language detection #8751
          var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
          var env = {
            'USER': 'web_user',
            'LOGNAME': 'web_user',
            'PATH': '/',
            'PWD': '/',
            'HOME': '/home/web_user',
            'LANG': lang,
            '_': getExecutableName()
          };
          // Apply the user-provided values, if any.
          for (var x in ENV) {
            // x is a key in ENV; if ENV[x] is undefined, that means it was
            // explicitly set to be so. We allow user code to do that to
            // force variables with default values to remain unset.
            if (ENV[x] === undefined) delete env[x];
            else env[x] = ENV[x];
          }
          var strings = [];
          for (var x in env) {
            strings.push(x + '=' + env[x]);
          }
          getEnvStrings.strings = strings;
        }
        return getEnvStrings.strings;
      }
    
    /** @param {boolean=} dontAddNull */
    function writeAsciiToMemory(str, buffer, dontAddNull) {
        for (var i = 0; i < str.length; ++i) {
          HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
        }
        // Null-terminate the pointer to the HEAP.
        if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
      }
    function _environ_get(__environ, environ_buf) {
        var bufSize = 0;
        getEnvStrings().forEach(function(string, i) {
          var ptr = environ_buf + bufSize;
          HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
          writeAsciiToMemory(string, ptr);
          bufSize += string.length + 1;
        });
        return 0;
      }
  
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
        var strings = getEnvStrings();
        HEAPU32[((penviron_count)>>2)] = strings.length;
        var bufSize = 0;
        strings.forEach(function(string) {
          bufSize += string.length + 1;
        });
        HEAPU32[((penviron_buf_size)>>2)] = bufSize;
        return 0;
      }
  
    function _fd_close(fd) {
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return e.errno;
    }
    }
  
    function _fd_fdstat_get(fd, pbuf) {
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        // All character devices are terminals (other things a Linux system would
        // assume is a character device, like the mouse, we have special APIs for).
        var type = stream.tty ? 2 :
                   FS.isDir(stream.mode) ? 3 :
                   FS.isLink(stream.mode) ? 7 :
                   4;
        HEAP8[((pbuf)>>0)] = type;
        // TODO HEAP16[(((pbuf)+(2))>>1)] = ?;
        // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
        // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return e.errno;
    }
    }
  
    /** @param {number=} offset */
    function doReadv(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAPU32[((iov)>>2)];
          var len = HEAPU32[(((iov)+(4))>>2)];
          iov += 8;
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      }
    function _fd_read(fd, iov, iovcnt, pnum) {
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        HEAP32[((pnum)>>2)] = num;
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return e.errno;
    }
    }
  
    function convertI32PairToI53Checked(lo, hi) {
        return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
      }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    try {
    
        var offset = convertI32PairToI53Checked(offset_low, offset_high); if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return e.errno;
    }
    }
  
    /** @param {number=} offset */
    function doWritev(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAPU32[((iov)>>2)];
          var len = HEAPU32[(((iov)+(4))>>2)];
          iov += 8;
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      }
    function _fd_write(fd, iov, iovcnt, pnum) {
    try {
    
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        HEAPU32[((pnum)>>2)] = num;
        return 0;
      } catch (e) {
      if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
      return e.errno;
    }
    }
  
    function _getTempRet0() {
        return getTempRet0();
      }
  
    function _getaddrinfo(node, service, hint, out) {
        // Note getaddrinfo currently only returns a single addrinfo with ai_next defaulting to NULL. When NULL
        // hints are specified or ai_family set to AF_UNSPEC or ai_socktype or ai_protocol set to 0 then we
        // really should provide a linked list of suitable addrinfo values.
        var addrs = [];
        var canon = null;
        var addr = 0;
        var port = 0;
        var flags = 0;
        var family = 0;
        var type = 0;
        var proto = 0;
        var ai, last;
    
        function allocaddrinfo(family, type, proto, canon, addr, port) {
          var sa, salen, ai;
          var errno;
    
          salen = family === 10 ?
            28 :
            16;
          addr = family === 10 ?
            inetNtop6(addr) :
            inetNtop4(addr);
          sa = _malloc(salen);
          errno = writeSockaddr(sa, family, addr, port);
          assert(!errno);
    
          ai = _malloc(32);
          HEAP32[(((ai)+(4))>>2)] = family;
          HEAP32[(((ai)+(8))>>2)] = type;
          HEAP32[(((ai)+(12))>>2)] = proto;
          HEAP32[(((ai)+(24))>>2)] = canon;
          HEAPU32[(((ai)+(20))>>2)] = sa;
          if (family === 10) {
            HEAP32[(((ai)+(16))>>2)] = 28;
          } else {
            HEAP32[(((ai)+(16))>>2)] = 16;
          }
          HEAP32[(((ai)+(28))>>2)] = 0;
    
          return ai;
        }
    
        if (hint) {
          flags = HEAP32[((hint)>>2)];
          family = HEAP32[(((hint)+(4))>>2)];
          type = HEAP32[(((hint)+(8))>>2)];
          proto = HEAP32[(((hint)+(12))>>2)];
        }
        if (type && !proto) {
          proto = type === 2 ? 17 : 6;
        }
        if (!type && proto) {
          type = proto === 17 ? 2 : 1;
        }
    
        // If type or proto are set to zero in hints we should really be returning multiple addrinfo values, but for
        // now default to a TCP STREAM socket so we can at least return a sensible addrinfo given NULL hints.
        if (proto === 0) {
          proto = 6;
        }
        if (type === 0) {
          type = 1;
        }
    
        if (!node && !service) {
          return -2;
        }
        if (flags & ~(1|2|4|
            1024|8|16|32)) {
          return -1;
        }
        if (hint !== 0 && (HEAP32[((hint)>>2)] & 2) && !node) {
          return -1;
        }
        if (flags & 32) {
          // TODO
          return -2;
        }
        if (type !== 0 && type !== 1 && type !== 2) {
          return -7;
        }
        if (family !== 0 && family !== 2 && family !== 10) {
          return -6;
        }
    
        if (service) {
          service = UTF8ToString(service);
          port = parseInt(service, 10);
    
          if (isNaN(port)) {
            if (flags & 1024) {
              return -2;
            }
            // TODO support resolving well-known service names from:
            // http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
            return -8;
          }
        }
    
        if (!node) {
          if (family === 0) {
            family = 2;
          }
          if ((flags & 1) === 0) {
            if (family === 2) {
              addr = _htonl(2130706433);
            } else {
              addr = [0, 0, 0, 1];
            }
          }
          ai = allocaddrinfo(family, type, proto, null, addr, port);
          HEAPU32[((out)>>2)] = ai;
          return 0;
        }
    
        //
        // try as a numeric address
        //
        node = UTF8ToString(node);
        addr = inetPton4(node);
        if (addr !== null) {
          // incoming node is a valid ipv4 address
          if (family === 0 || family === 2) {
            family = 2;
          }
          else if (family === 10 && (flags & 8)) {
            addr = [0, 0, _htonl(0xffff), addr];
            family = 10;
          } else {
            return -2;
          }
        } else {
          addr = inetPton6(node);
          if (addr !== null) {
            // incoming node is a valid ipv6 address
            if (family === 0 || family === 10) {
              family = 10;
            } else {
              return -2;
            }
          }
        }
        if (addr != null) {
          ai = allocaddrinfo(family, type, proto, node, addr, port);
          HEAPU32[((out)>>2)] = ai;
          return 0;
        }
        if (flags & 4) {
          return -2;
        }
    
        //
        // try as a hostname
        //
        // resolve the hostname to a temporary fake address
        node = DNS.lookup_name(node);
        addr = inetPton4(node);
        if (family === 0) {
          family = 2;
        } else if (family === 10) {
          addr = [0, 0, _htonl(0xffff), addr];
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
  
    function _getentropy(buffer, size) {
        if (!_getentropy.randomDevice) {
          _getentropy.randomDevice = getRandomDevice();
        }
        for (var i = 0; i < size; i++) {
          HEAP8[(((buffer)+(i))>>0)] = _getentropy.randomDevice();
        }
        return 0;
      }
  
    function _glActiveTexture(x0) { GLctx['activeTexture'](x0) }
  
    function _glAttachShader(program, shader) {
        GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
      }
  
    function _glBeginTransformFeedback(x0) { GLctx['beginTransformFeedback'](x0) }
  
    function _glBindAttribLocation(program, index, name) {
        GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
      }
  
    function _glBindBuffer(target, buffer) {
    
        if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
          // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2 API function call when a buffer is bound to
          // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that binding point is non-null to know what is
          // the proper API function to call.
          GLctx.currentPixelPackBufferBinding = buffer;
        } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
          // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
          // use a different WebGL 2 API function call when a buffer is bound to
          // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
          // binding point is non-null to know what is the proper API function to
          // call.
          GLctx.currentPixelUnpackBufferBinding = buffer;
        }
        GLctx.bindBuffer(target, GL.buffers[buffer]);
      }
  
    function _glBindBufferBase(target, index, buffer) {
        GLctx['bindBufferBase'](target, index, GL.buffers[buffer]);
      }
  
    function _glBindFramebuffer(target, framebuffer) {
    
        // defaultFbo may not be present if 'renderViaOffscreenBackBuffer' was not enabled during context creation time,
        // i.e. setting -sOFFSCREEN_FRAMEBUFFER at compilation time does not yet mandate that offscreen back buffer
        // is being used, but that is ultimately decided at context creation time.
        GLctx.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : GL.currentContext.defaultFbo);
    
      }
  
    function _glBindRenderbuffer(target, renderbuffer) {
        GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
      }
  
    function _glBindTexture(target, texture) {
        GLctx.bindTexture(target, GL.textures[texture]);
      }
  
    function _glBindVertexArray(vao) {
        GLctx['bindVertexArray'](GL.vaos[vao]);
      }
  
    function _glBlendEquation(x0) { GLctx['blendEquation'](x0) }
  
    function _glBlendFunc(x0, x1) { GLctx['blendFunc'](x0, x1) }
  
    function _glBlendFuncSeparate(x0, x1, x2, x3) { GLctx['blendFuncSeparate'](x0, x1, x2, x3) }
  
    function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) { GLctx['blitFramebuffer'](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) }
  
    function _glBufferData(target, size, data, usage) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          // If size is zero, WebGL would interpret uploading the whole input arraybuffer (starting from given offset), which would
          // not make sense in WebAssembly, so avoid uploading if size is zero. However we must still call bufferData to establish a
          // backing storage of zero bytes.
          if (data && size) {
            GLctx.bufferData(target, HEAPU8, usage, data, size);
          } else {
            GLctx.bufferData(target, size, usage);
          }
        } else {
          // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
          // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
          GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
        }
      }
  
    function _glBufferSubData(target, offset, size, data) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
          return;
        }
        GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
      }
  
    function _glCheckFramebufferStatus(x0) { return GLctx['checkFramebufferStatus'](x0) }
  
    function _glClear(x0) { GLctx['clear'](x0) }
  
    function _glClearBufferfv(buffer, drawbuffer, value) {
    
        GLctx['clearBufferfv'](buffer, drawbuffer, HEAPF32, value>>2);
      }
  
    function _glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }
  
    function _glClearDepthf(x0) { GLctx['clearDepth'](x0) }
  
    function _glColorMask(red, green, blue, alpha) {
        GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
      }
  
    function _glCompileShader(shader) {
        GLctx.compileShader(GL.shaders[shader]);
      }
  
    function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, imageSize, data);
          } else {
            GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
          }
          return;
        }
        GLctx['compressedTexImage2D'](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
      }
  
    function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, imageSize, data);
          } else {
            GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
          }
          return;
        }
        GLctx['compressedTexSubImage2D'](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray((data), (data+imageSize)) : null);
      }
  
    function _glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['compressedTexSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
        } else {
          GLctx['compressedTexSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
        }
      }
  
    function _glCopyBufferSubData(x0, x1, x2, x3, x4) { GLctx['copyBufferSubData'](x0, x1, x2, x3, x4) }
  
    function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) { GLctx['copyTexSubImage2D'](x0, x1, x2, x3, x4, x5, x6, x7) }
  
    function _glCreateProgram() {
        var id = GL.getNewId(GL.programs);
        var program = GLctx.createProgram();
        // Store additional information needed for each shader program:
        program.name = id;
        // Lazy cache results of glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
        program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
        program.uniformIdCounter = 1;
        GL.programs[id] = program;
        return id;
      }
  
    function _glCreateShader(shaderType) {
        var id = GL.getNewId(GL.shaders);
        GL.shaders[id] = GLctx.createShader(shaderType);
    
        return id;
      }
  
    function _glCullFace(x0) { GLctx['cullFace'](x0) }
  
    function _glDeleteBuffers(n, buffers) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((buffers)+(i*4))>>2)];
          var buffer = GL.buffers[id];
    
          // From spec: "glDeleteBuffers silently ignores 0's and names that do not
          // correspond to existing buffer objects."
          if (!buffer) continue;
    
          GLctx.deleteBuffer(buffer);
          buffer.name = 0;
          GL.buffers[id] = null;
    
          if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
          if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
        }
      }
  
    function _glDeleteFramebuffers(n, framebuffers) {
        for (var i = 0; i < n; ++i) {
          var id = HEAP32[(((framebuffers)+(i*4))>>2)];
          var framebuffer = GL.framebuffers[id];
          if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
          GLctx.deleteFramebuffer(framebuffer);
          framebuffer.name = 0;
          GL.framebuffers[id] = null;
        }
      }
  
    function _glDeleteProgram(id) {
        if (!id) return;
        var program = GL.programs[id];
        if (!program) { // glDeleteProgram actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        GLctx.deleteProgram(program);
        program.name = 0;
        GL.programs[id] = null;
      }
  
    function _glDeleteRenderbuffers(n, renderbuffers) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
          var renderbuffer = GL.renderbuffers[id];
          if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
          GLctx.deleteRenderbuffer(renderbuffer);
          renderbuffer.name = 0;
          GL.renderbuffers[id] = null;
        }
      }
  
    function _glDeleteShader(id) {
        if (!id) return;
        var shader = GL.shaders[id];
        if (!shader) { // glDeleteShader actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        GLctx.deleteShader(shader);
        GL.shaders[id] = null;
      }
  
    function _glDeleteTextures(n, textures) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((textures)+(i*4))>>2)];
          var texture = GL.textures[id];
          if (!texture) continue; // GL spec: "glDeleteTextures silently ignores 0s and names that do not correspond to existing textures".
          GLctx.deleteTexture(texture);
          texture.name = 0;
          GL.textures[id] = null;
        }
      }
  
    function _glDeleteVertexArrays(n, vaos) {
        for (var i = 0; i < n; i++) {
          var id = HEAP32[(((vaos)+(i*4))>>2)];
          GLctx['deleteVertexArray'](GL.vaos[id]);
          GL.vaos[id] = null;
        }
      }
  
    function _glDepthFunc(x0) { GLctx['depthFunc'](x0) }
  
    function _glDepthMask(flag) {
        GLctx.depthMask(!!flag);
      }
  
    function _glDisable(x0) { GLctx['disable'](x0) }
  
    function _glDisableVertexAttribArray(index) {
        GLctx.disableVertexAttribArray(index);
      }
  
    function _glDrawArrays(mode, first, count) {
    
        GLctx.drawArrays(mode, first, count);
    
      }
  
    function _glDrawArraysInstanced(mode, first, count, primcount) {
        GLctx['drawArraysInstanced'](mode, first, count, primcount);
      }
  
    function _glDrawBuffers(n, bufs) {
    
        var bufArray = tempFixedLengthArray[n];
        for (var i = 0; i < n; i++) {
          bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
        }
    
        GLctx['drawBuffers'](bufArray);
      }
  
  
    function _glDrawElementsInstanced(mode, count, type, indices, primcount) {
        GLctx['drawElementsInstanced'](mode, count, type, indices, primcount);
      }
  
    function _glEnable(x0) { GLctx['enable'](x0) }
  
    function _glEnableVertexAttribArray(index) {
        GLctx.enableVertexAttribArray(index);
      }
  
    function _glEndTransformFeedback() { GLctx['endTransformFeedback']() }
  
    function _glFinish() { GLctx['finish']() }
  
    function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
        GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                           GL.renderbuffers[renderbuffer]);
      }
  
    function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
        GLctx.framebufferTexture2D(target, attachment, textarget,
                                        GL.textures[texture], level);
      }
  
    function _glFramebufferTextureLayer(target, attachment, texture, level, layer) {
        GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
      }
  
    function _glFrontFace(x0) { GLctx['frontFace'](x0) }
  
    function _glGenBuffers(n, buffers) {
        __glGenObject(n, buffers, 'createBuffer', GL.buffers
          );
      }
  
    function _glGenFramebuffers(n, ids) {
        __glGenObject(n, ids, 'createFramebuffer', GL.framebuffers
          );
      }
  
    function _glGenRenderbuffers(n, renderbuffers) {
        __glGenObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
          );
      }
  
    function _glGenTextures(n, textures) {
        __glGenObject(n, textures, 'createTexture', GL.textures
          );
      }
  
    function _glGenVertexArrays(n, arrays) {
        __glGenObject(n, arrays, 'createVertexArray', GL.vaos
          );
      }
  
    function _glGenerateMipmap(x0) { GLctx['generateMipmap'](x0) }
  
    function _glGetError() {
        var error = GLctx.getError() || GL.lastError;
        GL.lastError = 0/*GL_NO_ERROR*/;
        return error;
      }
  
    function _glGetFloatv(name_, p) {
        emscriptenWebGLGet(name_, p, 2);
      }
  
    function _glGetIntegerv(name_, p) {
        emscriptenWebGLGet(name_, p, 0);
      }
  
    function _glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
  
    function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
        var log = GLctx.getProgramInfoLog(GL.programs[program]);
        if (log === null) log = '(unknown error)';
        var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      }
  
    function _glGetProgramiv(program, pname, p) {
        if (!p) {
          // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
    
        if (program >= GL.counter) {
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
    
        program = GL.programs[program];
    
        if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
          var log = GLctx.getProgramInfoLog(program);
          if (log === null) log = '(unknown error)';
          HEAP32[((p)>>2)] = log.length + 1;
        } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
          if (!program.maxUniformLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
              program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
            }
          }
          HEAP32[((p)>>2)] = program.maxUniformLength;
        } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
          if (!program.maxAttributeLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/); ++i) {
              program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
            }
          }
          HEAP32[((p)>>2)] = program.maxAttributeLength;
        } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
          if (!program.maxUniformBlockNameLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/); ++i) {
              program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
            }
          }
          HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
        } else {
          HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
        }
      }
  
    function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      }
  
    function _glGetShaderSource(shader, bufSize, length, source) {
        var result = GLctx.getShaderSource(GL.shaders[shader]);
        if (!result) return; // If an error occurs, nothing will be written to length or source.
        var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
      }
  
    function _glGetShaderiv(shader, pname, p) {
        if (!p) {
          // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
          // if p == null, issue a GL error to notify user about it.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
          return;
        }
        if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
          var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
          if (log === null) log = '(unknown error)';
          // The GLES2 specification says that if the shader has an empty info log,
          // a value of 0 is returned. Otherwise the log has a null char appended.
          // (An empty string is falsey, so we can just check that instead of
          // looking at log.length.)
          var logLength = log ? log.length + 1 : 0;
          HEAP32[((p)>>2)] = logLength;
        } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
          var source = GLctx.getShaderSource(GL.shaders[shader]);
          // source may be a null, or the empty string, both of which are falsey
          // values that we report a 0 length for.
          var sourceLength = source ? source.length + 1 : 0;
          HEAP32[((p)>>2)] = sourceLength;
        } else {
          HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
        }
      }
  
    function _glGetString(name_) {
        var ret = GL.stringCache[name_];
        if (!ret) {
          switch (name_) {
            case 0x1F03 /* GL_EXTENSIONS */:
              var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
              exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
              ret = stringToNewUTF8(exts.join(' '));
              break;
            case 0x1F00 /* GL_VENDOR */:
            case 0x1F01 /* GL_RENDERER */:
            case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
            case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
              var s = GLctx.getParameter(name_);
              if (!s) {
                GL.recordError(0x500/*GL_INVALID_ENUM*/);
              }
              ret = s && stringToNewUTF8(s);
              break;
    
            case 0x1F02 /* GL_VERSION */:
              var glVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
              // return GLES version string corresponding to the version of the WebGL context
              if (GL.currentContext.version >= 2) glVersion = 'OpenGL ES 3.0 (' + glVersion + ')';
              else
              {
                glVersion = 'OpenGL ES 2.0 (' + glVersion + ')';
              }
              ret = stringToNewUTF8(glVersion);
              break;
            case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
              var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
              // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
              var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
              var ver_num = glslVersion.match(ver_re);
              if (ver_num !== null) {
                if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
                glslVersion = 'OpenGL ES GLSL ES ' + ver_num[1] + ' (' + glslVersion + ')';
              }
              ret = stringToNewUTF8(glslVersion);
              break;
            default:
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
              // fall through
          }
          GL.stringCache[name_] = ret;
        }
        return ret;
      }
  
    function _glGetStringi(name, index) {
        if (GL.currentContext.version < 2) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
          return 0;
        }
        var stringiCache = GL.stringiCache[name];
        if (stringiCache) {
          if (index < 0 || index >= stringiCache.length) {
            GL.recordError(0x501/*GL_INVALID_VALUE*/);
            return 0;
          }
          return stringiCache[index];
        }
        switch (name) {
          case 0x1F03 /* GL_EXTENSIONS */:
            var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
            exts = exts.map(function(e) { return stringToNewUTF8(e); });
    
            stringiCache = GL.stringiCache[name] = exts;
            if (index < 0 || index >= stringiCache.length) {
              GL.recordError(0x501/*GL_INVALID_VALUE*/);
              return 0;
            }
            return stringiCache[index];
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            return 0;
        }
      }
  
    function _glGetUniformBlockIndex(program, uniformBlockName) {
        return GLctx['getUniformBlockIndex'](GL.programs[program], UTF8ToString(uniformBlockName));
      }
  
    function _glGetUniformLocation(program, name) {
    
        name = UTF8ToString(name);
    
        if (program = GL.programs[program]) {
          webglPrepareUniformLocationsBeforeFirstUse(program);
          var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
          var arrayIndex = 0;
          var uniformBaseName = name;
    
          // Invariant: when populating integer IDs for uniform locations, we must maintain the precondition that
          // arrays reside in contiguous addresses, i.e. for a 'vec4 colors[10];', colors[4] must be at location colors[0]+4.
          // However, user might call glGetUniformLocation(program, "colors") for an array, so we cannot discover based on the user
          // input arguments whether the uniform we are dealing with is an array. The only way to discover which uniforms are arrays
          // is to enumerate over all the active uniforms in the program.
          var leftBrace = webglGetLeftBracePos(name);
    
          // If user passed an array accessor "[index]", parse the array index off the accessor.
          if (leftBrace > 0) {
            arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
            uniformBaseName = name.slice(0, leftBrace);
          }
    
          // Have we cached the location of this uniform before?
          var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName]; // A pair [array length, GLint of the uniform location]
    
          // If an uniform with this name exists, and if its index is within the array limits (if it's even an array),
          // query the WebGLlocation, or return an existing cached location.
          if (sizeAndId && arrayIndex < sizeAndId[0]) {
            arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
            if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
              return arrayIndex;
            }
          }
        }
        else {
          // N.b. we are currently unable to distinguish between GL program IDs that never existed vs GL program IDs that have been deleted,
          // so report GL_INVALID_VALUE in both cases.
          GL.recordError(0x501 /* GL_INVALID_VALUE */);
        }
        return -1;
      }
  
    function _glInvalidateFramebuffer(target, numAttachments, attachments) {
        var list = tempFixedLengthArray[numAttachments];
        for (var i = 0; i < numAttachments; i++) {
          list[i] = HEAP32[(((attachments)+(i*4))>>2)];
        }
    
        GLctx['invalidateFramebuffer'](target, list);
      }
  
    function _glLinkProgram(program) {
        program = GL.programs[program];
        GLctx.linkProgram(program);
        // Invalidate earlier computed uniform->ID mappings, those have now become stale
        program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
        program.uniformSizeAndIdsByName = {};
    
      }
  
    function _glPixelStorei(pname, param) {
        if (pname == 0xCF5 /* GL_UNPACK_ALIGNMENT */) {
          GL.unpackAlignment = param;
        }
        GLctx.pixelStorei(pname, param);
      }
  
    function _glProgramBinary(program, binaryFormat, binary, length) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
      }
  
    function _glProgramParameteri(program, pname, value) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
      }
  
    function _glReadBuffer(x0) { GLctx['readBuffer'](x0) }
  
    function _glReadPixels(x, y, width, height, format, type, pixels) {
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelPackBufferBinding) {
            GLctx.readPixels(x, y, width, height, format, type, pixels);
          } else {
            var heap = heapObjectForWebGLType(type);
            GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
          }
          return;
        }
        var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
        if (!pixelData) {
          GL.recordError(0x500/*GL_INVALID_ENUM*/);
          return;
        }
        GLctx.readPixels(x, y, width, height, format, type, pixelData);
      }
  
    function _glRenderbufferStorage(x0, x1, x2, x3) { GLctx['renderbufferStorage'](x0, x1, x2, x3) }
  
    function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) { GLctx['renderbufferStorageMultisample'](x0, x1, x2, x3, x4) }
  
    function _glScissor(x0, x1, x2, x3) { GLctx['scissor'](x0, x1, x2, x3) }
  
    function _glShaderSource(shader, count, string, length) {
        var source = GL.getSource(shader, count, string, length);
    
        GLctx.shaderSource(GL.shaders[shader], source);
      }
  
    function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
        if (GL.currentContext.version >= 2) {
          // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
          } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
          } else {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
          }
          return;
        }
        GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
      }
  
    function _glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx['texImage3D'](target, level, internalFormat, width, height, depth, border, format, type, null);
        }
      }
  
    function _glTexParameterf(x0, x1, x2) { GLctx['texParameterf'](x0, x1, x2) }
  
    function _glTexParameteri(x0, x1, x2) { GLctx['texParameteri'](x0, x1, x2) }
  
    function _glTexStorage2D(x0, x1, x2, x3, x4) { GLctx['texStorage2D'](x0, x1, x2, x3, x4) }
  
    function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
        if (GL.currentContext.version >= 2) {
          // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
          } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
          } else {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
          }
          return;
        }
        var pixelData = null;
        if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
        GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
      }
  
    function _glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx['texSubImage3D'](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
        }
      }
  
    function _glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
        program = GL.programs[program];
        var vars = [];
        for (var i = 0; i < count; i++)
          vars.push(UTF8ToString(HEAP32[(((varyings)+(i*4))>>2)]));
    
        GLctx['transformFeedbackVaryings'](program, vars, bufferMode);
      }
  
    function _glUniform1f(location, v0) {
        GLctx.uniform1f(webglGetUniformLocation(location), v0);
      }
  
    function _glUniform1i(location, v0) {
        GLctx.uniform1i(webglGetUniformLocation(location), v0);
      }
  
    function _glUniform1iv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value>>2, count);
          return;
        }
    
        if (count <= 288) {
          // avoid allocation when uploading few enough uniforms
          var view = __miniTempWebGLIntBuffers[count-1];
          for (var i = 0; i < count; ++i) {
            view[i] = HEAP32[(((value)+(4*i))>>2)];
          }
        } else
        {
          var view = HEAP32.subarray((value)>>2, (value+count*4)>>2);
        }
        GLctx.uniform1iv(webglGetUniformLocation(location), view);
      }
  
    function _glUniform1ui(location, v0) {
        GLctx.uniform1ui(webglGetUniformLocation(location), v0);
      }
  
    function _glUniform2f(location, v0, v1) {
        GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
      }
  
    function _glUniform2fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*2);
          return;
        }
    
        if (count <= 144) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[2*count-1];
          for (var i = 0; i < 2*count; i += 2) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*8)>>2);
        }
        GLctx.uniform2fv(webglGetUniformLocation(location), view);
      }
  
    function _glUniform2i(location, v0, v1) {
        GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
      }
  
    function _glUniform2iv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value>>2, count*2);
          return;
        }
    
        if (count <= 144) {
          // avoid allocation when uploading few enough uniforms
          var view = __miniTempWebGLIntBuffers[2*count-1];
          for (var i = 0; i < 2*count; i += 2) {
            view[i] = HEAP32[(((value)+(4*i))>>2)];
            view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          }
        } else
        {
          var view = HEAP32.subarray((value)>>2, (value+count*8)>>2);
        }
        GLctx.uniform2iv(webglGetUniformLocation(location), view);
      }
  
    function _glUniform3f(location, v0, v1, v2) {
        GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
      }
  
    function _glUniform3fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*3);
          return;
        }
    
        if (count <= 96) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[3*count-1];
          for (var i = 0; i < 3*count; i += 3) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*12)>>2);
        }
        GLctx.uniform3fv(webglGetUniformLocation(location), view);
      }
  
    function _glUniform3i(location, v0, v1, v2) {
        GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
      }
  
    function _glUniform4f(location, v0, v1, v2, v3) {
        GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
      }
  
    function _glUniform4fv(location, count, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value>>2, count*4);
          return;
        }
    
        if (count <= 72) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[4*count-1];
          // hoist the heap out of the loop for size and for pthreads+growth.
          var heap = HEAPF32;
          value >>= 2;
          for (var i = 0; i < 4 * count; i += 4) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
        }
        GLctx.uniform4fv(webglGetUniformLocation(location), view);
      }
  
    function _glUniform4i(location, v0, v1, v2, v3) {
        GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
      }
  
    function _glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
        program = GL.programs[program];
    
        GLctx['uniformBlockBinding'](program, uniformBlockIndex, uniformBlockBinding);
      }
  
    function _glUniformMatrix2fv(location, count, transpose, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*4);
          return;
        }
    
        if (count <= 72) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[4*count-1];
          for (var i = 0; i < 4*count; i += 4) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
            view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*16)>>2);
        }
        GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
      }
  
    function _glUniformMatrix3fv(location, count, transpose, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*9);
          return;
        }
    
        if (count <= 32) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[9*count-1];
          for (var i = 0; i < 9*count; i += 9) {
            view[i] = HEAPF32[(((value)+(4*i))>>2)];
            view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
            view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
            view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
            view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
            view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
            view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
            view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
            view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*36)>>2);
        }
        GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
      }
  
    function _glUniformMatrix4fv(location, count, transpose, value) {
    
        if (GL.currentContext.version >= 2) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value>>2, count*16);
          return;
        }
    
        if (count <= 18) {
          // avoid allocation when uploading few enough uniforms
          var view = miniTempWebGLFloatBuffers[16*count-1];
          // hoist the heap out of the loop for size and for pthreads+growth.
          var heap = HEAPF32;
          value >>= 2;
          for (var i = 0; i < 16 * count; i += 16) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3];
            view[i + 4] = heap[dst + 4];
            view[i + 5] = heap[dst + 5];
            view[i + 6] = heap[dst + 6];
            view[i + 7] = heap[dst + 7];
            view[i + 8] = heap[dst + 8];
            view[i + 9] = heap[dst + 9];
            view[i + 10] = heap[dst + 10];
            view[i + 11] = heap[dst + 11];
            view[i + 12] = heap[dst + 12];
            view[i + 13] = heap[dst + 13];
            view[i + 14] = heap[dst + 14];
            view[i + 15] = heap[dst + 15];
          }
        } else
        {
          var view = HEAPF32.subarray((value)>>2, (value+count*64)>>2);
        }
        GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
      }
  
    function _glUseProgram(program) {
        program = GL.programs[program];
        GLctx.useProgram(program);
        // Record the currently active program so that we can access the uniform
        // mapping table of that program.
        GLctx.currentProgram = program;
      }
  
    function _glVertexAttrib4f(x0, x1, x2, x3, x4) { GLctx['vertexAttrib4f'](x0, x1, x2, x3, x4) }
  
    function _glVertexAttrib4fv(index, v) {
    
        GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
      }
  
    function _glVertexAttribDivisor(index, divisor) {
        GLctx['vertexAttribDivisor'](index, divisor);
      }
  
    function _glVertexAttribI4ui(x0, x1, x2, x3, x4) { GLctx['vertexAttribI4ui'](x0, x1, x2, x3, x4) }
  
    function _glVertexAttribIPointer(index, size, type, stride, ptr) {
        GLctx['vertexAttribIPointer'](index, size, type, stride, ptr);
      }
  
    function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
        GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
      }
  
    function _glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }
  
    var GodotRuntime = {get_func:function (ptr) {
                return wasmTable.get(ptr); // eslint-disable-line no-undef
            },error:function () {
                err.apply(null, Array.from(arguments)); // eslint-disable-line no-undef
            },print:function () {
                out.apply(null, Array.from(arguments)); // eslint-disable-line no-undef
            },malloc:function (p_size) {
                return _malloc(p_size); // eslint-disable-line no-undef
            },free:function (p_ptr) {
                _free(p_ptr); // eslint-disable-line no-undef
            },getHeapValue:function (p_ptr, p_type) {
                return getValue(p_ptr, p_type); // eslint-disable-line no-undef
            },setHeapValue:function (p_ptr, p_value, p_type) {
                setValue(p_ptr, p_value, p_type); // eslint-disable-line no-undef
            },heapSub:function (p_heap, p_ptr, p_len) {
                const bytes = p_heap.BYTES_PER_ELEMENT;
                return p_heap.subarray(p_ptr / bytes, p_ptr / bytes + p_len);
            },heapSlice:function (p_heap, p_ptr, p_len) {
                const bytes = p_heap.BYTES_PER_ELEMENT;
                return p_heap.slice(p_ptr / bytes, p_ptr / bytes + p_len);
            },heapCopy:function (p_dst, p_src, p_ptr) {
                const bytes = p_src.BYTES_PER_ELEMENT;
                return p_dst.set(p_src, p_ptr / bytes);
            },parseString:function (p_ptr) {
                return UTF8ToString(p_ptr); // eslint-disable-line no-undef
            },parseStringArray:function (p_ptr, p_size) {
                const strings = [];
                const ptrs = GodotRuntime.heapSub(HEAP32, p_ptr, p_size); // TODO wasm64
                ptrs.forEach(function (ptr) {
                    strings.push(GodotRuntime.parseString(ptr));
                });
                return strings;
            },strlen:function (p_str) {
                return lengthBytesUTF8(p_str); // eslint-disable-line no-undef
            },allocString:function (p_str) {
                const length = GodotRuntime.strlen(p_str) + 1;
                const c_str = GodotRuntime.malloc(length);
                stringToUTF8(p_str, c_str, length); // eslint-disable-line no-undef
                return c_str;
            },allocStringArray:function (p_strings) {
                const size = p_strings.length;
                const c_ptr = GodotRuntime.malloc(size * 4);
                for (let i = 0; i < size; i++) {
                    HEAP32[(c_ptr >> 2) + i] = GodotRuntime.allocString(p_strings[i]);
                }
                return c_ptr;
            },freeStringArray:function (p_ptr, p_len) {
                for (let i = 0; i < p_len; i++) {
                    GodotRuntime.free(HEAP32[(p_ptr >> 2) + i]);
                }
                GodotRuntime.free(p_ptr);
            },stringToHeap:function (p_str, p_ptr, p_len) {
                return stringToUTF8Array(p_str, HEAP8, p_ptr, p_len); // eslint-disable-line no-undef
            }};
    
    var GodotConfig = {canvas:null,locale:"en",canvas_resize_policy:2,virtual_keyboard:false,persistent_drops:false,on_execute:null,on_exit:null,init_config:function (p_opts) {
                GodotConfig.canvas_resize_policy = p_opts['canvasResizePolicy'];
                GodotConfig.canvas = p_opts['canvas'];
                GodotConfig.locale = p_opts['locale'] || GodotConfig.locale;
                GodotConfig.virtual_keyboard = p_opts['virtualKeyboard'];
                GodotConfig.persistent_drops = !!p_opts['persistentDrops'];
                GodotConfig.on_execute = p_opts['onExecute'];
                GodotConfig.on_exit = p_opts['onExit'];
                if (p_opts['focusCanvas']) {
                    GodotConfig.canvas.focus();
                }
            },locate_file:function (file) {
                return Module['locateFile'](file); // eslint-disable-line no-undef
            },clear:function () {
                GodotConfig.canvas = null;
                GodotConfig.locale = 'en';
                GodotConfig.canvas_resize_policy = 2;
                GodotConfig.virtual_keyboard = false;
                GodotConfig.persistent_drops = false;
                GodotConfig.on_execute = null;
                GodotConfig.on_exit = null;
            }};
    
    var ERRNO_CODES = {};
    var GodotFS = {_idbfs:false,_syncing:false,_mount_points:[],is_persistent:function () {
                return GodotFS._idbfs ? 1 : 0;
            },init:function (persistentPaths) {
                GodotFS._idbfs = false;
                if (!Array.isArray(persistentPaths)) {
                    return Promise.reject(new Error('Persistent paths must be an array'));
                }
                if (!persistentPaths.length) {
                    return Promise.resolve();
                }
                GodotFS._mount_points = persistentPaths.slice();
    
                function createRecursive(dir) {
                    try {
                        FS.stat(dir);
                    } catch (e) {
                        if (e.errno !== ERRNO_CODES.ENOENT) {
                            throw e;
                        }
                        FS.mkdirTree(dir);
                    }
                }
    
                GodotFS._mount_points.forEach(function (path) {
                    createRecursive(path);
                    FS.mount(IDBFS, {}, path);
                });
                return new Promise(function (resolve, reject) {
                    FS.syncfs(true, function (err) {
                        if (err) {
                            GodotFS._mount_points = [];
                            GodotFS._idbfs = false;
                            GodotRuntime.print(`IndexedDB not available: ${err.message}`);
                        } else {
                            GodotFS._idbfs = true;
                        }
                        resolve(err);
                    });
                });
            },deinit:function () {
                GodotFS._mount_points.forEach(function (path) {
                    try {
                        FS.unmount(path);
                    } catch (e) {
                        GodotRuntime.print('Already unmounted', e);
                    }
                    if (GodotFS._idbfs && IDBFS.dbs[path]) {
                        IDBFS.dbs[path].close();
                        delete IDBFS.dbs[path];
                    }
                });
                GodotFS._mount_points = [];
                GodotFS._idbfs = false;
                GodotFS._syncing = false;
            },sync:function () {
                if (GodotFS._syncing) {
                    GodotRuntime.error('Already syncing!');
                    return Promise.resolve();
                }
                GodotFS._syncing = true;
                return new Promise(function (resolve, reject) {
                    FS.syncfs(false, function (error) {
                        if (error) {
                            GodotRuntime.error(`Failed to save IDB file system: ${error.message}`);
                        }
                        GodotFS._syncing = false;
                        resolve(error);
                    });
                });
            },copy_to_fs:function (path, buffer) {
                const idx = path.lastIndexOf('/');
                let dir = '/';
                if (idx > 0) {
                    dir = path.slice(0, idx);
                }
                try {
                    FS.stat(dir);
                } catch (e) {
                    if (e.errno !== ERRNO_CODES.ENOENT) {
                        throw e;
                    }
                    FS.mkdirTree(dir);
                }
                FS.writeFile(path, new Uint8Array(buffer));
            }};
    var GodotOS = {request_quit:function () {},_async_cbs:[],_fs_sync_promise:null,atexit:function (p_promise_cb) {
                GodotOS._async_cbs.push(p_promise_cb);
            },cleanup:function (exit_code) {
                const cb = GodotConfig.on_exit;
                GodotFS.deinit();
                GodotConfig.clear();
                if (cb) {
                    cb(exit_code);
                }
            },finish_async:function (callback) {
                GodotOS._fs_sync_promise.then(function (err) {
                    const promises = [];
                    GodotOS._async_cbs.forEach(function (cb) {
                        promises.push(new Promise(cb));
                    });
                    return Promise.all(promises);
                }).then(function () {
                    return GodotFS.sync(); // Final FS sync.
                }).then(function (err) {
                    // Always deferred.
                    setTimeout(function () {
                        callback();
                    }, 0);
                });
            }};
    var GodotAudio = {ctx:null,input:null,driver:null,interval:0,init:function (mix_rate, latency, onstatechange, onlatencyupdate) {
                const opts = {};
                // If mix_rate is 0, let the browser choose.
                if (mix_rate) {
                    opts['sampleRate'] = mix_rate;
                }
                // Do not specify, leave 'interactive' for good performance.
                // opts['latencyHint'] = latency / 1000;
                const ctx = new (window.AudioContext || window.webkitAudioContext)(opts);
                GodotAudio.ctx = ctx;
                ctx.onstatechange = function () {
                    let state = 0;
                    switch (ctx.state) {
                    case 'suspended':
                        state = 0;
                        break;
                    case 'running':
                        state = 1;
                        break;
                    case 'closed':
                        state = 2;
                        break;
    
                        // no default
                    }
                    onstatechange(state);
                };
                ctx.onstatechange(); // Immediately notify state.
                // Update computed latency
                GodotAudio.interval = setInterval(function () {
                    let computed_latency = 0;
                    if (ctx.baseLatency) {
                        computed_latency += GodotAudio.ctx.baseLatency;
                    }
                    if (ctx.outputLatency) {
                        computed_latency += GodotAudio.ctx.outputLatency;
                    }
                    onlatencyupdate(computed_latency);
                }, 1000);
                GodotOS.atexit(GodotAudio.close_async);
                return ctx.destination.channelCount;
            },create_input:function (callback) {
                if (GodotAudio.input) {
                    return 0; // Already started.
                }
                function gotMediaInput(stream) {
                    try {
                        GodotAudio.input = GodotAudio.ctx.createMediaStreamSource(stream);
                        callback(GodotAudio.input);
                    } catch (e) {
                        GodotRuntime.error('Failed creaating input.', e);
                    }
                }
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({
                        'audio': true,
                    }).then(gotMediaInput, function (e) {
                        GodotRuntime.error('Error getting user media.', e);
                    });
                } else {
                    if (!navigator.getUserMedia) {
                        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                    }
                    if (!navigator.getUserMedia) {
                        GodotRuntime.error('getUserMedia not available.');
                        return 1;
                    }
                    navigator.getUserMedia({
                        'audio': true,
                    }, gotMediaInput, function (e) {
                        GodotRuntime.print(e);
                    });
                }
                return 0;
            },close_async:function (resolve, reject) {
                const ctx = GodotAudio.ctx;
                GodotAudio.ctx = null;
                // Audio was not initialized.
                if (!ctx) {
                    resolve();
                    return;
                }
                // Remove latency callback
                if (GodotAudio.interval) {
                    clearInterval(GodotAudio.interval);
                    GodotAudio.interval = 0;
                }
                // Disconnect input, if it was started.
                if (GodotAudio.input) {
                    GodotAudio.input.disconnect();
                    GodotAudio.input = null;
                }
                // Disconnect output
                let closed = Promise.resolve();
                if (GodotAudio.driver) {
                    closed = GodotAudio.driver.close();
                }
                closed.then(function () {
                    return ctx.close();
                }).then(function () {
                    ctx.onstatechange = null;
                    resolve();
                }).catch(function (e) {
                    ctx.onstatechange = null;
                    GodotRuntime.error('Error closing AudioContext', e);
                    resolve();
                });
            }};
    function _godot_audio_capture_start() {
            return GodotAudio.create_input(function (input) {
                input.connect(GodotAudio.driver.get_node());
            });
        }
  
    function _godot_audio_capture_stop() {
            if (GodotAudio.input) {
                const tracks = GodotAudio.input['mediaStream']['getTracks']();
                for (let i = 0; i < tracks.length; i++) {
                    tracks[i]['stop']();
                }
                GodotAudio.input.disconnect();
                GodotAudio.input = null;
            }
        }
  
    function _godot_audio_has_script_processor() {
            return (GodotAudio.ctx && GodotAudio.ctx.createScriptProcessor) ? 1 : 0;
        }
  
    function _godot_audio_has_worklet() {
            return (GodotAudio.ctx && GodotAudio.ctx.audioWorklet) ? 1 : 0;
        }
  
    function _godot_audio_init(p_mix_rate, p_latency, p_state_change, p_latency_update) {
            const statechange = GodotRuntime.get_func(p_state_change);
            const latencyupdate = GodotRuntime.get_func(p_latency_update);
            const mix_rate = GodotRuntime.getHeapValue(p_mix_rate, 'i32');
            const channels = GodotAudio.init(mix_rate, p_latency, statechange, latencyupdate);
            GodotRuntime.setHeapValue(p_mix_rate, GodotAudio.ctx.sampleRate, 'i32');
            return channels;
        }
  
    function _godot_audio_is_available() {
            if (!(window.AudioContext || window.webkitAudioContext)) {
                return 0;
            }
            return 1;
        }
  
    function _godot_audio_resume() {
            if (GodotAudio.ctx && GodotAudio.ctx.state !== 'running') {
                GodotAudio.ctx.resume();
            }
        }
  
    var GodotAudioScript = {script:null,create:function (buffer_length, channel_count) {
                GodotAudioScript.script = GodotAudio.ctx.createScriptProcessor(buffer_length, 2, channel_count);
                GodotAudio.driver = GodotAudioScript;
                return GodotAudioScript.script.bufferSize;
            },start:function (p_in_buf, p_in_size, p_out_buf, p_out_size, onprocess) {
                GodotAudioScript.script.onaudioprocess = function (event) {
                    // Read input
                    const inb = GodotRuntime.heapSub(HEAPF32, p_in_buf, p_in_size);
                    const input = event.inputBuffer;
                    if (GodotAudio.input) {
                        const inlen = input.getChannelData(0).length;
                        for (let ch = 0; ch < 2; ch++) {
                            const data = input.getChannelData(ch);
                            for (let s = 0; s < inlen; s++) {
                                inb[s * 2 + ch] = data[s];
                            }
                        }
                    }
    
                    // Let Godot process the input/output.
                    onprocess();
    
                    // Write the output.
                    const outb = GodotRuntime.heapSub(HEAPF32, p_out_buf, p_out_size);
                    const output = event.outputBuffer;
                    const channels = output.numberOfChannels;
                    for (let ch = 0; ch < channels; ch++) {
                        const data = output.getChannelData(ch);
                        // Loop through samples and assign computed values.
                        for (let sample = 0; sample < data.length; sample++) {
                            data[sample] = outb[sample * channels + ch];
                        }
                    }
                };
                GodotAudioScript.script.connect(GodotAudio.ctx.destination);
            },get_node:function () {
                return GodotAudioScript.script;
            },close:function () {
                return new Promise(function (resolve, reject) {
                    GodotAudioScript.script.disconnect();
                    GodotAudioScript.script.onaudioprocess = null;
                    GodotAudioScript.script = null;
                    resolve();
                });
            }};
    function _godot_audio_script_create(buffer_length, channel_count) {
            const buf_len = GodotRuntime.getHeapValue(buffer_length, 'i32');
            try {
                const out_len = GodotAudioScript.create(buf_len, channel_count);
                GodotRuntime.setHeapValue(buffer_length, out_len, 'i32');
            } catch (e) {
                GodotRuntime.error('Error starting AudioDriverScriptProcessor', e);
                return 1;
            }
            return 0;
        }
  
    function _godot_audio_script_start(p_in_buf, p_in_size, p_out_buf, p_out_size, p_cb) {
            const onprocess = GodotRuntime.get_func(p_cb);
            GodotAudioScript.start(p_in_buf, p_in_size, p_out_buf, p_out_size, onprocess);
        }
  
    var GodotAudioWorklet = {promise:null,worklet:null,ring_buffer:null,create:function (channels) {
                const path = GodotConfig.locate_file('godot.audio.worklet.js');
                GodotAudioWorklet.promise = GodotAudio.ctx.audioWorklet.addModule(path).then(function () {
                    GodotAudioWorklet.worklet = new AudioWorkletNode(
                        GodotAudio.ctx,
                        'godot-processor',
                        {
                            'outputChannelCount': [channels],
                        }
                    );
                    return Promise.resolve();
                });
                GodotAudio.driver = GodotAudioWorklet;
            },start:function (in_buf, out_buf, state) {
                GodotAudioWorklet.promise.then(function () {
                    const node = GodotAudioWorklet.worklet;
                    node.connect(GodotAudio.ctx.destination);
                    node.port.postMessage({
                        'cmd': 'start',
                        'data': [state, in_buf, out_buf],
                    });
                    node.port.onmessage = function (event) {
                        GodotRuntime.error(event.data);
                    };
                });
            },start_no_threads:function (p_out_buf, p_out_size, out_callback, p_in_buf, p_in_size, in_callback) {
                function RingBuffer() {
                    let wpos = 0;
                    let rpos = 0;
                    let pending_samples = 0;
                    const wbuf = new Float32Array(p_out_size);
    
                    function send(port) {
                        if (pending_samples === 0) {
                            return;
                        }
                        const buffer = GodotRuntime.heapSub(HEAPF32, p_out_buf, p_out_size);
                        const size = buffer.length;
                        const tot_sent = pending_samples;
                        out_callback(wpos, pending_samples);
                        if (wpos + pending_samples >= size) {
                            const high = size - wpos;
                            wbuf.set(buffer.subarray(wpos, size));
                            pending_samples -= high;
                            wpos = 0;
                        }
                        if (pending_samples > 0) {
                            wbuf.set(buffer.subarray(wpos, wpos + pending_samples), tot_sent - pending_samples);
                        }
                        port.postMessage({ 'cmd': 'chunk', 'data': wbuf.subarray(0, tot_sent) });
                        wpos += pending_samples;
                        pending_samples = 0;
                    }
                    this.receive = function (recv_buf) {
                        const buffer = GodotRuntime.heapSub(HEAPF32, p_in_buf, p_in_size);
                        const from = rpos;
                        let to_write = recv_buf.length;
                        let high = 0;
                        if (rpos + to_write >= p_in_size) {
                            high = p_in_size - rpos;
                            buffer.set(recv_buf.subarray(0, high), rpos);
                            to_write -= high;
                            rpos = 0;
                        }
                        if (to_write) {
                            buffer.set(recv_buf.subarray(high, to_write), rpos);
                        }
                        in_callback(from, recv_buf.length);
                        rpos += to_write;
                    };
                    this.consumed = function (size, port) {
                        pending_samples += size;
                        send(port);
                    };
                }
                GodotAudioWorklet.ring_buffer = new RingBuffer();
                GodotAudioWorklet.promise.then(function () {
                    const node = GodotAudioWorklet.worklet;
                    const buffer = GodotRuntime.heapSlice(HEAPF32, p_out_buf, p_out_size);
                    node.connect(GodotAudio.ctx.destination);
                    node.port.postMessage({
                        'cmd': 'start_nothreads',
                        'data': [buffer, p_in_size],
                    });
                    node.port.onmessage = function (event) {
                        if (!GodotAudioWorklet.worklet) {
                            return;
                        }
                        if (event.data['cmd'] === 'read') {
                            const read = event.data['data'];
                            GodotAudioWorklet.ring_buffer.consumed(read, GodotAudioWorklet.worklet.port);
                        } else if (event.data['cmd'] === 'input') {
                            const buf = event.data['data'];
                            if (buf.length > p_in_size) {
                                GodotRuntime.error('Input chunk is too big');
                                return;
                            }
                            GodotAudioWorklet.ring_buffer.receive(buf);
                        } else {
                            GodotRuntime.error(event.data);
                        }
                    };
                });
            },get_node:function () {
                return GodotAudioWorklet.worklet;
            },close:function () {
                return new Promise(function (resolve, reject) {
                    if (GodotAudioWorklet.promise === null) {
                        return;
                    }
                    GodotAudioWorklet.promise.then(function () {
                        GodotAudioWorklet.worklet.port.postMessage({
                            'cmd': 'stop',
                            'data': null,
                        });
                        GodotAudioWorklet.worklet.disconnect();
                        GodotAudioWorklet.worklet = null;
                        GodotAudioWorklet.promise = null;
                        resolve();
                    }).catch(function (err) { /* aborted? */ });
                });
            }};
    function _godot_audio_worklet_create(channels) {
            try {
                GodotAudioWorklet.create(channels);
            } catch (e) {
                GodotRuntime.error('Error starting AudioDriverWorklet', e);
                return 1;
            }
            return 0;
        }
  
    function _godot_audio_worklet_start_no_threads(p_out_buf, p_out_size, p_out_callback, p_in_buf, p_in_size, p_in_callback) {
            const out_callback = GodotRuntime.get_func(p_out_callback);
            const in_callback = GodotRuntime.get_func(p_in_callback);
            GodotAudioWorklet.start_no_threads(p_out_buf, p_out_size, out_callback, p_in_buf, p_in_size, in_callback);
        }
  
    function _godot_js_config_canvas_id_get(p_ptr, p_ptr_max) {
            GodotRuntime.stringToHeap(`#${GodotConfig.canvas.id}`, p_ptr, p_ptr_max);
        }
  
    function _godot_js_config_locale_get(p_ptr, p_ptr_max) {
            GodotRuntime.stringToHeap(GodotConfig.locale, p_ptr, p_ptr_max);
        }
  
    var GodotDisplayCursor = {shape:"default",visible:true,cursors:{},set_style:function (style) {
                GodotConfig.canvas.style.cursor = style;
            },set_shape:function (shape) {
                GodotDisplayCursor.shape = shape;
                let css = shape;
                if (shape in GodotDisplayCursor.cursors) {
                    const c = GodotDisplayCursor.cursors[shape];
                    css = `url("${c.url}") ${c.x} ${c.y}, default`;
                }
                if (GodotDisplayCursor.visible) {
                    GodotDisplayCursor.set_style(css);
                }
            },clear:function () {
                GodotDisplayCursor.set_style('');
                GodotDisplayCursor.shape = 'default';
                GodotDisplayCursor.visible = true;
                Object.keys(GodotDisplayCursor.cursors).forEach(function (key) {
                    URL.revokeObjectURL(GodotDisplayCursor.cursors[key]);
                    delete GodotDisplayCursor.cursors[key];
                });
            },lockPointer:function () {
                const canvas = GodotConfig.canvas;
                if (canvas.requestPointerLock) {
                    canvas.requestPointerLock();
                }
            },releasePointer:function () {
                if (document.exitPointerLock) {
                    document.exitPointerLock();
                }
            },isPointerLocked:function () {
                return document.pointerLockElement === GodotConfig.canvas;
            }};
    
    var GodotEventListeners = {handlers:[],has:function (target, event, method, capture) {
                return GodotEventListeners.handlers.findIndex(function (e) {
                    return e.target === target && e.event === event && e.method === method && e.capture === capture;
                }) !== -1;
            },add:function (target, event, method, capture) {
                if (GodotEventListeners.has(target, event, method, capture)) {
                    return;
                }
                function Handler(p_target, p_event, p_method, p_capture) {
                    this.target = p_target;
                    this.event = p_event;
                    this.method = p_method;
                    this.capture = p_capture;
                }
                GodotEventListeners.handlers.push(new Handler(target, event, method, capture));
                target.addEventListener(event, method, capture);
            },clear:function () {
                GodotEventListeners.handlers.forEach(function (h) {
                    h.target.removeEventListener(h.event, h.method, h.capture);
                });
                GodotEventListeners.handlers.length = 0;
            }};
    
    function _emscripten_webgl_do_get_current_context() {
        return GL.currentContext ? GL.currentContext.handle : 0;
      }
    var _emscripten_webgl_get_current_context = _emscripten_webgl_do_get_current_context;
    var GodotDisplayScreen = {desired_size:[0,0],canvas_scale:1,hidpi:true,getPixelRatio:function () {
                return GodotDisplayScreen.hidpi ? window.devicePixelRatio || 1 : 1;
            },isFullscreen:function () {
                const elem = document.fullscreenElement || document.mozFullscreenElement
                    || document.webkitFullscreenElement || document.msFullscreenElement;
                if (elem) {
                    return elem === GodotConfig.canvas;
                }
                // But maybe knowing the element is not supported.
                return document.fullscreen || document.mozFullScreen
                    || document.webkitIsFullscreen;
            },hasFullscreen:function () {
                return document.fullscreenEnabled || document.mozFullScreenEnabled
                    || document.webkitFullscreenEnabled;
            },requestFullscreen:function () {
                if (!GodotDisplayScreen.hasFullscreen()) {
                    return 1;
                }
                const canvas = GodotConfig.canvas;
                try {
                    const promise = (canvas.requestFullscreen || canvas.msRequestFullscreen
                        || canvas.mozRequestFullScreen || canvas.mozRequestFullscreen
                        || canvas.webkitRequestFullscreen
                    ).call(canvas);
                    // Some browsers (Safari) return undefined.
                    // For the standard ones, we need to catch it.
                    if (promise) {
                        promise.catch(function () {
                            // nothing to do.
                        });
                    }
                } catch (e) {
                    return 1;
                }
                return 0;
            },exitFullscreen:function () {
                if (!GodotDisplayScreen.isFullscreen()) {
                    return 0;
                }
                try {
                    const promise = document.exitFullscreen();
                    if (promise) {
                        promise.catch(function () {
                            // nothing to do.
                        });
                    }
                } catch (e) {
                    return 1;
                }
                return 0;
            },_updateGL:function () {
                const gl_context_handle = _emscripten_webgl_get_current_context(); // eslint-disable-line no-undef
                const gl = GL.getContext(gl_context_handle);
                if (gl) {
                    GL.resizeOffscreenFramebuffer(gl);
                }
            },updateSize:function () {
                const isFullscreen = GodotDisplayScreen.isFullscreen();
                const wantsFullWindow = GodotConfig.canvas_resize_policy === 2;
                const noResize = GodotConfig.canvas_resize_policy === 0;
                const wwidth = GodotDisplayScreen.desired_size[0];
                const wheight = GodotDisplayScreen.desired_size[1];
                const canvas = GodotConfig.canvas;
                let width = wwidth;
                let height = wheight;
                if (noResize) {
                    // Don't resize canvas, just update GL if needed.
                    if (canvas.width !== width || canvas.height !== height) {
                        GodotDisplayScreen.desired_size = [canvas.width, canvas.height];
                        GodotDisplayScreen._updateGL();
                        return 1;
                    }
                    return 0;
                }
                const scale = GodotDisplayScreen.getPixelRatio();
                if (isFullscreen || wantsFullWindow) {
                    // We need to match screen size.
                    width = window.innerWidth * scale;
                    height = window.innerHeight * scale;
                }
                const csw = `${width / scale}px`;
                const csh = `${height / scale}px`;
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                const targetWidth = Math.floor(width*GodotDisplayScreen.canvas_scale);
                const targetHeight = Math.floor(height*GodotDisplayScreen.canvas_scale);
                if (canvas.style.width !== csw || canvas.style.height !== csh || canvas.width !== targetWidth || canvas.height !== targetHeight) {
                    // Size doesn't match.
                    // Resize canvas, set correct CSS pixel size, update GL.
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    canvas.style.width = csw;
                    canvas.style.height = csh;
                    document.documentElement.style.width = csw;
                    document.documentElement.style.height = csh;
                    document.body.style.width = csw;
                    document.body.style.height = csh;
                    GodotDisplayScreen._updateGL();
                    return 1;
                }
                return 0;
            }};
    
    var GodotDisplayVK = {textinput:null,textarea:null,available:function () {
                return GodotConfig.virtual_keyboard && 'ontouchstart' in window;
            },init:function (input_cb) {
                function create(what) {
                    const elem = document.createElement(what);
                    elem.style.display = 'none';
                    elem.style.position = 'absolute';
                    elem.style.zIndex = '-1';
                    elem.style.background = 'transparent';
                    elem.style.padding = '0px';
                    elem.style.margin = '0px';
                    elem.style.overflow = 'hidden';
                    elem.style.width = '0px';
                    elem.style.height = '0px';
                    elem.style.border = '0px';
                    elem.style.outline = 'none';
                    elem.readonly = true;
                    elem.disabled = true;
                    GodotEventListeners.add(elem, 'input', function (evt) {
                        const c_str = GodotRuntime.allocString(elem.value);
                        input_cb(c_str, elem.selectionEnd);
                        GodotRuntime.free(c_str);
                    }, false);
                    GodotEventListeners.add(elem, 'blur', function (evt) {
                        elem.style.display = 'none';
                        elem.readonly = true;
                        elem.disabled = true;
                    }, false);
                    GodotConfig.canvas.insertAdjacentElement('beforebegin', elem);
                    return elem;
                }
                GodotDisplayVK.textinput = create('input');			
                GodotDisplayVK.textarea = create('textarea');
    
                // Annoying fix for disabling auto-zoom in mobile safari
                // Maybe can be done in viewport, doing it here though...
                // https://weblog.west-wind.com/posts/2023/Apr/17/Preventing-iOS-Safari-Textbox-Zooming
                // https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
                GodotDisplayVK.textinput.style.fontSize = '16px';
                GodotDisplayVK.textarea.style.fontSize = '16px';
                GodotDisplayVK.updateSize();
            },show:function (text, type, start, end) {
                if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) {
                    return;
                }
                if (GodotDisplayVK.textinput.style.display !== '' || GodotDisplayVK.textarea.style.display !== '') {
                    GodotDisplayVK.hide();
                }
                GodotDisplayVK.updateSize();
    
                let elem = GodotDisplayVK.textinput;
                switch (type) {
                case 0: // KEYBOARD_TYPE_DEFAULT
                    elem.inputmode = 'text';
                    break;
                case 1: // KEYBOARD_TYPE_MULTILINE
                    elem = GodotDisplayVK.textarea;
                    break;
                case 2: // KEYBOARD_TYPE_NUMBER
                    elem.inputmode = 'numeric';
                    break;
                case 3: // KEYBOARD_TYPE_NUMBER_DECIMAL
                    elem.inputmode = 'decimal';
                    break;
                case 4: // KEYBOARD_TYPE_PHONE
                    elem.inputmode = 'tel';
                    break;
                case 5: // KEYBOARD_TYPE_EMAIL_ADDRESS
                    elem.inputmode = 'email';
                    break;
                case 6: // KEYBOARD_TYPE_PASSWORD
                    elem.inputmode = 'text';
                    break;
                case 7: // KEYBOARD_TYPE_URL
                    elem.inputmode = 'url';
                    break;
                default:
                    elem.inputmode = 'text';
                    break;
                }
                elem.readonly = false;
                elem.disabled = false;
                elem.value = text;
                elem.style.display = 'block';
                elem.focus();
                elem.setSelectionRange(start, end);
            },hide:function () {
                if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) {
                    return;
                }
                [GodotDisplayVK.textinput, GodotDisplayVK.textarea].forEach(function (elem) {
                    elem.blur();
                    elem.style.display = 'none';
                    elem.value = '';
                });
            },updateSize:function () {
                if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) {
                    return;
                }
                const rect = GodotConfig.canvas.getBoundingClientRect();
                function update(elem) {
                    elem.style.left = `${rect.left}px`;
                    elem.style.top = `${rect.top}px`;
                    elem.style.width = `${rect.width}px`;
                    elem.style.height = `${rect.height}px`;
                }
                update(GodotDisplayVK.textinput);
                update(GodotDisplayVK.textarea);
            },clear:function () {
                if (GodotDisplayVK.textinput) {
                    GodotDisplayVK.textinput.remove();
                    GodotDisplayVK.textinput = null;
                }
                if (GodotDisplayVK.textarea) {
                    GodotDisplayVK.textarea.remove();
                    GodotDisplayVK.textarea = null;
                }
            }};
    var GodotDisplay = {window_icon:"",findDPI:function () {
                function testDPI(dpi) {
                    return window.matchMedia(`(max-resolution: ${dpi}dpi)`).matches;
                }
                function bisect(low, high, func) {
                    const mid = parseInt(((high - low) / 2) + low, 10);
                    if (high - low <= 1) {
                        return func(high) ? high : low;
                    }
                    if (func(mid)) {
                        return bisect(low, mid, func);
                    }
                    return bisect(mid, high, func);
                }
                try {
                    const dpi = bisect(0, 800, testDPI);
                    return dpi >= 96 ? dpi : 96;
                } catch (e) {
                    return 96;
                }
            }};
    function _godot_js_display_alert(p_text) {
            window.alert(GodotRuntime.parseString(p_text)); // eslint-disable-line no-alert
        }
  
    function _godot_js_display_canvas_focus() {
            GodotConfig.canvas.focus();
        }
  
    function _godot_js_display_canvas_is_focused() {
            return document.activeElement === GodotConfig.canvas;
        }
  
    function _godot_js_display_clipboard_get(callback) {
            const func = GodotRuntime.get_func(callback);
            try {
                navigator.clipboard.readText().then(function (result) {
                    const ptr = GodotRuntime.allocString(result);
                    func(ptr);
                    GodotRuntime.free(ptr);
                }).catch(function (e) {
                    // Fail graciously.
                });
            } catch (e) {
                // Fail graciously.
            }
        }
  
    function _godot_js_display_clipboard_set(p_text) {
            const text = GodotRuntime.parseString(p_text);
            if (!navigator.clipboard || !navigator.clipboard.writeText) {
                return 1;
            }
            navigator.clipboard.writeText(text).catch(function (e) {
                // Setting OS clipboard is only possible from an input callback.
                GodotRuntime.error('Setting OS clipboard is only possible from an input callback for the HTML5 plafrom. Exception:', e);
            });
            return 0;
        }
  
    function _godot_js_display_cursor_is_hidden() {
            return !GodotDisplayCursor.visible;
        }
  
    function _godot_js_display_cursor_is_locked() {
            return GodotDisplayCursor.isPointerLocked() ? 1 : 0;
        }
  
    function _godot_js_display_cursor_lock_set(p_lock) {
            if (p_lock) {
                GodotDisplayCursor.lockPointer();
            } else {
                GodotDisplayCursor.releasePointer();
            }
        }
  
    function _godot_js_display_cursor_set_custom_shape(p_shape, p_ptr, p_len, p_hotspot_x, p_hotspot_y) {
            const shape = GodotRuntime.parseString(p_shape);
            const old_shape = GodotDisplayCursor.cursors[shape];
            if (p_len > 0) {
                const png = new Blob([GodotRuntime.heapSlice(HEAPU8, p_ptr, p_len)], { type: 'image/png' });
                const url = URL.createObjectURL(png);
                GodotDisplayCursor.cursors[shape] = {
                    url: url,
                    x: p_hotspot_x,
                    y: p_hotspot_y,
                };
            } else {
                delete GodotDisplayCursor.cursors[shape];
            }
            if (shape === GodotDisplayCursor.shape) {
                GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
            }
            if (old_shape) {
                URL.revokeObjectURL(old_shape.url);
            }
        }
  
    function _godot_js_display_cursor_set_shape(p_string) {
            GodotDisplayCursor.set_shape(GodotRuntime.parseString(p_string));
        }
  
    function _godot_js_display_cursor_set_visible(p_visible) {
            const visible = p_visible !== 0;
            if (visible === GodotDisplayCursor.visible) {
                return;
            }
            GodotDisplayCursor.visible = visible;
            if (visible) {
                GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
            } else {
                GodotDisplayCursor.set_style('none');
            }
        }
  
    function _godot_js_display_desired_size_set(width, height) {
            GodotDisplayScreen.desired_size = [width, height];
            GodotDisplayScreen.updateSize();
        }
  
    function _godot_js_display_fullscreen_cb(callback) {
            const canvas = GodotConfig.canvas;
            const func = GodotRuntime.get_func(callback);
            function change_cb(evt) {
                if (evt.target === canvas) {
                    func(GodotDisplayScreen.isFullscreen());
                }
            }
            GodotEventListeners.add(document, 'fullscreenchange', change_cb, false);
            GodotEventListeners.add(document, 'mozfullscreenchange', change_cb, false);
            GodotEventListeners.add(document, 'webkitfullscreenchange', change_cb, false);
        }
  
    function _godot_js_display_fullscreen_exit() {
            return GodotDisplayScreen.exitFullscreen();
        }
  
    function _godot_js_display_fullscreen_request() {
            return GodotDisplayScreen.requestFullscreen();
        }
  
    function _godot_js_display_glGetBufferSubData(target, offset, size, data) {
            const gl_context_handle = _emscripten_webgl_get_current_context(); // eslint-disable-line no-undef
            const gl = GL.getContext(gl_context_handle);
            if (gl) {
                gl.GLctx['getBufferSubData'](target, offset, HEAPU8, data, size);
            }
        }
  
    function _godot_js_display_has_webgl(p_version) {
            if (p_version !== 1 && p_version !== 2) {
                return false;
            }
            try {
                return !!document.createElement('canvas').getContext(p_version === 2 ? 'webgl2' : 'webgl');
            } catch (e) { /* Not available */ }
            return false;
        }
  
    function _godot_js_display_is_swap_ok_cancel() {
            const win = (['Windows', 'Win64', 'Win32', 'WinCE']);
            const plat = navigator.platform || '';
            if (win.indexOf(plat) !== -1) {
                return 1;
            }
            return 0;
        }
  
    function _godot_js_display_notification_cb(callback, p_enter, p_exit, p_in, p_out) {
            const canvas = GodotConfig.canvas;
            const func = GodotRuntime.get_func(callback);
            const notif = [p_enter, p_exit, p_in, p_out];
            ['mouseover', 'mouseleave', 'focus', 'blur'].forEach(function (evt_name, idx) {
                GodotEventListeners.add(canvas, evt_name, function () {
                    func(notif[idx]);
                }, true);
            });
        }
  
    function _godot_js_display_pixel_ratio_get() {
            return GodotDisplayScreen.getPixelRatio();
        }
  
    function _godot_js_display_screen_dpi_get() {
            return GodotDisplay.findDPI();
        }
  
    function _godot_js_display_screen_size_get(width, height) {
            const scale = GodotDisplayScreen.getPixelRatio();
            GodotRuntime.setHeapValue(width, window.screen.width * scale, 'i32');
            GodotRuntime.setHeapValue(height, window.screen.height * scale, 'i32');
        }
  
    function _godot_js_display_setup_canvas(p_width, p_height, p_fullscreen, p_hidpi) {
            const canvas = GodotConfig.canvas;
            GodotEventListeners.add(canvas, 'contextmenu', function (ev) {
                ev.preventDefault();
            }, false);
            GodotEventListeners.add(canvas, 'webglcontextlost', function (ev) {
                alert('WebGL context lost, please reload the page'); // eslint-disable-line no-alert
                ev.preventDefault();
            }, false);
            GodotEventListeners.add(canvas, 'webglcontextrestored', function (ev) {
                alert('WebGL context restored, please reload the page'); // eslint-disable-line no-alert
                ev.preventDefault();
            }, false);
            GodotDisplayScreen.hidpi = !!p_hidpi;
            switch (GodotConfig.canvas_resize_policy) {
            case 0: // None
                GodotDisplayScreen.desired_size = [canvas.width, canvas.height];
                break;
            case 1: // Project
                GodotDisplayScreen.desired_size = [p_width, p_height];
                break;
            default: // Full window
                // Ensure we display in the right place, the size will be handled by updateSize
                canvas.style.position = 'absolute';
                canvas.style.top = 0;
                canvas.style.left = 0;
                break;
            }
            GodotDisplayScreen.updateSize();
            if (p_fullscreen) {
                GodotDisplayScreen.requestFullscreen();
            }
        }
  
    function _godot_js_display_size_update() {
            const updated = GodotDisplayScreen.updateSize();
            if (updated) {
                GodotDisplayVK.updateSize();
            }
            return updated;
        }
  
    function _godot_js_display_touchscreen_is_available() {
            return 'ontouchstart' in window;
        }
  
    function _godot_js_display_vk_available() {
            return GodotDisplayVK.available();
        }
  
    function _godot_js_display_vk_cb(p_input_cb) {
            const input_cb = GodotRuntime.get_func(p_input_cb);
            if (GodotDisplayVK.available()) {
                GodotDisplayVK.init(input_cb);
            }
        }
  
    function _godot_js_display_vk_hide() {
            GodotDisplayVK.hide();
        }
  
    function _godot_js_display_vk_show(p_text, p_type, p_start, p_end) {
            const text = GodotRuntime.parseString(p_text);
            const start = p_start > 0 ? p_start : 0;
            const end = p_end > 0 ? p_end : start;
            GodotDisplayVK.show(text, p_type, start, end);
        }
  
    function _godot_js_display_window_blur_cb(callback) {
            const func = GodotRuntime.get_func(callback);
            GodotEventListeners.add(window, 'blur', function () {
                func();
            }, false);
        }
  
    function _godot_js_display_window_icon_set(p_ptr, p_len) {
            let link = document.getElementById('-gd-engine-icon');
            if (link === null) {
                link = document.createElement('link');
                link.rel = 'icon';
                link.id = '-gd-engine-icon';
                document.head.appendChild(link);
            }
            const old_icon = GodotDisplay.window_icon;
            const png = new Blob([GodotRuntime.heapSlice(HEAPU8, p_ptr, p_len)], { type: 'image/png' });
            GodotDisplay.window_icon = URL.createObjectURL(png);
            link.href = GodotDisplay.window_icon;
            if (old_icon) {
                URL.revokeObjectURL(old_icon);
            }
        }
  
    function _godot_js_display_window_size_get(p_width, p_height) {
            if(GodotConfig.canvas == null) {
                GodotRuntime.setHeapValue(p_width, 1024, 'i32');
                GodotRuntime.setHeapValue(p_height, 1024, 'i32');	
            }
            else {
                GodotRuntime.setHeapValue(p_width, GodotConfig.canvas.width, 'i32');
                GodotRuntime.setHeapValue(p_height, GodotConfig.canvas.height, 'i32');
            }
        }
  
    function _godot_js_display_window_title_set(p_data) {
            document.title = GodotRuntime.parseString(p_data);
        }
  
    function _godot_js_eval(p_js, p_use_global_ctx, p_union_ptr, p_byte_arr, p_byte_arr_write, p_callback) {
            const js_code = GodotRuntime.parseString(p_js);
            let eval_ret = null;
            try {
                if (p_use_global_ctx) {
                    // indirect eval call grants global execution context
                    const global_eval = eval; // eslint-disable-line no-eval
                    eval_ret = global_eval(js_code);
                } else {
                    eval_ret = eval(js_code); // eslint-disable-line no-eval
                }
            } catch (e) {
                GodotRuntime.error(e);
            }
    
            switch (typeof eval_ret) {
            case 'boolean':
                GodotRuntime.setHeapValue(p_union_ptr, eval_ret, 'i32');
                return 1; // BOOL
    
            case 'number':
                GodotRuntime.setHeapValue(p_union_ptr, eval_ret, 'double');
                return 3; // REAL
    
            case 'string':
                GodotRuntime.setHeapValue(p_union_ptr, GodotRuntime.allocString(eval_ret), '*');
                return 4; // STRING
    
            case 'object':
                if (eval_ret === null) {
                    break;
                }
    
                if (ArrayBuffer.isView(eval_ret) && !(eval_ret instanceof Uint8Array)) {
                    eval_ret = new Uint8Array(eval_ret.buffer);
                } else if (eval_ret instanceof ArrayBuffer) {
                    eval_ret = new Uint8Array(eval_ret);
                }
                if (eval_ret instanceof Uint8Array) {
                    const func = GodotRuntime.get_func(p_callback);
                    const bytes_ptr = func(p_byte_arr, p_byte_arr_write, eval_ret.length);
                    HEAPU8.set(eval_ret, bytes_ptr);
                    return 20; // POOL_BYTE_ARRAY
                }
                break;
    
                // no default
            }
            return 0; // NIL
        }
  
    var IDHandler = {_last_id:0,_references:{},get:function (p_id) {
                return IDHandler._references[p_id];
            },add:function (p_data) {
                const id = ++IDHandler._last_id;
                IDHandler._references[id] = p_data;
                return id;
            },remove:function (p_id) {
                delete IDHandler._references[p_id];
            }};
    var GodotFetch = {onread:function (id, result) {
                const obj = IDHandler.get(id);
                if (!obj) {
                    return;
                }
                if (result.value) {
                    obj.chunks.push(result.value);
                }
                obj.reading = false;
                obj.done = result.done;
            },onresponse:function (id, response) {
                const obj = IDHandler.get(id);
                if (!obj) {
                    return;
                }
                let chunked = false;
                response.headers.forEach(function (value, header) {
                    const v = value.toLowerCase().trim();
                    const h = header.toLowerCase().trim();
                    if (h === 'transfer-encoding' && v === 'chunked') {
                        chunked = true;
                    }
                });
                obj.status = response.status;
                obj.response = response;
                obj.reader = response.body.getReader();
                obj.chunked = chunked;
            },onerror:function (id, err) {
                GodotRuntime.error(err);
                const obj = IDHandler.get(id);
                if (!obj) {
                    return;
                }
                obj.error = err;
            },create:function (method, url, headers, body) {
                const obj = {
                    request: null,
                    response: null,
                    reader: null,
                    error: null,
                    done: false,
                    reading: false,
                    status: 0,
                    chunks: [],
                    bodySize: -1,
                };
                const id = IDHandler.add(obj);
                const init = {
                    method: method,
                    headers: headers,
                    body: body,
                };
                obj.request = fetch(url, init);
                obj.request.then(GodotFetch.onresponse.bind(null, id)).catch(GodotFetch.onerror.bind(null, id));
                return id;
            },free:function (id) {
                const obj = IDHandler.get(id);
                if (!obj) {
                    return;
                }
                IDHandler.remove(id);
                if (!obj.request) {
                    return;
                }
                // Try to abort
                obj.request.then(function (response) {
                    response.abort();
                }).catch(function (e) { /* nothing to do */ });
            },read:function (id) {
                const obj = IDHandler.get(id);
                if (!obj) {
                    return;
                }
                if (obj.reader && !obj.reading) {
                    if (obj.done) {
                        obj.reader = null;
                        return;
                    }
                    obj.reading = true;
                    obj.reader.read().then(GodotFetch.onread.bind(null, id)).catch(GodotFetch.onerror.bind(null, id));
                }
            }};
    function _godot_js_fetch_body_length_get(p_id) {
            const obj = IDHandler.get(p_id);
            if (!obj || !obj.response) {
                return -1;
            }
            return obj.bodySize;
        }
  
    function _godot_js_fetch_create(p_method, p_url, p_headers, p_headers_size, p_body, p_body_size) {
            const method = GodotRuntime.parseString(p_method);
            const url = GodotRuntime.parseString(p_url);
            const headers = GodotRuntime.parseStringArray(p_headers, p_headers_size);
            const body = p_body_size ? GodotRuntime.heapSlice(HEAP8, p_body, p_body_size) : null;
            return GodotFetch.create(method, url, headers.map(function (hv) {
                const idx = hv.indexOf(':');
                if (idx <= 0) {
                    return [];
                }
                return [
                    hv.slice(0, idx).trim(),
                    hv.slice(idx + 1).trim(),
                ];
            }).filter(function (v) {
                return v.length === 2;
            }), body);
        }
  
    function _godot_js_fetch_free(id) {
            GodotFetch.free(id);
        }
  
    function _godot_js_fetch_http_status_get(p_id) {
            const obj = IDHandler.get(p_id);
            if (!obj || !obj.response) {
                return 0;
            }
            return obj.status;
        }
  
    function _godot_js_fetch_is_chunked(p_id) {
            const obj = IDHandler.get(p_id);
            if (!obj || !obj.response) {
                return -1;
            }
            return obj.chunked ? 1 : 0;
        }
  
    function _godot_js_fetch_read_chunk(p_id, p_buf, p_buf_size) {
            const obj = IDHandler.get(p_id);
            if (!obj || !obj.response) {
                return 0;
            }
            let to_read = p_buf_size;
            const chunks = obj.chunks;
            while (to_read && chunks.length) {
                const chunk = obj.chunks[0];
                if (chunk.length > to_read) {
                    GodotRuntime.heapCopy(HEAP8, chunk.slice(0, to_read), p_buf);
                    chunks[0] = chunk.slice(to_read);
                    to_read = 0;
                } else {
                    GodotRuntime.heapCopy(HEAP8, chunk, p_buf);
                    to_read -= chunk.length;
                    chunks.pop();
                }
            }
            if (!chunks.length) {
                GodotFetch.read(p_id);
            }
            return p_buf_size - to_read;
        }
  
    function _godot_js_fetch_read_headers(p_id, p_parse_cb, p_ref) {
            const obj = IDHandler.get(p_id);
            if (!obj || !obj.response) {
                return 1;
            }
            const cb = GodotRuntime.get_func(p_parse_cb);
            const arr = [];
            obj.response.headers.forEach(function (v, h) {
                arr.push(`${h}:${v}`);
            });
            const c_ptr = GodotRuntime.allocStringArray(arr);
            cb(arr.length, c_ptr, p_ref);
            GodotRuntime.freeStringArray(c_ptr, arr.length);
            return 0;
        }
  
    function _godot_js_fetch_state_get(p_id) {
            const obj = IDHandler.get(p_id);
            if (!obj) {
                return -1;
            }
            if (obj.error) {
                return -1;
            }
            if (!obj.response) {
                return 0;
            }
            if (obj.reader) {
                return 1;
            }
            if (obj.done) {
                return 2;
            }
            return -1;
        }
  
    var GodotInputGamepads = {samples:[],get_pads:function () {
                try {
                    // Will throw in iframe when permission is denied.
                    // Will throw/warn in the future for insecure contexts.
                    // See https://github.com/w3c/gamepad/pull/120
                    const pads = navigator.getGamepads();
                    if (pads) {
                        return pads;
                    }
                    return [];
                } catch (e) {
                    return [];
                }
            },get_samples:function () {
                return GodotInputGamepads.samples;
            },get_sample:function (index) {
                const samples = GodotInputGamepads.samples;
                return index < samples.length ? samples[index] : null;
            },sample:function () {
                const pads = GodotInputGamepads.get_pads();
                const samples = [];
                for (let i = 0; i < pads.length; i++) {
                    const pad = pads[i];
                    if (!pad) {
                        samples.push(null);
                        continue;
                    }
                    const s = {
                        standard: pad.mapping === 'standard',
                        buttons: [],
                        axes: [],
                        connected: pad.connected,
                    };
                    for (let b = 0; b < pad.buttons.length; b++) {
                        s.buttons.push(pad.buttons[b].value);
                    }
                    for (let a = 0; a < pad.axes.length; a++) {
                        s.axes.push(pad.axes[a]);
                    }
                    samples.push(s);
                }
                GodotInputGamepads.samples = samples;
            },init:function (onchange) {
                GodotInputGamepads.samples = [];
                function add(pad) {
                    const guid = GodotInputGamepads.get_guid(pad);
                    const c_id = GodotRuntime.allocString(pad.id);
                    const c_guid = GodotRuntime.allocString(guid);
                    onchange(pad.index, 1, c_id, c_guid);
                    GodotRuntime.free(c_id);
                    GodotRuntime.free(c_guid);
                }
                const pads = GodotInputGamepads.get_pads();
                for (let i = 0; i < pads.length; i++) {
                    // Might be reserved space.
                    if (pads[i]) {
                        add(pads[i]);
                    }
                }
                GodotEventListeners.add(window, 'gamepadconnected', function (evt) {
                    if (evt.gamepad) {
                        add(evt.gamepad);
                    }
                }, false);
                GodotEventListeners.add(window, 'gamepaddisconnected', function (evt) {
                    if (evt.gamepad) {
                        onchange(evt.gamepad.index, 0);
                    }
                }, false);
            },get_guid:function (pad) {
                if (pad.mapping) {
                    return pad.mapping;
                }
                const ua = navigator.userAgent;
                let os = 'Unknown';
                if (ua.indexOf('Android') >= 0) {
                    os = 'Android';
                } else if (ua.indexOf('Linux') >= 0) {
                    os = 'Linux';
                } else if (ua.indexOf('iPhone') >= 0) {
                    os = 'iOS';
                } else if (ua.indexOf('Macintosh') >= 0) {
                    // Updated iPads will fall into this category.
                    os = 'MacOSX';
                } else if (ua.indexOf('Windows') >= 0) {
                    os = 'Windows';
                }
    
                const id = pad.id;
                // Chrom* style: NAME (Vendor: xxxx Product: xxxx)
                const exp1 = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i;
                // Firefox/Safari style (safari may remove leading zeores)
                const exp2 = /^([0-9a-f]+)-([0-9a-f]+)-/i;
                let vendor = '';
                let product = '';
                if (exp1.test(id)) {
                    const match = exp1.exec(id);
                    vendor = match[1].padStart(4, '0');
                    product = match[2].padStart(4, '0');
                } else if (exp2.test(id)) {
                    const match = exp2.exec(id);
                    vendor = match[1].padStart(4, '0');
                    product = match[2].padStart(4, '0');
                }
                if (!vendor || !product) {
                    return `${os}Unknown`;
                }
                return os + vendor + product;
            }};
    
    var GodotInputDragDrop = {promises:[],pending_files:[],add_entry:function (entry) {
                if (entry.isDirectory) {
                    GodotInputDragDrop.add_dir(entry);
                } else if (entry.isFile) {
                    GodotInputDragDrop.add_file(entry);
                } else {
                    GodotRuntime.error('Unrecognized entry...', entry);
                }
            },add_dir:function (entry) {
                GodotInputDragDrop.promises.push(new Promise(function (resolve, reject) {
                    const reader = entry.createReader();
                    reader.readEntries(function (entries) {
                        for (let i = 0; i < entries.length; i++) {
                            GodotInputDragDrop.add_entry(entries[i]);
                        }
                        resolve();
                    });
                }));
            },add_file:function (entry) {
                GodotInputDragDrop.promises.push(new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        const reader = new FileReader();
                        reader.onload = function () {
                            const f = {
                                'path': file.relativePath || file.webkitRelativePath,
                                'name': file.name,
                                'type': file.type,
                                'size': file.size,
                                'data': reader.result,
                            };
                            if (!f['path']) {
                                f['path'] = f['name'];
                            }
                            GodotInputDragDrop.pending_files.push(f);
                            resolve();
                        };
                        reader.onerror = function () {
                            GodotRuntime.print('Error reading file');
                            reject();
                        };
                        reader.readAsArrayBuffer(file);
                    }, function (err) {
                        GodotRuntime.print('Error!');
                        reject();
                    });
                }));
            },process:function (resolve, reject) {
                if (GodotInputDragDrop.promises.length === 0) {
                    resolve();
                    return;
                }
                GodotInputDragDrop.promises.pop().then(function () {
                    setTimeout(function () {
                        GodotInputDragDrop.process(resolve, reject);
                    }, 0);
                });
            },_process_event:function (ev, callback) {
                ev.preventDefault();
                if (ev.dataTransfer.items) {
                    // Use DataTransferItemList interface to access the file(s)
                    for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                        const item = ev.dataTransfer.items[i];
                        let entry = null;
                        if ('getAsEntry' in item) {
                            entry = item.getAsEntry();
                        } else if ('webkitGetAsEntry' in item) {
                            entry = item.webkitGetAsEntry();
                        }
                        if (entry) {
                            GodotInputDragDrop.add_entry(entry);
                        }
                    }
                } else {
                    GodotRuntime.error('File upload not supported');
                }
                new Promise(GodotInputDragDrop.process).then(function () {
                    const DROP = `/tmp/drop-${parseInt(Math.random() * (1 << 30), 10)}/`;
                    const drops = [];
                    const files = [];
                    FS.mkdir(DROP.slice(0, -1)); // Without trailing slash
                    GodotInputDragDrop.pending_files.forEach((elem) => {
                        const path = elem['path'];
                        GodotFS.copy_to_fs(DROP + path, elem['data']);
                        let idx = path.indexOf('/');
                        if (idx === -1) {
                            // Root file
                            drops.push(DROP + path);
                        } else {
                            // Subdir
                            const sub = path.substr(0, idx);
                            idx = sub.indexOf('/');
                            if (idx < 0 && drops.indexOf(DROP + sub) === -1) {
                                drops.push(DROP + sub);
                            }
                        }
                        files.push(DROP + path);
                    });
                    GodotInputDragDrop.promises = [];
                    GodotInputDragDrop.pending_files = [];
                    callback(drops);
                    if (GodotConfig.persistent_drops) {
                        // Delay removal at exit.
                        GodotOS.atexit(function (resolve, reject) {
                            GodotInputDragDrop.remove_drop(files, DROP);
                            resolve();
                        });
                    } else {
                        GodotInputDragDrop.remove_drop(files, DROP);
                    }
                });
            },remove_drop:function (files, drop_path) {
                const dirs = [drop_path.substr(0, drop_path.length - 1)];
                // Remove temporary files
                files.forEach(function (file) {
                    FS.unlink(file);
                    let dir = file.replace(drop_path, '');
                    let idx = dir.lastIndexOf('/');
                    while (idx > 0) {
                        dir = dir.substr(0, idx);
                        if (dirs.indexOf(drop_path + dir) === -1) {
                            dirs.push(drop_path + dir);
                        }
                        idx = dir.lastIndexOf('/');
                    }
                });
                // Remove dirs.
                dirs.sort(function (a, b) {
                    const al = (a.match(/\//g) || []).length;
                    const bl = (b.match(/\//g) || []).length;
                    if (al > bl) {
                        return -1;
                    } else if (al < bl) {
                        return 1;
                    }
                    return 0;
                }).forEach(function (dir) {
                    FS.rmdir(dir);
                });
            },handler:function (callback) {
                return function (ev) {
                    GodotInputDragDrop._process_event(ev, callback);
                };
            }};
    var GodotInput = {getModifiers:function (evt) {
                return (evt.shiftKey + 0) + ((evt.altKey + 0) << 1) + ((evt.ctrlKey + 0) << 2) + ((evt.metaKey + 0) << 3);
            },computePosition:function (evt, rect) {
                const canvas = GodotConfig.canvas;
                const rw = canvas.width / rect.width;
                const rh = canvas.height / rect.height;
                const x = (evt.clientX - rect.x) * rw;
                const y = (evt.clientY - rect.y) * rh;
                return [x, y];
            }};
    function _godot_js_input_drop_files_cb(callback) {
            const func = GodotRuntime.get_func(callback);
            const dropFiles = function (files) {
                const args = files || [];
                if (!args.length) {
                    return;
                }
                const argc = args.length;
                const argv = GodotRuntime.allocStringArray(args);
                func(argv, argc);
                GodotRuntime.freeStringArray(argv, argc);
            };
            const canvas = GodotConfig.canvas;
            GodotEventListeners.add(canvas, 'dragover', function (ev) {
                // Prevent default behavior (which would try to open the file(s))
                ev.preventDefault();
            }, false);
            GodotEventListeners.add(canvas, 'drop', GodotInputDragDrop.handler(dropFiles));
        }
  
    function _godot_js_input_gamepad_cb(change_cb) {
            const onchange = GodotRuntime.get_func(change_cb);
            GodotInputGamepads.init(onchange);
        }
  
    function _godot_js_input_gamepad_sample() {
            GodotInputGamepads.sample();
            return 0;
        }
  
    function _godot_js_input_gamepad_sample_count() {
            return GodotInputGamepads.get_samples().length;
        }
  
    function _godot_js_input_gamepad_sample_get(p_index, r_btns, r_btns_num, r_axes, r_axes_num, r_standard) {
            const sample = GodotInputGamepads.get_sample(p_index);
            if (!sample || !sample.connected) {
                return 1;
            }
            const btns = sample.buttons;
            const btns_len = btns.length < 16 ? btns.length : 16;
            for (let i = 0; i < btns_len; i++) {
                GodotRuntime.setHeapValue(r_btns + (i << 2), btns[i], 'float');
            }
            GodotRuntime.setHeapValue(r_btns_num, btns_len, 'i32');
            const axes = sample.axes;
            const axes_len = axes.length < 10 ? axes.length : 10;
            for (let i = 0; i < axes_len; i++) {
                GodotRuntime.setHeapValue(r_axes + (i << 2), axes[i], 'float');
            }
            GodotRuntime.setHeapValue(r_axes_num, axes_len, 'i32');
            const is_standard = sample.standard ? 1 : 0;
            GodotRuntime.setHeapValue(r_standard, is_standard, 'i32');
            return 0;
        }
  
    function _godot_js_input_key_cb(callback, code, key) {
            const func = GodotRuntime.get_func(callback);
            function key_cb(pressed, evt) {
                const modifiers = GodotInput.getModifiers(evt);
                GodotRuntime.stringToHeap(evt.code, code, 32);
                GodotRuntime.stringToHeap(evt.key, key, 32);
                func(pressed, evt.repeat, modifiers);
                evt.preventDefault();
            }
            GodotEventListeners.add(GodotConfig.canvas, 'keydown', key_cb.bind(null, 1), false);
            GodotEventListeners.add(GodotConfig.canvas, 'keyup', key_cb.bind(null, 0), false);
        }
  
    function _godot_js_input_mouse_button_cb(callback) {
            const func = GodotRuntime.get_func(callback);
            const canvas = GodotConfig.canvas;
            function button_cb(p_pressed, evt) {
                const rect = canvas.getBoundingClientRect();
                const pos = GodotInput.computePosition(evt, rect);
                const modifiers = GodotInput.getModifiers(evt);
                // Since the event is consumed, focus manually.
                // NOTE: The iframe container may not have focus yet, so focus even when already active.
                if (p_pressed) {
                    GodotConfig.canvas.focus();
                }
                if (func(p_pressed, evt.button, pos[0], pos[1], modifiers)) {
                    evt.preventDefault();
                }
            }
            GodotEventListeners.add(canvas, 'mousedown', button_cb.bind(null, 1), false);
            GodotEventListeners.add(window, 'mouseup', button_cb.bind(null, 0), false);
        }
  
    function _godot_js_input_mouse_move_cb(callback) {
            const func = GodotRuntime.get_func(callback);
            const canvas = GodotConfig.canvas;
            function move_cb(evt) {
                const rect = canvas.getBoundingClientRect();
                const pos = GodotInput.computePosition(evt, rect);
                // Scale movement
                const rw = canvas.width / rect.width;
                const rh = canvas.height / rect.height;
                const rel_pos_x = evt.movementX * rw;
                const rel_pos_y = evt.movementY * rh;
                const modifiers = GodotInput.getModifiers(evt);
                func(pos[0], pos[1], rel_pos_x, rel_pos_y, modifiers);
            }
            GodotEventListeners.add(window, 'mousemove', move_cb, false);
        }
  
    function _godot_js_input_mouse_wheel_cb(callback) {
            const func = GodotRuntime.get_func(callback);
            function wheel_cb(evt) {
                let delta_x = evt['deltaX'] || 0
                let delta_y = evt['deltaY'] || 0
                let wheel_delta_x = evt['wheelDeltaX'] || 0
                let wheel_delta_y = evt['wheelDeltaY'] || 0
                const wheel_denominator = -120.0
                if (func(wheel_delta_x / wheel_denominator, wheel_delta_y / wheel_denominator)) {
                    evt.preventDefault();
                }
            }
            GodotEventListeners.add(GodotConfig.canvas, 'wheel', wheel_cb, false);
        }
  
    function _godot_js_input_paste_cb(callback) {
            const func = GodotRuntime.get_func(callback);
            GodotEventListeners.add(window, 'paste', function (evt) {
                const text = evt.clipboardData.getData('text');
                const ptr = GodotRuntime.allocString(text);
                func(ptr);
                GodotRuntime.free(ptr);
            }, false);
        }
  
    function _godot_js_input_touch_cb(callback, ids, coords) {
            const func = GodotRuntime.get_func(callback);
            const canvas = GodotConfig.canvas;
            function touch_cb(type, evt) {
                // Since the event is consumed, focus manually.
                // NOTE: The iframe container may not have focus yet, so focus even when already active.
                if (type === 0) {
                    GodotConfig.canvas.focus();
                }
                const rect = canvas.getBoundingClientRect();
                const touches = evt.changedTouches;
                for (let i = 0; i < touches.length; i++) {
                    const touch = touches[i];
                    const pos = GodotInput.computePosition(touch, rect);
                    GodotRuntime.setHeapValue(coords + (i * 2) * 8, pos[0], 'double');
                    GodotRuntime.setHeapValue(coords + (i * 2 + 1) * 8, pos[1], 'double');
                    GodotRuntime.setHeapValue(ids + i * 4, touch.identifier, 'i32');
                }
                func(type, touches.length);
                if (evt.cancelable) {
                    evt.preventDefault();
                }
            }
            GodotEventListeners.add(canvas, 'touchstart', touch_cb.bind(null, 0), false);
            GodotEventListeners.add(canvas, 'touchend', touch_cb.bind(null, 1), false);
            GodotEventListeners.add(canvas, 'touchcancel', touch_cb.bind(null, 1), false);
            GodotEventListeners.add(canvas, 'touchmove', touch_cb.bind(null, 2), false);
        }
  
    function _godot_js_input_vibrate_handheld(p_duration_ms) {
            if (typeof navigator.vibrate !== 'function') {
                GodotRuntime.print('This browser does not support vibration.');
            } else {
                navigator.vibrate(p_duration_ms);
            }
        }
  
    function _godot_js_os_download_buffer(p_ptr, p_size, p_name, p_mime) {
            const buf = GodotRuntime.heapSlice(HEAP8, p_ptr, p_size);
            const name = GodotRuntime.parseString(p_name);
            const mime = GodotRuntime.parseString(p_mime);
            const blob = new Blob([buf], { type: mime });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
  
    function _godot_js_os_execute(p_json) {
            const json_args = GodotRuntime.parseString(p_json);
            const args = JSON.parse(json_args);
            if (GodotConfig.on_execute) {
                GodotConfig.on_execute(args);
                return 0;
            }
            return 1;
        }
  
    function _godot_js_os_finish_async(p_callback) {
            const func = GodotRuntime.get_func(p_callback);
            GodotOS.finish_async(func);
        }
  
    function _godot_js_os_fs_is_persistent() {
            return GodotFS.is_persistent();
        }
  
    function _godot_js_os_fs_sync(callback) {
            const func = GodotRuntime.get_func(callback);
            GodotOS._fs_sync_promise = GodotFS.sync();
            GodotOS._fs_sync_promise.then(function (err) {
                func();
            });
        }
  
    function _godot_js_os_hw_concurrency_get() {
            return navigator.hardwareConcurrency || 1;
        }
  
    function _godot_js_os_request_quit_cb(p_callback) {
            GodotOS.request_quit = GodotRuntime.get_func(p_callback);
        }
  
    function _godot_js_os_shell_open(p_uri) {
            window.open(GodotRuntime.parseString(p_uri), '_blank');
        }
  
    var GodotPWA = {hasUpdate:false,updateState:function (cb, reg) {
                if (!reg) {
                    return;
                }
                if (!reg.active) {
                    return;
                }
                if (reg.waiting) {
                    GodotPWA.hasUpdate = true;
                    cb();
                }
                GodotEventListeners.add(reg, 'updatefound', function () {
                    const installing = reg.installing;
                    GodotEventListeners.add(installing, 'statechange', function () {
                        if (installing.state === 'installed') {
                            GodotPWA.hasUpdate = true;
                            cb();
                        }
                    });
                });
            }};
    function _godot_js_pwa_cb(p_update_cb) {
            if ('serviceWorker' in navigator) {
                const cb = GodotRuntime.get_func(p_update_cb);
                navigator.serviceWorker.getRegistration().then(GodotPWA.updateState.bind(null, cb));
            }
        }
  
    function _godot_js_pwa_update() {
            if ('serviceWorker' in navigator && GodotPWA.hasUpdate) {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    if (!reg || !reg.waiting) {
                        return;
                    }
                    reg.waiting.postMessage('update');
                });
                return 0;
            }
            return 1;
        }
  
    function _godot_js_set_canvas_scale(p_scale) {
            GodotDisplayScreen.canvas_scale = p_scale;
            GodotDisplayVK.updateSize();
        }
  
    var GodotWebSocket = {_onopen:function (p_id, callback, event) {
                const ref = IDHandler.get(p_id);
                if (!ref) {
                    return; // Godot object is gone.
                }
                const c_str = GodotRuntime.allocString(ref.protocol);
                callback(c_str);
                GodotRuntime.free(c_str);
            },_onmessage:function (p_id, callback, event) {
                const ref = IDHandler.get(p_id);
                if (!ref) {
                    return; // Godot object is gone.
                }
                let buffer;
                let is_string = 0;
                if (event.data instanceof ArrayBuffer) {
                    buffer = new Uint8Array(event.data);
                } else if (event.data instanceof Blob) {
                    GodotRuntime.error('Blob type not supported');
                    return;
                } else if (typeof event.data === 'string') {
                    is_string = 1;
                    const enc = new TextEncoder('utf-8');
                    buffer = new Uint8Array(enc.encode(event.data));
                } else {
                    GodotRuntime.error('Unknown message type');
                    return;
                }
                const len = buffer.length * buffer.BYTES_PER_ELEMENT;
                const out = GodotRuntime.malloc(len);
                HEAPU8.set(buffer, out);
                callback(out, len, is_string);
                GodotRuntime.free(out);
            },_onerror:function (p_id, callback, event) {
                const ref = IDHandler.get(p_id);
                if (!ref) {
                    return; // Godot object is gone.
                }
                callback();
            },_onclose:function (p_id, callback, event) {
                const ref = IDHandler.get(p_id);
                if (!ref) {
                    return; // Godot object is gone.
                }
                const c_str = GodotRuntime.allocString(event.reason);
                callback(event.code, c_str, event.wasClean ? 1 : 0);
                GodotRuntime.free(c_str);
            },send:function (p_id, p_data) {
                const ref = IDHandler.get(p_id);
                if (!ref || ref.readyState !== ref.OPEN) {
                    return 1; // Godot object is gone or socket is not in a ready state.
                }
                ref.send(p_data);
                return 0;
            },bufferedAmount:function (p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) {
                    return 0; // Godot object is gone.
                }
                return ref.bufferedAmount;
            },create:function (socket, p_on_open, p_on_message, p_on_error, p_on_close) {
                const id = IDHandler.add(socket);
                socket.onopen = GodotWebSocket._onopen.bind(null, id, p_on_open);
                socket.onmessage = GodotWebSocket._onmessage.bind(null, id, p_on_message);
                socket.onerror = GodotWebSocket._onerror.bind(null, id, p_on_error);
                socket.onclose = GodotWebSocket._onclose.bind(null, id, p_on_close);
                return id;
            },close:function (p_id, p_code, p_reason) {
                const ref = IDHandler.get(p_id);
                if (ref && ref.readyState < ref.CLOSING) {
                    const code = p_code;
                    const reason = GodotRuntime.parseString(p_reason);
                    ref.close(code, reason);
                }
            },destroy:function (p_id) {
                const ref = IDHandler.get(p_id);
                if (!ref) {
                    return;
                }
                GodotWebSocket.close(p_id, 3001, 'destroyed');
                IDHandler.remove(p_id);
                ref.onopen = null;
                ref.onmessage = null;
                ref.onerror = null;
                ref.onclose = null;
            }};
    function _godot_js_websocket_buffered_amount(p_id) {
            return GodotWebSocket.bufferedAmount(p_id);
        }
  
    function _godot_js_websocket_close(p_id, p_code, p_reason) {
            const code = p_code;
            const reason = GodotRuntime.parseString(p_reason);
            GodotWebSocket.close(p_id, code, reason);
        }
  
    function _godot_js_websocket_create(p_ref, p_url, p_proto, p_on_open, p_on_message, p_on_error, p_on_close) {
            const on_open = GodotRuntime.get_func(p_on_open).bind(null, p_ref);
            const on_message = GodotRuntime.get_func(p_on_message).bind(null, p_ref);
            const on_error = GodotRuntime.get_func(p_on_error).bind(null, p_ref);
            const on_close = GodotRuntime.get_func(p_on_close).bind(null, p_ref);
            const url = GodotRuntime.parseString(p_url);
            const protos = GodotRuntime.parseString(p_proto);
            let socket = null;
            try {
                if (protos) {
                    socket = new WebSocket(url, protos.split(','));
                } else {
                    socket = new WebSocket(url);
                }
            } catch (e) {
                return 0;
            }
            socket.binaryType = 'arraybuffer';
            return GodotWebSocket.create(socket, on_open, on_message, on_error, on_close);
        }
  
    function _godot_js_websocket_destroy(p_id) {
            GodotWebSocket.destroy(p_id);
        }
  
    function _godot_js_websocket_send(p_id, p_buf, p_buf_len, p_raw) {
            const bytes_array = new Uint8Array(p_buf_len);
            let i = 0;
            for (i = 0; i < p_buf_len; i++) {
                bytes_array[i] = GodotRuntime.getHeapValue(p_buf + i, 'i8');
            }
            let out = bytes_array.buffer;
            if (!p_raw) {
                out = new TextDecoder('utf-8').decode(bytes_array);
            }
            return GodotWebSocket.send(p_id, out);
        }
  
    var GodotJSWrapper = {proxies:null,MyProxy:function (val) {
                const id = IDHandler.add(this);
                GodotJSWrapper.proxies.set(val, id);
                let refs = 1;
                this.ref = function () {
                    refs++;
                };
                this.unref = function () {
                    refs--;
                    if (refs === 0) {
                        IDHandler.remove(id);
                        GodotJSWrapper.proxies.delete(val);
                    }
                };
                this.get_val = function () {
                    return val;
                };
                this.get_id = function () {
                    return id;
                };
            },get_proxied:function (val) {
                const id = GodotJSWrapper.proxies.get(val);
                if (id === undefined) {
                    const proxy = new GodotJSWrapper.MyProxy(val);
                    return proxy.get_id();
                }
                IDHandler.get(id).ref();
                return id;
            },get_proxied_value:function (id) {
                const proxy = IDHandler.get(id);
                if (proxy === undefined) {
                    return undefined;
                }
                return proxy.get_val();
            },variant2js:function (type, val) {
                switch (type) {
                case 0:
                    return null;
                case 1:
                    return !!GodotRuntime.getHeapValue(val, 'i64');
                case 2:
                    return GodotRuntime.getHeapValue(val, 'i64');
                case 3:
                    return GodotRuntime.getHeapValue(val, 'double');
                case 4:
                    return GodotRuntime.parseString(GodotRuntime.getHeapValue(val, '*'));
                case 17: // OBJECT
                    return GodotJSWrapper.get_proxied_value(GodotRuntime.getHeapValue(val, 'i64'));
                default:
                    return undefined;
                }
            },js2variant:function (p_val, p_exchange) {
                if (p_val === undefined || p_val === null) {
                    return 0; // NIL
                }
                const type = typeof (p_val);
                if (type === 'boolean') {
                    GodotRuntime.setHeapValue(p_exchange, p_val, 'i64');
                    return 1; // BOOL
                } else if (type === 'number') {
                    if (Number.isInteger(p_val)) {
                        GodotRuntime.setHeapValue(p_exchange, p_val, 'i64');
                        return 2; // INT
                    }
                    GodotRuntime.setHeapValue(p_exchange, p_val, 'double');
                    return 3; // REAL
                } else if (type === 'string') {
                    const c_str = GodotRuntime.allocString(p_val);
                    GodotRuntime.setHeapValue(p_exchange, c_str, '*');
                    return 4; // STRING
                }
                const id = GodotJSWrapper.get_proxied(p_val);
                GodotRuntime.setHeapValue(p_exchange, id, 'i64');
                return 17;
            }};
    function _godot_js_wrapper_create_cb(p_ref, p_func) {
            const func = GodotRuntime.get_func(p_func);
            let id = 0;
            const cb = function () {
                if (!GodotJSWrapper.get_proxied_value(id)) {
                    return;
                }
                const args = Array.from(arguments);
                const argsProxy = new GodotJSWrapper.MyProxy(args);
                func(p_ref, argsProxy.get_id(), args.length);
                argsProxy.unref();
            };
            id = GodotJSWrapper.get_proxied(cb);
            return id;
        }
  
    function _godot_js_wrapper_create_object(p_object, p_args, p_argc, p_convert_callback, p_exchange, p_lock, p_free_lock_callback) {
            const name = GodotRuntime.parseString(p_object);
            if (typeof (window[name]) === 'undefined') {
                return -1;
            }
            const convert = GodotRuntime.get_func(p_convert_callback);
            const freeLock = GodotRuntime.get_func(p_free_lock_callback);
            const args = new Array(p_argc);
            for (let i = 0; i < p_argc; i++) {
                const type = convert(p_args, i, p_exchange, p_lock);
                const lock = GodotRuntime.getHeapValue(p_lock, '*');
                args[i] = GodotJSWrapper.variant2js(type, p_exchange);
                if (lock) {
                    freeLock(p_lock, type);
                }
            }
            try {
                const res = new window[name](...args);
                return GodotJSWrapper.js2variant(res, p_exchange);
            } catch (e) {
                GodotRuntime.error(`Error calling constructor ${name} with args:`, args, 'error:', e);
                return -1;
            }
        }
  
    function _godot_js_wrapper_interface_get(p_name) {
            const name = GodotRuntime.parseString(p_name);
            if (typeof (window[name]) !== 'undefined') {
                return GodotJSWrapper.get_proxied(window[name]);
            }
            return 0;
        }
  
    function _godot_js_wrapper_object_call(p_id, p_method, p_args, p_argc, p_convert_callback, p_exchange, p_lock, p_free_lock_callback) {
            const obj = GodotJSWrapper.get_proxied_value(p_id);
            if (obj === undefined) {
                return -1;
            }
            const method = GodotRuntime.parseString(p_method);
            const convert = GodotRuntime.get_func(p_convert_callback);
            const freeLock = GodotRuntime.get_func(p_free_lock_callback);
            const args = new Array(p_argc);
            for (let i = 0; i < p_argc; i++) {
                const type = convert(p_args, i, p_exchange, p_lock);
                const lock = GodotRuntime.getHeapValue(p_lock, '*');
                args[i] = GodotJSWrapper.variant2js(type, p_exchange);
                if (lock) {
                    freeLock(p_lock, type);
                }
            }
            try {
                const res = obj[method](...args);
                return GodotJSWrapper.js2variant(res, p_exchange);
            } catch (e) {
                GodotRuntime.error(`Error calling method ${method} on:`, obj, 'error:', e);
                return -1;
            }
        }
  
    function _godot_js_wrapper_object_get(p_id, p_exchange, p_prop) {
            const obj = GodotJSWrapper.get_proxied_value(p_id);
            if (obj === undefined) {
                return 0;
            }
            if (p_prop) {
                const prop = GodotRuntime.parseString(p_prop);
                try {
                    return GodotJSWrapper.js2variant(obj[prop], p_exchange);
                } catch (e) {
                    GodotRuntime.error(`Error getting variable ${prop} on object`, obj);
                    return 0; // NIL
                }
            }
            return GodotJSWrapper.js2variant(obj, p_exchange);
        }
  
    function _godot_js_wrapper_object_getvar(p_id, p_type, p_exchange) {
            const obj = GodotJSWrapper.get_proxied_value(p_id);
            if (obj === undefined) {
                return -1;
            }
            const prop = GodotJSWrapper.variant2js(p_type, p_exchange);
            if (prop === undefined || prop === null) {
                return -1;
            }
            try {
                return GodotJSWrapper.js2variant(obj[prop], p_exchange);
            } catch (e) {
                GodotRuntime.error(`Error getting variable ${prop} on object`, obj, e);
                return -1;
            }
        }
  
    function _godot_js_wrapper_object_set(p_id, p_name, p_type, p_exchange) {
            const obj = GodotJSWrapper.get_proxied_value(p_id);
            if (obj === undefined) {
                return;
            }
            const name = GodotRuntime.parseString(p_name);
            try {
                obj[name] = GodotJSWrapper.variant2js(p_type, p_exchange);
            } catch (e) {
                GodotRuntime.error(`Error setting variable ${name} on object`, obj);
            }
        }
  
    function _godot_js_wrapper_object_setvar(p_id, p_key_type, p_key_ex, p_val_type, p_val_ex) {
            const obj = GodotJSWrapper.get_proxied_value(p_id);
            if (obj === undefined) {
                return -1;
            }
            const key = GodotJSWrapper.variant2js(p_key_type, p_key_ex);
            try {
                obj[key] = GodotJSWrapper.variant2js(p_val_type, p_val_ex);
                return 0;
            } catch (e) {
                GodotRuntime.error(`Error setting variable ${key} on object`, obj);
                return -1;
            }
        }
  
    function _godot_js_wrapper_object_unref(p_id) {
            const proxy = IDHandler.get(p_id);
            if (proxy !== undefined) {
                proxy.unref();
            }
        }
  
    function _setTempRet0(val) {
        setTempRet0(val);
      }
  
    function __isLeapYear(year) {
          return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
      }
    
    function __arraySum(array, index) {
        var sum = 0;
        for (var i = 0; i <= index; sum += array[i++]) {
          // no-op
        }
        return sum;
      }
    
    var __MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    var __MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
    function __addDays(date, days) {
        var newDate = new Date(date.getTime());
        while (days > 0) {
          var leap = __isLeapYear(newDate.getFullYear());
          var currentMonth = newDate.getMonth();
          var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
    
          if (days > daysInCurrentMonth-newDate.getDate()) {
            // we spill over to next month
            days -= (daysInCurrentMonth-newDate.getDate()+1);
            newDate.setDate(1);
            if (currentMonth < 11) {
              newDate.setMonth(currentMonth+1)
            } else {
              newDate.setMonth(0);
              newDate.setFullYear(newDate.getFullYear()+1);
            }
          } else {
            // we stay in current month
            newDate.setDate(newDate.getDate()+days);
            return newDate;
          }
        }
    
        return newDate;
      }
    function _strftime(s, maxsize, format, tm) {
        // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
        // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
    
        var tm_zone = HEAP32[(((tm)+(40))>>2)];
    
        var date = {
          tm_sec: HEAP32[((tm)>>2)],
          tm_min: HEAP32[(((tm)+(4))>>2)],
          tm_hour: HEAP32[(((tm)+(8))>>2)],
          tm_mday: HEAP32[(((tm)+(12))>>2)],
          tm_mon: HEAP32[(((tm)+(16))>>2)],
          tm_year: HEAP32[(((tm)+(20))>>2)],
          tm_wday: HEAP32[(((tm)+(24))>>2)],
          tm_yday: HEAP32[(((tm)+(28))>>2)],
          tm_isdst: HEAP32[(((tm)+(32))>>2)],
          tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
          tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
        };
    
        var pattern = UTF8ToString(format);
    
        // expand format
        var EXPANSION_RULES_1 = {
          '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
          '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
          '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
          '%h': '%b',                       // Equivalent to %b
          '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
          '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
          '%T': '%H:%M:%S',                 // Replaced by the time
          '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
          '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
          // Modified Conversion Specifiers
          '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
          '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
          '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
          '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
          '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
          '%EY': '%Y',                      // Replaced by the full alternative year representation.
          '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
          '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
          '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
          '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
          '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
          '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
          '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
          '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
          '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
          '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
          '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
          '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
          '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
        };
        for (var rule in EXPANSION_RULES_1) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
        }
    
        var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        function leadingSomething(value, digits, character) {
          var str = typeof value == 'number' ? value.toString() : (value || '');
          while (str.length < digits) {
            str = character[0]+str;
          }
          return str;
        }
    
        function leadingNulls(value, digits) {
          return leadingSomething(value, digits, '0');
        }
    
        function compareByDay(date1, date2) {
          function sgn(value) {
            return value < 0 ? -1 : (value > 0 ? 1 : 0);
          }
    
          var compare;
          if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
            if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
              compare = sgn(date1.getDate()-date2.getDate());
            }
          }
          return compare;
        }
    
        function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0: // Sunday
                return new Date(janFourth.getFullYear()-1, 11, 29);
              case 1: // Monday
                return janFourth;
              case 2: // Tuesday
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3: // Wednesday
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4: // Thursday
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5: // Friday
                return new Date(janFourth.getFullYear()-1, 11, 31);
              case 6: // Saturday
                return new Date(janFourth.getFullYear()-1, 11, 30);
            }
        }
    
        function getWeekBasedYear(date) {
            var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
    
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
    
            var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
    
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              // this date is after the start of the first week of this year
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear()+1;
              }
              return thisDate.getFullYear();
            }
            return thisDate.getFullYear()-1;
        }
    
        var EXPANSION_RULES_2 = {
          '%a': function(date) {
            return WEEKDAYS[date.tm_wday].substring(0,3);
          },
          '%A': function(date) {
            return WEEKDAYS[date.tm_wday];
          },
          '%b': function(date) {
            return MONTHS[date.tm_mon].substring(0,3);
          },
          '%B': function(date) {
            return MONTHS[date.tm_mon];
          },
          '%C': function(date) {
            var year = date.tm_year+1900;
            return leadingNulls((year/100)|0,2);
          },
          '%d': function(date) {
            return leadingNulls(date.tm_mday, 2);
          },
          '%e': function(date) {
            return leadingSomething(date.tm_mday, 2, ' ');
          },
          '%g': function(date) {
            // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
            // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
            // January 4th, which is also the week that includes the first Thursday of the year, and
            // is also the first week that contains at least four days in the year.
            // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
            // the last week of the preceding year; thus, for Saturday 2nd January 1999,
            // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
            // or 31st is a Monday, it and any following days are part of week 1 of the following year.
            // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
    
            return getWeekBasedYear(date).toString().substring(2);
          },
          '%G': function(date) {
            return getWeekBasedYear(date);
          },
          '%H': function(date) {
            return leadingNulls(date.tm_hour, 2);
          },
          '%I': function(date) {
            var twelveHour = date.tm_hour;
            if (twelveHour == 0) twelveHour = 12;
            else if (twelveHour > 12) twelveHour -= 12;
            return leadingNulls(twelveHour, 2);
          },
          '%j': function(date) {
            // Day of the year (001-366)
            return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
          },
          '%m': function(date) {
            return leadingNulls(date.tm_mon+1, 2);
          },
          '%M': function(date) {
            return leadingNulls(date.tm_min, 2);
          },
          '%n': function() {
            return '\n';
          },
          '%p': function(date) {
            if (date.tm_hour >= 0 && date.tm_hour < 12) {
              return 'AM';
            }
            return 'PM';
          },
          '%S': function(date) {
            return leadingNulls(date.tm_sec, 2);
          },
          '%t': function() {
            return '\t';
          },
          '%u': function(date) {
            return date.tm_wday || 7;
          },
          '%U': function(date) {
            var days = date.tm_yday + 7 - date.tm_wday;
            return leadingNulls(Math.floor(days / 7), 2);
          },
          '%V': function(date) {
            // Replaced by the week number of the year (Monday as the first day of the week)
            // as a decimal number [01,53]. If the week containing 1 January has four
            // or more days in the new year, then it is considered week 1.
            // Otherwise, it is the last week of the previous year, and the next week is week 1.
            // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
            var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
            // If 1 Jan is just 1-3 days past Monday, the previous week
            // is also in this year.
            if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
              val++;
            }
            if (!val) {
              val = 52;
              // If 31 December of prev year a Thursday, or Friday of a
              // leap year, then the prev year has 53 weeks.
              var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
              if (dec31 == 4 || (dec31 == 5 && __isLeapYear(date.tm_year%400-1))) {
                val++;
              }
            } else if (val == 53) {
              // If 1 January is not a Thursday, and not a Wednesday of a
              // leap year, then this year has only 52 weeks.
              var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
              if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year)))
                val = 1;
            }
            return leadingNulls(val, 2);
          },
          '%w': function(date) {
            return date.tm_wday;
          },
          '%W': function(date) {
            var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
            return leadingNulls(Math.floor(days / 7), 2);
          },
          '%y': function(date) {
            // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
            return (date.tm_year+1900).toString().substring(2);
          },
          '%Y': function(date) {
            // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
            return date.tm_year+1900;
          },
          '%z': function(date) {
            // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
            // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
            var off = date.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            // convert from minutes into hhmm format (which means 60 minutes = 100 units)
            off = (off / 60)*100 + (off % 60);
            return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
          },
          '%Z': function(date) {
            return date.tm_zone;
          },
          '%%': function() {
            return '%';
          }
        };
    
        // Replace %% with a pair of NULLs (which cannot occur in a C string), then
        // re-inject them after processing.
        pattern = pattern.replace(/%%/g, '\0\0')
        for (var rule in EXPANSION_RULES_2) {
          if (pattern.includes(rule)) {
            pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
          }
        }
        pattern = pattern.replace(/\0\0/g, '%')
    
        var bytes = intArrayFromString(pattern, false);
        if (bytes.length > maxsize) {
          return 0;
        }
    
        writeArrayToMemory(bytes, s);
        return bytes.length-1;
      }
  
    function _strftime_l(s, maxsize, format, tm) {
        return _strftime(s, maxsize, format, tm); // no locale support yet
      }
  
  
    function allocateUTF8OnStack(str) {
        var size = lengthBytesUTF8(str) + 1;
        var ret = stackAlloc(size);
        stringToUTF8Array(str, HEAP8, ret, size);
        return ret;
      }
  
  
    function uleb128Encode(n, target) {
        if (n < 128) {
          target.push(n);
        } else {
          target.push((n % 128) | 128, n >> 7);
        }
      }
    
    function sigToWasmTypes(sig) {
        var typeNames = {
          'i': 'i32',
          'j': 'i64',
          'f': 'f32',
          'd': 'f64',
          'p': 'i32',
        };
        var type = {
          parameters: [],
          results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
        };
        for (var i = 1; i < sig.length; ++i) {
          type.parameters.push(typeNames[sig[i]]);
        }
        return type;
      }
    function convertJsFunctionToWasm(func, sig) {
    
        // If the type reflection proposal is available, use the new
        // "WebAssembly.Function" constructor.
        // Otherwise, construct a minimal wasm module importing the JS function and
        // re-exporting it.
        if (typeof WebAssembly.Function == "function") {
          return new WebAssembly.Function(sigToWasmTypes(sig), func);
        }
    
        // The module is static, with the exception of the type section, which is
        // generated based on the signature passed in.
        var typeSectionBody = [
          0x01, // count: 1
          0x60, // form: func
        ];
        var sigRet = sig.slice(0, 1);
        var sigParam = sig.slice(1);
        var typeCodes = {
          'i': 0x7f, // i32
          'p': 0x7f, // i32
          'j': 0x7e, // i64
          'f': 0x7d, // f32
          'd': 0x7c, // f64
        };
    
        // Parameters, length + signatures
        uleb128Encode(sigParam.length, typeSectionBody);
        for (var i = 0; i < sigParam.length; ++i) {
          typeSectionBody.push(typeCodes[sigParam[i]]);
        }
    
        // Return values, length + signatures
        // With no multi-return in MVP, either 0 (void) or 1 (anything else)
        if (sigRet == 'v') {
          typeSectionBody.push(0x00);
        } else {
          typeSectionBody.push(0x01, typeCodes[sigRet]);
        }
    
        // Rest of the module is static
        var bytes = [
          0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
          0x01, 0x00, 0x00, 0x00, // version: 1
          0x01, // Type section code
        ];
        // Write the overall length of the type section followed by the body
        uleb128Encode(typeSectionBody.length, bytes);
        bytes.push.apply(bytes, typeSectionBody);
    
        // The rest of the module is static
        bytes.push(
          0x02, 0x07, // import section
            // (import "e" "f" (func 0 (type 0)))
            0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
          0x07, 0x05, // export section
            // (export "f" (func 0 (type 0)))
            0x01, 0x01, 0x66, 0x00, 0x00,
        );
    
        // We can compile this wasm module synchronously because it is very small.
        // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
        var module = new WebAssembly.Module(new Uint8Array(bytes));
        var instance = new WebAssembly.Instance(module, { 'e': { 'f': func } });
        var wrappedFunc = instance.exports['f'];
        return wrappedFunc;
      }
    
    function updateTableMap(offset, count) {
        if (functionsInTableMap) {
          for (var i = offset; i < offset + count; i++) {
            var item = getWasmTableEntry(i);
            // Ignore null values.
            if (item) {
              functionsInTableMap.set(item, i);
            }
          }
        }
      }
    
    var functionsInTableMap = undefined;
    
    var freeTableIndexes = [];
    function getEmptyTableSlot() {
        // Reuse a free index if there is one, otherwise grow.
        if (freeTableIndexes.length) {
          return freeTableIndexes.pop();
        }
        // Grow the table
        try {
          wasmTable.grow(1);
        } catch (err) {
          if (!(err instanceof RangeError)) {
            throw err;
          }
          throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
        }
        return wasmTable.length - 1;
      }
    
    function setWasmTableEntry(idx, func) {
        wasmTable.set(idx, func);
      }
    /** @param {string=} sig */
    function addFunction(func, sig) {
    
        // Check if the function is already in the table, to ensure each function
        // gets a unique index. First, create the map if this is the first use.
        if (!functionsInTableMap) {
          functionsInTableMap = new WeakMap();
          updateTableMap(0, wasmTable.length);
        }
        if (functionsInTableMap.has(func)) {
          return functionsInTableMap.get(func);
        }
    
        // It's not in the table, add it now.
    
        var ret = getEmptyTableSlot();
    
        // Set the new value.
        try {
          // Attempting to call this with JS function will cause of table.set() to fail
          setWasmTableEntry(ret, func);
        } catch (err) {
          if (!(err instanceof TypeError)) {
            throw err;
          }
          var wrapped = convertJsFunctionToWasm(func, sig);
          setWasmTableEntry(ret, wrapped);
        }
    
        functionsInTableMap.set(func, ret);
    
        return ret;
      }
  
    function removeFunction(index) {
        functionsInTableMap.delete(getWasmTableEntry(index));
        freeTableIndexes.push(index);
      }
  
    var ALLOC_NORMAL = 0;
    
    var ALLOC_STACK = 1;
    function allocate(slab, allocator) {
        var ret;
    
        if (allocator == ALLOC_STACK) {
          ret = stackAlloc(slab.length);
        } else {
          ret = _malloc(slab.length);
        }
    
        if (!slab.subarray && !slab.slice) {
          slab = new Uint8Array(slab);
        }
        HEAPU8.set(slab, ret);
        return ret;
      }
  
  
  
    function AsciiToString(ptr) {
        var str = '';
        while (1) {
          var ch = HEAPU8[((ptr++)>>0)];
          if (!ch) return str;
          str += String.fromCharCode(ch);
        }
      }
  
    function stringToAscii(str, outPtr) {
        return writeAsciiToMemory(str, outPtr, false);
      }
  
    var UTF16Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf-16le') : undefined;;
    function UTF16ToString(ptr, maxBytesToRead) {
        var endPtr = ptr;
        // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
        // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
        var idx = endPtr >> 1;
        var maxIdx = idx + maxBytesToRead / 2;
        // If maxBytesToRead is not passed explicitly, it will be undefined, and this
        // will always evaluate to true. This saves on code size.
        while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
        endPtr = idx << 1;
    
        if (endPtr - ptr > 32 && UTF16Decoder) {
          return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
        } else {
          var str = '';
    
          // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
          // will always evaluate to true. The loop is then terminated on the first null char.
          for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
            if (codeUnit == 0) break;
            // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
            str += String.fromCharCode(codeUnit);
          }
    
          return str;
        }
      }
  
    function stringToUTF16(str, outPtr, maxBytesToWrite) {
        // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
        if (maxBytesToWrite === undefined) {
          maxBytesToWrite = 0x7FFFFFFF;
        }
        if (maxBytesToWrite < 2) return 0;
        maxBytesToWrite -= 2; // Null terminator.
        var startPtr = outPtr;
        var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
        for (var i = 0; i < numCharsToWrite; ++i) {
          // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
          var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
          HEAP16[((outPtr)>>1)] = codeUnit;
          outPtr += 2;
        }
        // Null-terminate the pointer to the HEAP.
        HEAP16[((outPtr)>>1)] = 0;
        return outPtr - startPtr;
      }
  
    function lengthBytesUTF16(str) {
        return str.length*2;
      }
  
    function UTF32ToString(ptr, maxBytesToRead) {
        var i = 0;
    
        var str = '';
        // If maxBytesToRead is not passed explicitly, it will be undefined, and this
        // will always evaluate to true. This saves on code size.
        while (!(i >= maxBytesToRead / 4)) {
          var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
          if (utf32 == 0) break;
          ++i;
          // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
          // See http://unicode.org/faq/utf_bom.html#utf16-3
          if (utf32 >= 0x10000) {
            var ch = utf32 - 0x10000;
            str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
          } else {
            str += String.fromCharCode(utf32);
          }
        }
        return str;
      }
  
    function stringToUTF32(str, outPtr, maxBytesToWrite) {
        // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
        if (maxBytesToWrite === undefined) {
          maxBytesToWrite = 0x7FFFFFFF;
        }
        if (maxBytesToWrite < 4) return 0;
        var startPtr = outPtr;
        var endPtr = startPtr + maxBytesToWrite - 4;
        for (var i = 0; i < str.length; ++i) {
          // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
          // See http://unicode.org/faq/utf_bom.html#utf16-3
          var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
          if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
            var trailSurrogate = str.charCodeAt(++i);
            codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
          }
          HEAP32[((outPtr)>>2)] = codeUnit;
          outPtr += 4;
          if (outPtr + 4 > endPtr) break;
        }
        // Null-terminate the pointer to the HEAP.
        HEAP32[((outPtr)>>2)] = 0;
        return outPtr - startPtr;
      }
  
    function lengthBytesUTF32(str) {
        var len = 0;
        for (var i = 0; i < str.length; ++i) {
          // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
          // See http://unicode.org/faq/utf_bom.html#utf16-3
          var codeUnit = str.charCodeAt(i);
          if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
          len += 4;
        }
    
        return len;
      }
  
  
  
    /** @deprecated @param {boolean=} dontAddNull */
    function writeStringToMemory(string, buffer, dontAddNull) {
        warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');
    
        var /** @type {number} */ lastChar, /** @type {number} */ end;
        if (dontAddNull) {
          // stringToUTF8Array always appends null. If we don't want to do that, remember the
          // character that existed at the location where the null will be placed, and restore
          // that after the write (below).
          end = buffer + lengthBytesUTF8(string);
          lastChar = HEAP8[end];
        }
        stringToUTF8(string, buffer, Infinity);
        if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
      }
  
  
  
  
    function intArrayToString(array) {
      var ret = [];
      for (var i = 0; i < array.length; i++) {
        var chr = array[i];
        if (chr > 0xFF) {
          if (ASSERTIONS) {
            assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
          }
          chr &= 0xFF;
        }
        ret.push(String.fromCharCode(chr));
      }
      return ret.join('');
    }
  
  
    function getCFunc(ident) {
        var func = Module['_' + ident]; // closure exported function
        return func;
      }
    
      /**
       * @param {string|null=} returnType
       * @param {Array=} argTypes
       * @param {Arguments|Array=} args
       * @param {Object=} opts
       */
    function ccall(ident, returnType, argTypes, args, opts) {
        // For fast lookup of conversion functions
        var toC = {
          'string': (str) => {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) { // null string
              // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
              var len = (str.length << 2) + 1;
              ret = stackAlloc(len);
              stringToUTF8(str, ret, len);
            }
            return ret;
          },
          'array': (arr) => {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret;
          }
        };
    
        function convertReturnValue(ret) {
          if (returnType === 'string') {
            
            return UTF8ToString(ret);
          }
          if (returnType === 'boolean') return Boolean(ret);
          return ret;
        }
    
        var func = getCFunc(ident);
        var cArgs = [];
        var stack = 0;
        if (args) {
          for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
              if (stack === 0) stack = stackSave();
              cArgs[i] = converter(args[i]);
            } else {
              cArgs[i] = args[i];
            }
          }
        }
        var ret = func.apply(null, cArgs);
        function onDone(ret) {
          if (stack !== 0) stackRestore(stack);
          return convertReturnValue(ret);
        }
    
        ret = onDone(ret);
        return ret;
      }
  
    
      /**
       * @param {string=} returnType
       * @param {Array=} argTypes
       * @param {Object=} opts
       */
    function cwrap(ident, returnType, argTypes, opts) {
        argTypes = argTypes || [];
        // When the function takes numbers and returns a number, we can just return
        // the original function
        var numericArgs = argTypes.every((type) => type === 'number' || type === 'boolean');
        var numericRet = returnType !== 'string';
        if (numericRet && numericArgs && !opts) {
          return getCFunc(ident);
        }
        return function() {
          return ccall(ident, returnType, argTypes, arguments, opts);
        }
      }
  
  
  
    var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;  // root node sets parent to itself
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.mounted = null;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = rdev;
    };
    var readMode = 292/*292*/ | 73/*73*/;
    var writeMode = 146/*146*/;
    Object.defineProperties(FSNode.prototype, {
     read: {
      get: /** @this{FSNode} */function() {
       return (this.mode & readMode) === readMode;
      },
      set: /** @this{FSNode} */function(val) {
       val ? this.mode |= readMode : this.mode &= ~readMode;
      }
     },
     write: {
      get: /** @this{FSNode} */function() {
       return (this.mode & writeMode) === writeMode;
      },
      set: /** @this{FSNode} */function(val) {
       val ? this.mode |= writeMode : this.mode &= ~writeMode;
      }
     },
     isFolder: {
      get: /** @this{FSNode} */function() {
       return FS.isDir(this.mode);
      }
     },
     isDevice: {
      get: /** @this{FSNode} */function() {
       return FS.isChrdev(this.mode);
      }
     }
    });
    FS.FSNode = FSNode;
    FS.staticInit();;
  
        // exports
        Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) { Browser.requestFullscreen(lockPointer, resizeCanvas) };
        Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
        Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
        Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
        Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
        Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() };
        Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) { return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes) };
        var preloadedImages = {};
        var preloadedAudios = {};;
  var GLctx;;
  for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
  var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
    for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
    miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i+1);
    }
    ;
  var __miniTempWebGLIntBuffersStorage = new Int32Array(288);
    for (/**@suppress{duplicate}*/var i = 0; i < 288; ++i) {
    __miniTempWebGLIntBuffers[i] = __miniTempWebGLIntBuffersStorage.subarray(0, i+1);
    }
    ;
  Module["request_quit"] = function() { GodotOS.request_quit() };Module["onExit"] = GodotOS.cleanup;GodotOS._fs_sync_promise = Promise.resolve();;
  Module["initConfig"] = GodotConfig.init_config;;
  Module["initFS"] = GodotFS.init;Module["copyToFS"] = GodotFS.copy_to_fs;;
  ERRNO_CODES = {
        'EPERM': 63,
        'ENOENT': 44,
        'ESRCH': 71,
        'EINTR': 27,
        'EIO': 29,
        'ENXIO': 60,
        'E2BIG': 1,
        'ENOEXEC': 45,
        'EBADF': 8,
        'ECHILD': 12,
        'EAGAIN': 6,
        'EWOULDBLOCK': 6,
        'ENOMEM': 48,
        'EACCES': 2,
        'EFAULT': 21,
        'ENOTBLK': 105,
        'EBUSY': 10,
        'EEXIST': 20,
        'EXDEV': 75,
        'ENODEV': 43,
        'ENOTDIR': 54,
        'EISDIR': 31,
        'EINVAL': 28,
        'ENFILE': 41,
        'EMFILE': 33,
        'ENOTTY': 59,
        'ETXTBSY': 74,
        'EFBIG': 22,
        'ENOSPC': 51,
        'ESPIPE': 70,
        'EROFS': 69,
        'EMLINK': 34,
        'EPIPE': 64,
        'EDOM': 18,
        'ERANGE': 68,
        'ENOMSG': 49,
        'EIDRM': 24,
        'ECHRNG': 106,
        'EL2NSYNC': 156,
        'EL3HLT': 107,
        'EL3RST': 108,
        'ELNRNG': 109,
        'EUNATCH': 110,
        'ENOCSI': 111,
        'EL2HLT': 112,
        'EDEADLK': 16,
        'ENOLCK': 46,
        'EBADE': 113,
        'EBADR': 114,
        'EXFULL': 115,
        'ENOANO': 104,
        'EBADRQC': 103,
        'EBADSLT': 102,
        'EDEADLOCK': 16,
        'EBFONT': 101,
        'ENOSTR': 100,
        'ENODATA': 116,
        'ETIME': 117,
        'ENOSR': 118,
        'ENONET': 119,
        'ENOPKG': 120,
        'EREMOTE': 121,
        'ENOLINK': 47,
        'EADV': 122,
        'ESRMNT': 123,
        'ECOMM': 124,
        'EPROTO': 65,
        'EMULTIHOP': 36,
        'EDOTDOT': 125,
        'EBADMSG': 9,
        'ENOTUNIQ': 126,
        'EBADFD': 127,
        'EREMCHG': 128,
        'ELIBACC': 129,
        'ELIBBAD': 130,
        'ELIBSCN': 131,
        'ELIBMAX': 132,
        'ELIBEXEC': 133,
        'ENOSYS': 52,
        'ENOTEMPTY': 55,
        'ENAMETOOLONG': 37,
        'ELOOP': 32,
        'EOPNOTSUPP': 138,
        'EPFNOSUPPORT': 139,
        'ECONNRESET': 15,
        'ENOBUFS': 42,
        'EAFNOSUPPORT': 5,
        'EPROTOTYPE': 67,
        'ENOTSOCK': 57,
        'ENOPROTOOPT': 50,
        'ESHUTDOWN': 140,
        'ECONNREFUSED': 14,
        'EADDRINUSE': 3,
        'ECONNABORTED': 13,
        'ENETUNREACH': 40,
        'ENETDOWN': 38,
        'ETIMEDOUT': 73,
        'EHOSTDOWN': 142,
        'EHOSTUNREACH': 23,
        'EINPROGRESS': 26,
        'EALREADY': 7,
        'EDESTADDRREQ': 17,
        'EMSGSIZE': 35,
        'EPROTONOSUPPORT': 66,
        'ESOCKTNOSUPPORT': 137,
        'EADDRNOTAVAIL': 4,
        'ENETRESET': 39,
        'EISCONN': 30,
        'ENOTCONN': 53,
        'ETOOMANYREFS': 141,
        'EUSERS': 136,
        'EDQUOT': 19,
        'ESTALE': 72,
        'ENOTSUP': 138,
        'ENOMEDIUM': 148,
        'EILSEQ': 25,
        'EOVERFLOW': 61,
        'ECANCELED': 11,
        'ENOTRECOVERABLE': 56,
        'EOWNERDEAD': 62,
        'ESTRPIPE': 135,
      };;
  GodotOS.atexit(function(resolve, reject) { GodotDisplayCursor.clear(); resolve(); });;
  GodotOS.atexit(function(resolve, reject) { GodotEventListeners.clear(); resolve(); });;
  GodotOS.atexit(function(resolve, reject) { GodotDisplayVK.clear(); resolve(); });;
  GodotJSWrapper.proxies = new Map();;
  var ASSERTIONS = false;
  
  var asmLibraryArg = {
    "__call_sighandler": ___call_sighandler,
    "__syscall_accept4": ___syscall_accept4,
    "__syscall_bind": ___syscall_bind,
    "__syscall_chdir": ___syscall_chdir,
    "__syscall_chmod": ___syscall_chmod,
    "__syscall_connect": ___syscall_connect,
    "__syscall_faccessat": ___syscall_faccessat,
    "__syscall_fcntl64": ___syscall_fcntl64,
    "__syscall_fstat64": ___syscall_fstat64,
    "__syscall_getcwd": ___syscall_getcwd,
    "__syscall_getdents64": ___syscall_getdents64,
    "__syscall_ioctl": ___syscall_ioctl,
    "__syscall_listen": ___syscall_listen,
    "__syscall_lstat64": ___syscall_lstat64,
    "__syscall_mkdirat": ___syscall_mkdirat,
    "__syscall_newfstatat": ___syscall_newfstatat,
    "__syscall_openat": ___syscall_openat,
    "__syscall_poll": ___syscall_poll,
    "__syscall_readlinkat": ___syscall_readlinkat,
    "__syscall_recvfrom": ___syscall_recvfrom,
    "__syscall_renameat": ___syscall_renameat,
    "__syscall_rmdir": ___syscall_rmdir,
    "__syscall_sendmsg": ___syscall_sendmsg,
    "__syscall_sendto": ___syscall_sendto,
    "__syscall_socket": ___syscall_socket,
    "__syscall_stat64": ___syscall_stat64,
    "__syscall_statfs64": ___syscall_statfs64,
    "__syscall_symlink": ___syscall_symlink,
    "__syscall_unlinkat": ___syscall_unlinkat,
    "_dlinit": __dlinit,
    "_dlopen_js": __dlopen_js,
    "_dlsym_js": __dlsym_js,
    "_emscripten_date_now": __emscripten_date_now,
    "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
    "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
    "_gmtime_js": __gmtime_js,
    "_localtime_js": __localtime_js,
    "_tzset_js": __tzset_js,
    "abort": _abort,
    "emscripten_cancel_main_loop": _emscripten_cancel_main_loop,
    "emscripten_force_exit": _emscripten_force_exit,
    "emscripten_get_heap_max": _emscripten_get_heap_max,
    "emscripten_get_now": _emscripten_get_now,
    "emscripten_glActiveTexture": _emscripten_glActiveTexture,
    "emscripten_glAttachShader": _emscripten_glAttachShader,
    "emscripten_glBeginQuery": _emscripten_glBeginQuery,
    "emscripten_glBeginQueryEXT": _emscripten_glBeginQueryEXT,
    "emscripten_glBeginTransformFeedback": _emscripten_glBeginTransformFeedback,
    "emscripten_glBindAttribLocation": _emscripten_glBindAttribLocation,
    "emscripten_glBindBuffer": _emscripten_glBindBuffer,
    "emscripten_glBindBufferBase": _emscripten_glBindBufferBase,
    "emscripten_glBindBufferRange": _emscripten_glBindBufferRange,
    "emscripten_glBindFramebuffer": _emscripten_glBindFramebuffer,
    "emscripten_glBindRenderbuffer": _emscripten_glBindRenderbuffer,
    "emscripten_glBindSampler": _emscripten_glBindSampler,
    "emscripten_glBindTexture": _emscripten_glBindTexture,
    "emscripten_glBindTransformFeedback": _emscripten_glBindTransformFeedback,
    "emscripten_glBindVertexArray": _emscripten_glBindVertexArray,
    "emscripten_glBindVertexArrayOES": _emscripten_glBindVertexArrayOES,
    "emscripten_glBlendColor": _emscripten_glBlendColor,
    "emscripten_glBlendEquation": _emscripten_glBlendEquation,
    "emscripten_glBlendEquationSeparate": _emscripten_glBlendEquationSeparate,
    "emscripten_glBlendFunc": _emscripten_glBlendFunc,
    "emscripten_glBlendFuncSeparate": _emscripten_glBlendFuncSeparate,
    "emscripten_glBlitFramebuffer": _emscripten_glBlitFramebuffer,
    "emscripten_glBufferData": _emscripten_glBufferData,
    "emscripten_glBufferSubData": _emscripten_glBufferSubData,
    "emscripten_glCheckFramebufferStatus": _emscripten_glCheckFramebufferStatus,
    "emscripten_glClear": _emscripten_glClear,
    "emscripten_glClearBufferfi": _emscripten_glClearBufferfi,
    "emscripten_glClearBufferfv": _emscripten_glClearBufferfv,
    "emscripten_glClearBufferiv": _emscripten_glClearBufferiv,
    "emscripten_glClearBufferuiv": _emscripten_glClearBufferuiv,
    "emscripten_glClearColor": _emscripten_glClearColor,
    "emscripten_glClearDepthf": _emscripten_glClearDepthf,
    "emscripten_glClearStencil": _emscripten_glClearStencil,
    "emscripten_glClientWaitSync": _emscripten_glClientWaitSync,
    "emscripten_glColorMask": _emscripten_glColorMask,
    "emscripten_glCompileShader": _emscripten_glCompileShader,
    "emscripten_glCompressedTexImage2D": _emscripten_glCompressedTexImage2D,
    "emscripten_glCompressedTexImage3D": _emscripten_glCompressedTexImage3D,
    "emscripten_glCompressedTexSubImage2D": _emscripten_glCompressedTexSubImage2D,
    "emscripten_glCompressedTexSubImage3D": _emscripten_glCompressedTexSubImage3D,
    "emscripten_glCopyBufferSubData": _emscripten_glCopyBufferSubData,
    "emscripten_glCopyTexImage2D": _emscripten_glCopyTexImage2D,
    "emscripten_glCopyTexSubImage2D": _emscripten_glCopyTexSubImage2D,
    "emscripten_glCopyTexSubImage3D": _emscripten_glCopyTexSubImage3D,
    "emscripten_glCreateProgram": _emscripten_glCreateProgram,
    "emscripten_glCreateShader": _emscripten_glCreateShader,
    "emscripten_glCullFace": _emscripten_glCullFace,
    "emscripten_glDeleteBuffers": _emscripten_glDeleteBuffers,
    "emscripten_glDeleteFramebuffers": _emscripten_glDeleteFramebuffers,
    "emscripten_glDeleteProgram": _emscripten_glDeleteProgram,
    "emscripten_glDeleteQueries": _emscripten_glDeleteQueries,
    "emscripten_glDeleteQueriesEXT": _emscripten_glDeleteQueriesEXT,
    "emscripten_glDeleteRenderbuffers": _emscripten_glDeleteRenderbuffers,
    "emscripten_glDeleteSamplers": _emscripten_glDeleteSamplers,
    "emscripten_glDeleteShader": _emscripten_glDeleteShader,
    "emscripten_glDeleteSync": _emscripten_glDeleteSync,
    "emscripten_glDeleteTextures": _emscripten_glDeleteTextures,
    "emscripten_glDeleteTransformFeedbacks": _emscripten_glDeleteTransformFeedbacks,
    "emscripten_glDeleteVertexArrays": _emscripten_glDeleteVertexArrays,
    "emscripten_glDeleteVertexArraysOES": _emscripten_glDeleteVertexArraysOES,
    "emscripten_glDepthFunc": _emscripten_glDepthFunc,
    "emscripten_glDepthMask": _emscripten_glDepthMask,
    "emscripten_glDepthRangef": _emscripten_glDepthRangef,
    "emscripten_glDetachShader": _emscripten_glDetachShader,
    "emscripten_glDisable": _emscripten_glDisable,
    "emscripten_glDisableVertexAttribArray": _emscripten_glDisableVertexAttribArray,
    "emscripten_glDrawArrays": _emscripten_glDrawArrays,
    "emscripten_glDrawArraysInstanced": _emscripten_glDrawArraysInstanced,
    "emscripten_glDrawArraysInstancedANGLE": _emscripten_glDrawArraysInstancedANGLE,
    "emscripten_glDrawArraysInstancedARB": _emscripten_glDrawArraysInstancedARB,
    "emscripten_glDrawArraysInstancedEXT": _emscripten_glDrawArraysInstancedEXT,
    "emscripten_glDrawArraysInstancedNV": _emscripten_glDrawArraysInstancedNV,
    "emscripten_glDrawBuffers": _emscripten_glDrawBuffers,
    "emscripten_glDrawBuffersEXT": _emscripten_glDrawBuffersEXT,
    "emscripten_glDrawBuffersWEBGL": _emscripten_glDrawBuffersWEBGL,
    "emscripten_glDrawElements": _emscripten_glDrawElements,
    "emscripten_glDrawElementsInstanced": _emscripten_glDrawElementsInstanced,
    "emscripten_glDrawElementsInstancedANGLE": _emscripten_glDrawElementsInstancedANGLE,
    "emscripten_glDrawElementsInstancedARB": _emscripten_glDrawElementsInstancedARB,
    "emscripten_glDrawElementsInstancedEXT": _emscripten_glDrawElementsInstancedEXT,
    "emscripten_glDrawElementsInstancedNV": _emscripten_glDrawElementsInstancedNV,
    "emscripten_glDrawRangeElements": _emscripten_glDrawRangeElements,
    "emscripten_glEnable": _emscripten_glEnable,
    "emscripten_glEnableVertexAttribArray": _emscripten_glEnableVertexAttribArray,
    "emscripten_glEndQuery": _emscripten_glEndQuery,
    "emscripten_glEndQueryEXT": _emscripten_glEndQueryEXT,
    "emscripten_glEndTransformFeedback": _emscripten_glEndTransformFeedback,
    "emscripten_glFenceSync": _emscripten_glFenceSync,
    "emscripten_glFinish": _emscripten_glFinish,
    "emscripten_glFlush": _emscripten_glFlush,
    "emscripten_glFramebufferRenderbuffer": _emscripten_glFramebufferRenderbuffer,
    "emscripten_glFramebufferTexture2D": _emscripten_glFramebufferTexture2D,
    "emscripten_glFramebufferTextureLayer": _emscripten_glFramebufferTextureLayer,
    "emscripten_glFrontFace": _emscripten_glFrontFace,
    "emscripten_glGenBuffers": _emscripten_glGenBuffers,
    "emscripten_glGenFramebuffers": _emscripten_glGenFramebuffers,
    "emscripten_glGenQueries": _emscripten_glGenQueries,
    "emscripten_glGenQueriesEXT": _emscripten_glGenQueriesEXT,
    "emscripten_glGenRenderbuffers": _emscripten_glGenRenderbuffers,
    "emscripten_glGenSamplers": _emscripten_glGenSamplers,
    "emscripten_glGenTextures": _emscripten_glGenTextures,
    "emscripten_glGenTransformFeedbacks": _emscripten_glGenTransformFeedbacks,
    "emscripten_glGenVertexArrays": _emscripten_glGenVertexArrays,
    "emscripten_glGenVertexArraysOES": _emscripten_glGenVertexArraysOES,
    "emscripten_glGenerateMipmap": _emscripten_glGenerateMipmap,
    "emscripten_glGetActiveAttrib": _emscripten_glGetActiveAttrib,
    "emscripten_glGetActiveUniform": _emscripten_glGetActiveUniform,
    "emscripten_glGetActiveUniformBlockName": _emscripten_glGetActiveUniformBlockName,
    "emscripten_glGetActiveUniformBlockiv": _emscripten_glGetActiveUniformBlockiv,
    "emscripten_glGetActiveUniformsiv": _emscripten_glGetActiveUniformsiv,
    "emscripten_glGetAttachedShaders": _emscripten_glGetAttachedShaders,
    "emscripten_glGetAttribLocation": _emscripten_glGetAttribLocation,
    "emscripten_glGetBooleanv": _emscripten_glGetBooleanv,
    "emscripten_glGetBufferParameteri64v": _emscripten_glGetBufferParameteri64v,
    "emscripten_glGetBufferParameteriv": _emscripten_glGetBufferParameteriv,
    "emscripten_glGetError": _emscripten_glGetError,
    "emscripten_glGetFloatv": _emscripten_glGetFloatv,
    "emscripten_glGetFragDataLocation": _emscripten_glGetFragDataLocation,
    "emscripten_glGetFramebufferAttachmentParameteriv": _emscripten_glGetFramebufferAttachmentParameteriv,
    "emscripten_glGetInteger64i_v": _emscripten_glGetInteger64i_v,
    "emscripten_glGetInteger64v": _emscripten_glGetInteger64v,
    "emscripten_glGetIntegeri_v": _emscripten_glGetIntegeri_v,
    "emscripten_glGetIntegerv": _emscripten_glGetIntegerv,
    "emscripten_glGetInternalformativ": _emscripten_glGetInternalformativ,
    "emscripten_glGetProgramBinary": _emscripten_glGetProgramBinary,
    "emscripten_glGetProgramInfoLog": _emscripten_glGetProgramInfoLog,
    "emscripten_glGetProgramiv": _emscripten_glGetProgramiv,
    "emscripten_glGetQueryObjecti64vEXT": _emscripten_glGetQueryObjecti64vEXT,
    "emscripten_glGetQueryObjectivEXT": _emscripten_glGetQueryObjectivEXT,
    "emscripten_glGetQueryObjectui64vEXT": _emscripten_glGetQueryObjectui64vEXT,
    "emscripten_glGetQueryObjectuiv": _emscripten_glGetQueryObjectuiv,
    "emscripten_glGetQueryObjectuivEXT": _emscripten_glGetQueryObjectuivEXT,
    "emscripten_glGetQueryiv": _emscripten_glGetQueryiv,
    "emscripten_glGetQueryivEXT": _emscripten_glGetQueryivEXT,
    "emscripten_glGetRenderbufferParameteriv": _emscripten_glGetRenderbufferParameteriv,
    "emscripten_glGetSamplerParameterfv": _emscripten_glGetSamplerParameterfv,
    "emscripten_glGetSamplerParameteriv": _emscripten_glGetSamplerParameteriv,
    "emscripten_glGetShaderInfoLog": _emscripten_glGetShaderInfoLog,
    "emscripten_glGetShaderPrecisionFormat": _emscripten_glGetShaderPrecisionFormat,
    "emscripten_glGetShaderSource": _emscripten_glGetShaderSource,
    "emscripten_glGetShaderiv": _emscripten_glGetShaderiv,
    "emscripten_glGetString": _emscripten_glGetString,
    "emscripten_glGetStringi": _emscripten_glGetStringi,
    "emscripten_glGetSynciv": _emscripten_glGetSynciv,
    "emscripten_glGetTexParameterfv": _emscripten_glGetTexParameterfv,
    "emscripten_glGetTexParameteriv": _emscripten_glGetTexParameteriv,
    "emscripten_glGetTransformFeedbackVarying": _emscripten_glGetTransformFeedbackVarying,
    "emscripten_glGetUniformBlockIndex": _emscripten_glGetUniformBlockIndex,
    "emscripten_glGetUniformIndices": _emscripten_glGetUniformIndices,
    "emscripten_glGetUniformLocation": _emscripten_glGetUniformLocation,
    "emscripten_glGetUniformfv": _emscripten_glGetUniformfv,
    "emscripten_glGetUniformiv": _emscripten_glGetUniformiv,
    "emscripten_glGetUniformuiv": _emscripten_glGetUniformuiv,
    "emscripten_glGetVertexAttribIiv": _emscripten_glGetVertexAttribIiv,
    "emscripten_glGetVertexAttribIuiv": _emscripten_glGetVertexAttribIuiv,
    "emscripten_glGetVertexAttribPointerv": _emscripten_glGetVertexAttribPointerv,
    "emscripten_glGetVertexAttribfv": _emscripten_glGetVertexAttribfv,
    "emscripten_glGetVertexAttribiv": _emscripten_glGetVertexAttribiv,
    "emscripten_glHint": _emscripten_glHint,
    "emscripten_glInvalidateFramebuffer": _emscripten_glInvalidateFramebuffer,
    "emscripten_glInvalidateSubFramebuffer": _emscripten_glInvalidateSubFramebuffer,
    "emscripten_glIsBuffer": _emscripten_glIsBuffer,
    "emscripten_glIsEnabled": _emscripten_glIsEnabled,
    "emscripten_glIsFramebuffer": _emscripten_glIsFramebuffer,
    "emscripten_glIsProgram": _emscripten_glIsProgram,
    "emscripten_glIsQuery": _emscripten_glIsQuery,
    "emscripten_glIsQueryEXT": _emscripten_glIsQueryEXT,
    "emscripten_glIsRenderbuffer": _emscripten_glIsRenderbuffer,
    "emscripten_glIsSampler": _emscripten_glIsSampler,
    "emscripten_glIsShader": _emscripten_glIsShader,
    "emscripten_glIsSync": _emscripten_glIsSync,
    "emscripten_glIsTexture": _emscripten_glIsTexture,
    "emscripten_glIsTransformFeedback": _emscripten_glIsTransformFeedback,
    "emscripten_glIsVertexArray": _emscripten_glIsVertexArray,
    "emscripten_glIsVertexArrayOES": _emscripten_glIsVertexArrayOES,
    "emscripten_glLineWidth": _emscripten_glLineWidth,
    "emscripten_glLinkProgram": _emscripten_glLinkProgram,
    "emscripten_glPauseTransformFeedback": _emscripten_glPauseTransformFeedback,
    "emscripten_glPixelStorei": _emscripten_glPixelStorei,
    "emscripten_glPolygonOffset": _emscripten_glPolygonOffset,
    "emscripten_glProgramBinary": _emscripten_glProgramBinary,
    "emscripten_glProgramParameteri": _emscripten_glProgramParameteri,
    "emscripten_glQueryCounterEXT": _emscripten_glQueryCounterEXT,
    "emscripten_glReadBuffer": _emscripten_glReadBuffer,
    "emscripten_glReadPixels": _emscripten_glReadPixels,
    "emscripten_glReleaseShaderCompiler": _emscripten_glReleaseShaderCompiler,
    "emscripten_glRenderbufferStorage": _emscripten_glRenderbufferStorage,
    "emscripten_glRenderbufferStorageMultisample": _emscripten_glRenderbufferStorageMultisample,
    "emscripten_glResumeTransformFeedback": _emscripten_glResumeTransformFeedback,
    "emscripten_glSampleCoverage": _emscripten_glSampleCoverage,
    "emscripten_glSamplerParameterf": _emscripten_glSamplerParameterf,
    "emscripten_glSamplerParameterfv": _emscripten_glSamplerParameterfv,
    "emscripten_glSamplerParameteri": _emscripten_glSamplerParameteri,
    "emscripten_glSamplerParameteriv": _emscripten_glSamplerParameteriv,
    "emscripten_glScissor": _emscripten_glScissor,
    "emscripten_glShaderBinary": _emscripten_glShaderBinary,
    "emscripten_glShaderSource": _emscripten_glShaderSource,
    "emscripten_glStencilFunc": _emscripten_glStencilFunc,
    "emscripten_glStencilFuncSeparate": _emscripten_glStencilFuncSeparate,
    "emscripten_glStencilMask": _emscripten_glStencilMask,
    "emscripten_glStencilMaskSeparate": _emscripten_glStencilMaskSeparate,
    "emscripten_glStencilOp": _emscripten_glStencilOp,
    "emscripten_glStencilOpSeparate": _emscripten_glStencilOpSeparate,
    "emscripten_glTexImage2D": _emscripten_glTexImage2D,
    "emscripten_glTexImage3D": _emscripten_glTexImage3D,
    "emscripten_glTexParameterf": _emscripten_glTexParameterf,
    "emscripten_glTexParameterfv": _emscripten_glTexParameterfv,
    "emscripten_glTexParameteri": _emscripten_glTexParameteri,
    "emscripten_glTexParameteriv": _emscripten_glTexParameteriv,
    "emscripten_glTexStorage2D": _emscripten_glTexStorage2D,
    "emscripten_glTexStorage3D": _emscripten_glTexStorage3D,
    "emscripten_glTexSubImage2D": _emscripten_glTexSubImage2D,
    "emscripten_glTexSubImage3D": _emscripten_glTexSubImage3D,
    "emscripten_glTransformFeedbackVaryings": _emscripten_glTransformFeedbackVaryings,
    "emscripten_glUniform1f": _emscripten_glUniform1f,
    "emscripten_glUniform1fv": _emscripten_glUniform1fv,
    "emscripten_glUniform1i": _emscripten_glUniform1i,
    "emscripten_glUniform1iv": _emscripten_glUniform1iv,
    "emscripten_glUniform1ui": _emscripten_glUniform1ui,
    "emscripten_glUniform1uiv": _emscripten_glUniform1uiv,
    "emscripten_glUniform2f": _emscripten_glUniform2f,
    "emscripten_glUniform2fv": _emscripten_glUniform2fv,
    "emscripten_glUniform2i": _emscripten_glUniform2i,
    "emscripten_glUniform2iv": _emscripten_glUniform2iv,
    "emscripten_glUniform2ui": _emscripten_glUniform2ui,
    "emscripten_glUniform2uiv": _emscripten_glUniform2uiv,
    "emscripten_glUniform3f": _emscripten_glUniform3f,
    "emscripten_glUniform3fv": _emscripten_glUniform3fv,
    "emscripten_glUniform3i": _emscripten_glUniform3i,
    "emscripten_glUniform3iv": _emscripten_glUniform3iv,
    "emscripten_glUniform3ui": _emscripten_glUniform3ui,
    "emscripten_glUniform3uiv": _emscripten_glUniform3uiv,
    "emscripten_glUniform4f": _emscripten_glUniform4f,
    "emscripten_glUniform4fv": _emscripten_glUniform4fv,
    "emscripten_glUniform4i": _emscripten_glUniform4i,
    "emscripten_glUniform4iv": _emscripten_glUniform4iv,
    "emscripten_glUniform4ui": _emscripten_glUniform4ui,
    "emscripten_glUniform4uiv": _emscripten_glUniform4uiv,
    "emscripten_glUniformBlockBinding": _emscripten_glUniformBlockBinding,
    "emscripten_glUniformMatrix2fv": _emscripten_glUniformMatrix2fv,
    "emscripten_glUniformMatrix2x3fv": _emscripten_glUniformMatrix2x3fv,
    "emscripten_glUniformMatrix2x4fv": _emscripten_glUniformMatrix2x4fv,
    "emscripten_glUniformMatrix3fv": _emscripten_glUniformMatrix3fv,
    "emscripten_glUniformMatrix3x2fv": _emscripten_glUniformMatrix3x2fv,
    "emscripten_glUniformMatrix3x4fv": _emscripten_glUniformMatrix3x4fv,
    "emscripten_glUniformMatrix4fv": _emscripten_glUniformMatrix4fv,
    "emscripten_glUniformMatrix4x2fv": _emscripten_glUniformMatrix4x2fv,
    "emscripten_glUniformMatrix4x3fv": _emscripten_glUniformMatrix4x3fv,
    "emscripten_glUseProgram": _emscripten_glUseProgram,
    "emscripten_glValidateProgram": _emscripten_glValidateProgram,
    "emscripten_glVertexAttrib1f": _emscripten_glVertexAttrib1f,
    "emscripten_glVertexAttrib1fv": _emscripten_glVertexAttrib1fv,
    "emscripten_glVertexAttrib2f": _emscripten_glVertexAttrib2f,
    "emscripten_glVertexAttrib2fv": _emscripten_glVertexAttrib2fv,
    "emscripten_glVertexAttrib3f": _emscripten_glVertexAttrib3f,
    "emscripten_glVertexAttrib3fv": _emscripten_glVertexAttrib3fv,
    "emscripten_glVertexAttrib4f": _emscripten_glVertexAttrib4f,
    "emscripten_glVertexAttrib4fv": _emscripten_glVertexAttrib4fv,
    "emscripten_glVertexAttribDivisor": _emscripten_glVertexAttribDivisor,
    "emscripten_glVertexAttribDivisorANGLE": _emscripten_glVertexAttribDivisorANGLE,
    "emscripten_glVertexAttribDivisorARB": _emscripten_glVertexAttribDivisorARB,
    "emscripten_glVertexAttribDivisorEXT": _emscripten_glVertexAttribDivisorEXT,
    "emscripten_glVertexAttribDivisorNV": _emscripten_glVertexAttribDivisorNV,
    "emscripten_glVertexAttribI4i": _emscripten_glVertexAttribI4i,
    "emscripten_glVertexAttribI4iv": _emscripten_glVertexAttribI4iv,
    "emscripten_glVertexAttribI4ui": _emscripten_glVertexAttribI4ui,
    "emscripten_glVertexAttribI4uiv": _emscripten_glVertexAttribI4uiv,
    "emscripten_glVertexAttribIPointer": _emscripten_glVertexAttribIPointer,
    "emscripten_glVertexAttribPointer": _emscripten_glVertexAttribPointer,
    "emscripten_glViewport": _emscripten_glViewport,
    "emscripten_glWaitSync": _emscripten_glWaitSync,
    "emscripten_memcpy_big": _emscripten_memcpy_big,
    "emscripten_resize_heap": _emscripten_resize_heap,
    "emscripten_set_main_loop": _emscripten_set_main_loop,
    "emscripten_webgl_commit_frame": _emscripten_webgl_commit_frame,
    "emscripten_webgl_create_context": _emscripten_webgl_create_context,
    "emscripten_webgl_destroy_context": _emscripten_webgl_destroy_context,
    "emscripten_webgl_init_context_attributes": _emscripten_webgl_init_context_attributes,
    "emscripten_webgl_make_context_current": _emscripten_webgl_make_context_current,
    "environ_get": _environ_get,
    "environ_sizes_get": _environ_sizes_get,
    "fd_close": _fd_close,
    "fd_fdstat_get": _fd_fdstat_get,
    "fd_read": _fd_read,
    "fd_seek": _fd_seek,
    "fd_write": _fd_write,
    "getTempRet0": _getTempRet0,
    "getaddrinfo": _getaddrinfo,
    "getentropy": _getentropy,
    "glActiveTexture": _glActiveTexture,
    "glAttachShader": _glAttachShader,
    "glBeginTransformFeedback": _glBeginTransformFeedback,
    "glBindAttribLocation": _glBindAttribLocation,
    "glBindBuffer": _glBindBuffer,
    "glBindBufferBase": _glBindBufferBase,
    "glBindFramebuffer": _glBindFramebuffer,
    "glBindRenderbuffer": _glBindRenderbuffer,
    "glBindTexture": _glBindTexture,
    "glBindVertexArray": _glBindVertexArray,
    "glBlendEquation": _glBlendEquation,
    "glBlendFunc": _glBlendFunc,
    "glBlendFuncSeparate": _glBlendFuncSeparate,
    "glBlitFramebuffer": _glBlitFramebuffer,
    "glBufferData": _glBufferData,
    "glBufferSubData": _glBufferSubData,
    "glCheckFramebufferStatus": _glCheckFramebufferStatus,
    "glClear": _glClear,
    "glClearBufferfv": _glClearBufferfv,
    "glClearColor": _glClearColor,
    "glClearDepthf": _glClearDepthf,
    "glColorMask": _glColorMask,
    "glCompileShader": _glCompileShader,
    "glCompressedTexImage2D": _glCompressedTexImage2D,
    "glCompressedTexSubImage2D": _glCompressedTexSubImage2D,
    "glCompressedTexSubImage3D": _glCompressedTexSubImage3D,
    "glCopyBufferSubData": _glCopyBufferSubData,
    "glCopyTexSubImage2D": _glCopyTexSubImage2D,
    "glCreateProgram": _glCreateProgram,
    "glCreateShader": _glCreateShader,
    "glCullFace": _glCullFace,
    "glDeleteBuffers": _glDeleteBuffers,
    "glDeleteFramebuffers": _glDeleteFramebuffers,
    "glDeleteProgram": _glDeleteProgram,
    "glDeleteRenderbuffers": _glDeleteRenderbuffers,
    "glDeleteShader": _glDeleteShader,
    "glDeleteTextures": _glDeleteTextures,
    "glDeleteVertexArrays": _glDeleteVertexArrays,
    "glDepthFunc": _glDepthFunc,
    "glDepthMask": _glDepthMask,
    "glDisable": _glDisable,
    "glDisableVertexAttribArray": _glDisableVertexAttribArray,
    "glDrawArrays": _glDrawArrays,
    "glDrawArraysInstanced": _glDrawArraysInstanced,
    "glDrawBuffers": _glDrawBuffers,
    "glDrawElements": _glDrawElements,
    "glDrawElementsInstanced": _glDrawElementsInstanced,
    "glEnable": _glEnable,
    "glEnableVertexAttribArray": _glEnableVertexAttribArray,
    "glEndTransformFeedback": _glEndTransformFeedback,
    "glFinish": _glFinish,
    "glFramebufferRenderbuffer": _glFramebufferRenderbuffer,
    "glFramebufferTexture2D": _glFramebufferTexture2D,
    "glFramebufferTextureLayer": _glFramebufferTextureLayer,
    "glFrontFace": _glFrontFace,
    "glGenBuffers": _glGenBuffers,
    "glGenFramebuffers": _glGenFramebuffers,
    "glGenRenderbuffers": _glGenRenderbuffers,
    "glGenTextures": _glGenTextures,
    "glGenVertexArrays": _glGenVertexArrays,
    "glGenerateMipmap": _glGenerateMipmap,
    "glGetError": _glGetError,
    "glGetFloatv": _glGetFloatv,
    "glGetIntegerv": _glGetIntegerv,
    "glGetProgramBinary": _glGetProgramBinary,
    "glGetProgramInfoLog": _glGetProgramInfoLog,
    "glGetProgramiv": _glGetProgramiv,
    "glGetShaderInfoLog": _glGetShaderInfoLog,
    "glGetShaderSource": _glGetShaderSource,
    "glGetShaderiv": _glGetShaderiv,
    "glGetString": _glGetString,
    "glGetStringi": _glGetStringi,
    "glGetUniformBlockIndex": _glGetUniformBlockIndex,
    "glGetUniformLocation": _glGetUniformLocation,
    "glInvalidateFramebuffer": _glInvalidateFramebuffer,
    "glLinkProgram": _glLinkProgram,
    "glPixelStorei": _glPixelStorei,
    "glProgramBinary": _glProgramBinary,
    "glProgramParameteri": _glProgramParameteri,
    "glReadBuffer": _glReadBuffer,
    "glReadPixels": _glReadPixels,
    "glRenderbufferStorage": _glRenderbufferStorage,
    "glRenderbufferStorageMultisample": _glRenderbufferStorageMultisample,
    "glScissor": _glScissor,
    "glShaderSource": _glShaderSource,
    "glTexImage2D": _glTexImage2D,
    "glTexImage3D": _glTexImage3D,
    "glTexParameterf": _glTexParameterf,
    "glTexParameteri": _glTexParameteri,
    "glTexStorage2D": _glTexStorage2D,
    "glTexSubImage2D": _glTexSubImage2D,
    "glTexSubImage3D": _glTexSubImage3D,
    "glTransformFeedbackVaryings": _glTransformFeedbackVaryings,
    "glUniform1f": _glUniform1f,
    "glUniform1i": _glUniform1i,
    "glUniform1iv": _glUniform1iv,
    "glUniform1ui": _glUniform1ui,
    "glUniform2f": _glUniform2f,
    "glUniform2fv": _glUniform2fv,
    "glUniform2i": _glUniform2i,
    "glUniform2iv": _glUniform2iv,
    "glUniform3f": _glUniform3f,
    "glUniform3fv": _glUniform3fv,
    "glUniform3i": _glUniform3i,
    "glUniform4f": _glUniform4f,
    "glUniform4fv": _glUniform4fv,
    "glUniform4i": _glUniform4i,
    "glUniformBlockBinding": _glUniformBlockBinding,
    "glUniformMatrix2fv": _glUniformMatrix2fv,
    "glUniformMatrix3fv": _glUniformMatrix3fv,
    "glUniformMatrix4fv": _glUniformMatrix4fv,
    "glUseProgram": _glUseProgram,
    "glVertexAttrib4f": _glVertexAttrib4f,
    "glVertexAttrib4fv": _glVertexAttrib4fv,
    "glVertexAttribDivisor": _glVertexAttribDivisor,
    "glVertexAttribI4ui": _glVertexAttribI4ui,
    "glVertexAttribIPointer": _glVertexAttribIPointer,
    "glVertexAttribPointer": _glVertexAttribPointer,
    "glViewport": _glViewport,
    "godot_audio_capture_start": _godot_audio_capture_start,
    "godot_audio_capture_stop": _godot_audio_capture_stop,
    "godot_audio_has_script_processor": _godot_audio_has_script_processor,
    "godot_audio_has_worklet": _godot_audio_has_worklet,
    "godot_audio_init": _godot_audio_init,
    "godot_audio_is_available": _godot_audio_is_available,
    "godot_audio_resume": _godot_audio_resume,
    "godot_audio_script_create": _godot_audio_script_create,
    "godot_audio_script_start": _godot_audio_script_start,
    "godot_audio_worklet_create": _godot_audio_worklet_create,
    "godot_audio_worklet_start_no_threads": _godot_audio_worklet_start_no_threads,
    "godot_js_config_canvas_id_get": _godot_js_config_canvas_id_get,
    "godot_js_config_locale_get": _godot_js_config_locale_get,
    "godot_js_display_alert": _godot_js_display_alert,
    "godot_js_display_canvas_focus": _godot_js_display_canvas_focus,
    "godot_js_display_canvas_is_focused": _godot_js_display_canvas_is_focused,
    "godot_js_display_clipboard_get": _godot_js_display_clipboard_get,
    "godot_js_display_clipboard_set": _godot_js_display_clipboard_set,
    "godot_js_display_cursor_is_hidden": _godot_js_display_cursor_is_hidden,
    "godot_js_display_cursor_is_locked": _godot_js_display_cursor_is_locked,
    "godot_js_display_cursor_lock_set": _godot_js_display_cursor_lock_set,
    "godot_js_display_cursor_set_custom_shape": _godot_js_display_cursor_set_custom_shape,
    "godot_js_display_cursor_set_shape": _godot_js_display_cursor_set_shape,
    "godot_js_display_cursor_set_visible": _godot_js_display_cursor_set_visible,
    "godot_js_display_desired_size_set": _godot_js_display_desired_size_set,
    "godot_js_display_fullscreen_cb": _godot_js_display_fullscreen_cb,
    "godot_js_display_fullscreen_exit": _godot_js_display_fullscreen_exit,
    "godot_js_display_fullscreen_request": _godot_js_display_fullscreen_request,
    "godot_js_display_glGetBufferSubData": _godot_js_display_glGetBufferSubData,
    "godot_js_display_has_webgl": _godot_js_display_has_webgl,
    "godot_js_display_is_swap_ok_cancel": _godot_js_display_is_swap_ok_cancel,
    "godot_js_display_notification_cb": _godot_js_display_notification_cb,
    "godot_js_display_pixel_ratio_get": _godot_js_display_pixel_ratio_get,
    "godot_js_display_screen_dpi_get": _godot_js_display_screen_dpi_get,
    "godot_js_display_screen_size_get": _godot_js_display_screen_size_get,
    "godot_js_display_setup_canvas": _godot_js_display_setup_canvas,
    "godot_js_display_size_update": _godot_js_display_size_update,
    "godot_js_display_touchscreen_is_available": _godot_js_display_touchscreen_is_available,
    "godot_js_display_vk_available": _godot_js_display_vk_available,
    "godot_js_display_vk_cb": _godot_js_display_vk_cb,
    "godot_js_display_vk_hide": _godot_js_display_vk_hide,
    "godot_js_display_vk_show": _godot_js_display_vk_show,
    "godot_js_display_window_blur_cb": _godot_js_display_window_blur_cb,
    "godot_js_display_window_icon_set": _godot_js_display_window_icon_set,
    "godot_js_display_window_size_get": _godot_js_display_window_size_get,
    "godot_js_display_window_title_set": _godot_js_display_window_title_set,
    "godot_js_eval": _godot_js_eval,
    "godot_js_fetch_body_length_get": _godot_js_fetch_body_length_get,
    "godot_js_fetch_create": _godot_js_fetch_create,
    "godot_js_fetch_free": _godot_js_fetch_free,
    "godot_js_fetch_http_status_get": _godot_js_fetch_http_status_get,
    "godot_js_fetch_is_chunked": _godot_js_fetch_is_chunked,
    "godot_js_fetch_read_chunk": _godot_js_fetch_read_chunk,
    "godot_js_fetch_read_headers": _godot_js_fetch_read_headers,
    "godot_js_fetch_state_get": _godot_js_fetch_state_get,
    "godot_js_input_drop_files_cb": _godot_js_input_drop_files_cb,
    "godot_js_input_gamepad_cb": _godot_js_input_gamepad_cb,
    "godot_js_input_gamepad_sample": _godot_js_input_gamepad_sample,
    "godot_js_input_gamepad_sample_count": _godot_js_input_gamepad_sample_count,
    "godot_js_input_gamepad_sample_get": _godot_js_input_gamepad_sample_get,
    "godot_js_input_key_cb": _godot_js_input_key_cb,
    "godot_js_input_mouse_button_cb": _godot_js_input_mouse_button_cb,
    "godot_js_input_mouse_move_cb": _godot_js_input_mouse_move_cb,
    "godot_js_input_mouse_wheel_cb": _godot_js_input_mouse_wheel_cb,
    "godot_js_input_paste_cb": _godot_js_input_paste_cb,
    "godot_js_input_touch_cb": _godot_js_input_touch_cb,
    "godot_js_input_vibrate_handheld": _godot_js_input_vibrate_handheld,
    "godot_js_os_download_buffer": _godot_js_os_download_buffer,
    "godot_js_os_execute": _godot_js_os_execute,
    "godot_js_os_finish_async": _godot_js_os_finish_async,
    "godot_js_os_fs_is_persistent": _godot_js_os_fs_is_persistent,
    "godot_js_os_fs_sync": _godot_js_os_fs_sync,
    "godot_js_os_hw_concurrency_get": _godot_js_os_hw_concurrency_get,
    "godot_js_os_request_quit_cb": _godot_js_os_request_quit_cb,
    "godot_js_os_shell_open": _godot_js_os_shell_open,
    "godot_js_pwa_cb": _godot_js_pwa_cb,
    "godot_js_pwa_update": _godot_js_pwa_update,
    "godot_js_set_canvas_scale": _godot_js_set_canvas_scale,
    "godot_js_websocket_buffered_amount": _godot_js_websocket_buffered_amount,
    "godot_js_websocket_close": _godot_js_websocket_close,
    "godot_js_websocket_create": _godot_js_websocket_create,
    "godot_js_websocket_destroy": _godot_js_websocket_destroy,
    "godot_js_websocket_send": _godot_js_websocket_send,
    "godot_js_wrapper_create_cb": _godot_js_wrapper_create_cb,
    "godot_js_wrapper_create_object": _godot_js_wrapper_create_object,
    "godot_js_wrapper_interface_get": _godot_js_wrapper_interface_get,
    "godot_js_wrapper_object_call": _godot_js_wrapper_object_call,
    "godot_js_wrapper_object_get": _godot_js_wrapper_object_get,
    "godot_js_wrapper_object_getvar": _godot_js_wrapper_object_getvar,
    "godot_js_wrapper_object_set": _godot_js_wrapper_object_set,
    "godot_js_wrapper_object_setvar": _godot_js_wrapper_object_setvar,
    "godot_js_wrapper_object_unref": _godot_js_wrapper_object_unref,
    "invoke_ii": invoke_ii,
    "invoke_iii": invoke_iii,
    "invoke_iiii": invoke_iiii,
    "invoke_iiiii": invoke_iiiii,
    "invoke_iiiiiii": invoke_iiiiiii,
    "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
    "invoke_v": invoke_v,
    "invoke_vi": invoke_vi,
    "invoke_vii": invoke_vii,
    "invoke_viii": invoke_viii,
    "invoke_viiii": invoke_viiii,
    "setTempRet0": _setTempRet0,
    "strftime": _strftime,
    "strftime_l": _strftime_l
  };
  var asm = createWasm();
  /** @type {function(...*):?} */
  var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
    return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _free = Module["_free"] = function() {
    return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var __Z13godot_js_mainiPPc = Module["__Z13godot_js_mainiPPc"] = function() {
    return (__Z13godot_js_mainiPPc = Module["__Z13godot_js_mainiPPc"] = Module["asm"]["_Z13godot_js_mainiPPc"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _main = Module["_main"] = function() {
    return (_main = Module["_main"] = Module["asm"]["__main_argc_argv"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _malloc = Module["_malloc"] = function() {
    return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _htonl = Module["_htonl"] = function() {
    return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _htons = Module["_htons"] = function() {
    return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _ntohs = Module["_ntohs"] = function() {
    return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _fflush = Module["_fflush"] = function() {
    return (_fflush = Module["_fflush"] = Module["asm"]["fflush"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var ___errno_location = Module["___errno_location"] = function() {
    return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _saveSetjmp = Module["_saveSetjmp"] = function() {
    return (_saveSetjmp = Module["_saveSetjmp"] = Module["asm"]["saveSetjmp"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var ___funcs_on_exit = Module["___funcs_on_exit"] = function() {
    return (___funcs_on_exit = Module["___funcs_on_exit"] = Module["asm"]["__funcs_on_exit"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var ___dl_seterr = Module["___dl_seterr"] = function() {
    return (___dl_seterr = Module["___dl_seterr"] = Module["asm"]["__dl_seterr"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _raise = Module["_raise"] = function() {
    return (_raise = Module["_raise"] = Module["asm"]["raise"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var _setThrew = Module["_setThrew"] = function() {
    return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var stackSave = Module["stackSave"] = function() {
    return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var stackRestore = Module["stackRestore"] = function() {
    return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var stackAlloc = Module["stackAlloc"] = function() {
    return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_ji = Module["dynCall_ji"] = function() {
    return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_vij = Module["dynCall_vij"] = function() {
    return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["dynCall_vij"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_jii = Module["dynCall_jii"] = function() {
    return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["dynCall_jii"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_jiiii = Module["dynCall_jiiii"] = function() {
    return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["dynCall_jiiii"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_jiji = Module["dynCall_jiji"] = function() {
    return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_jiij = Module["dynCall_jiij"] = function() {
    return (dynCall_jiij = Module["dynCall_jiij"] = Module["asm"]["dynCall_jiij"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_viij = Module["dynCall_viij"] = function() {
    return (dynCall_viij = Module["dynCall_viij"] = Module["asm"]["dynCall_viij"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iiiifj = Module["dynCall_iiiifj"] = function() {
    return (dynCall_iiiifj = Module["dynCall_iiiifj"] = Module["asm"]["dynCall_iiiifj"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_viiijiiiii = Module["dynCall_viiijiiiii"] = function() {
    return (dynCall_viiijiiiii = Module["dynCall_viiijiiiii"] = Module["asm"]["dynCall_viiijiiiii"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iiijiiiiiii = Module["dynCall_iiijiiiiiii"] = function() {
    return (dynCall_iiijiiiiiii = Module["dynCall_iiijiiiiiii"] = Module["asm"]["dynCall_iiijiiiiiii"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_viiiji = Module["dynCall_viiiji"] = function() {
    return (dynCall_viiiji = Module["dynCall_viiiji"] = Module["asm"]["dynCall_viiiji"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_viiji = Module["dynCall_viiji"] = function() {
    return (dynCall_viiji = Module["dynCall_viiji"] = Module["asm"]["dynCall_viiji"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_viijiii = Module["dynCall_viijiii"] = function() {
    return (dynCall_viijiii = Module["dynCall_viijiii"] = Module["asm"]["dynCall_viijiii"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
    return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["dynCall_iiiij"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iij = Module["dynCall_iij"] = function() {
    return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["dynCall_iij"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_viijii = Module["dynCall_viijii"] = function() {
    return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
    return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["dynCall_iiiiij"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
    return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["dynCall_iiiiijj"]).apply(null, arguments);
  };
  
  /** @type {function(...*):?} */
  var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = function() {
    return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["dynCall_iiiiiijj"]).apply(null, arguments);
  };
  
  
  function invoke_vii(index,a1,a2) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)(a1,a2);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_ii(index,a1) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_viiii(index,a1,a2,a3,a4) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)(a1,a2,a3,a4);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_iii(index,a1,a2) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1,a2);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_vi(index,a1) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)(a1);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_iiii(index,a1,a2,a3) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1,a2,a3);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_v(index) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)();
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_iiiii(index,a1,a2,a3,a4) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1,a2,a3,a4);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_viii(index,a1,a2,a3) {
    var sp = stackSave();
    try {
      getWasmTableEntry(index)(a1,a2,a3);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
    var sp = stackSave();
    try {
      return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
    } catch(e) {
      stackRestore(sp);
      if (e !== e+0) throw e;
      _setThrew(1, 0);
    }
  }
  
  
  
  
  // === Auto-generated postamble setup entry stuff ===
  
  Module["callMain"] = callMain;
  Module["cwrap"] = cwrap;
  
  
  var calledRun;
  
  dependenciesFulfilled = function runCaller() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
  };
  
  function callMain(args) {
  
    var entryFunction = Module['_main'];
  
    args = args || [];
    args.unshift(thisProgram);
  
    var argc = args.length;
    var argv = stackAlloc((argc + 1) * 4);
    var argv_ptr = argv >> 2;
    args.forEach((arg) => {
      HEAP32[argv_ptr++] = allocateUTF8OnStack(arg);
    });
    HEAP32[argv_ptr] = 0;
  
    try {
  
      var ret = entryFunction(argc, argv);
  
      // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as
      // execution is asynchronously handed off to a pthread.
      // if we're not running an evented main loop, it's time to exit
      exitJS(ret, /* implicit = */ true);
      return ret;
    }
    catch (e) {
      return handleException(e);
    }
  }
  
  /** @type {function(Array=)} */
  function run(args) {
    args = args || arguments_;
  
    if (runDependencies > 0) {
      return;
    }
  
    preRun();
  
    // a preRun added a dependency, run will be called later
    if (runDependencies > 0) {
      return;
    }
  
    function doRun() {
      // run may have just been called through dependencies being fulfilled just in this very frame,
      // or while the async setStatus time below was happening
      if (calledRun) return;
      calledRun = true;
      Module['calledRun'] = true;
  
      if (ABORT) return;
  
      initRuntime();
  
      preMain();
  
      readyPromiseResolve(Module);
      if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();
  
      if (shouldRunNow) callMain(args);
  
      postRun();
    }
  
    if (Module['setStatus']) {
      Module['setStatus']('Running...');
      setTimeout(function() {
        setTimeout(function() {
          Module['setStatus']('');
        }, 1);
        doRun();
      }, 1);
    } else
    {
      doRun();
    }
  }
  
  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].pop()();
    }
  }
  
  // shouldRunNow refers to calling main(), not run().
  var shouldRunNow = false;
  
  if (Module['noInitialRun']) shouldRunNow = false;
  
  run();
  
  
  
  
  
  
  
    return Godot.ready
  }
  );
  })();
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = Godot;
  else if (typeof define === 'function' && define['amd'])
    define([], function() { return Godot; });
  else if (typeof exports === 'object')
    exports["Godot"] = Godot;
  
  const Preloader = /** @constructor */ function () { // eslint-disable-line no-unused-vars
      function getTrackedResponse(response, load_status) {
          function onloadprogress(reader, controller) {
              return reader.read().then(function (result) {
                  if (load_status.done) {
                      return Promise.resolve();
                  }
                  if (result.value) {
                      controller.enqueue(result.value);
                      load_status.loaded += result.value.length;
                  }
                  if (!result.done) {
                      return onloadprogress(reader, controller);
                  }
                  load_status.done = true;
                  return Promise.resolve();
              });
          }
          const reader = response.body.getReader();
          return new Response(new ReadableStream({
              start: function (controller) {
                  onloadprogress(reader, controller).then(function () {
                      controller.close();
                  });
              },
          }), { headers: response.headers });
      }
  
      function loadFetch(file, tracker, fileSize, raw) {
          tracker[file] = {
              total: fileSize || 0,
              loaded: 0,
              done: false,
          };
          return fetch(file).then(function (response) {
              if (!response.ok) {
                  return Promise.reject(new Error(`Failed loading file '${file}'`));
              }
              const tr = getTrackedResponse(response, tracker[file]);
              if (raw) {
                  return Promise.resolve(tr);
              }
              return tr.arrayBuffer();
          });
      }
  
      function retry(func, attempts = 1) {
          function onerror(err) {
              if (attempts <= 1) {
                  return Promise.reject(err);
              }
              return new Promise(function (resolve, reject) {
                  setTimeout(function () {
                      retry(func, attempts - 1).then(resolve).catch(reject);
                  }, 1000);
              });
          }
          return func().catch(onerror);
      }
  
      const DOWNLOAD_ATTEMPTS_MAX = 4;
      const loadingFiles = {};
      const lastProgress = { loaded: 0, total: 0 };
      let progressFunc = null;
  
      const animateProgress = function () {
          let loaded = 0;
          let total = 0;
          let totalIsValid = true;
          let progressIsFinal = true;
  
          Object.keys(loadingFiles).forEach(function (file) {
              const stat = loadingFiles[file];
              if (!stat.done) {
                  progressIsFinal = false;
              }
              if (!totalIsValid || stat.total === 0) {
                  totalIsValid = false;
                  total = 0;
              } else {
                  total += stat.total;
              }
              loaded += stat.loaded;
          });
          if (loaded !== lastProgress.loaded || total !== lastProgress.total) {
              lastProgress.loaded = loaded;
              lastProgress.total = total;
              if (typeof progressFunc === 'function') {
                  progressFunc(loaded, total);
              }
          }
          if (!progressIsFinal) {
              requestAnimationFrame(animateProgress);
          }
      };
  
      this.animateProgress = animateProgress;
  
      this.setProgressFunc = function (callback) {
          progressFunc = callback;
      };
  
      this.loadPromise = function (file, fileSize, raw = false) {
          return retry(loadFetch.bind(null, file, loadingFiles, fileSize, raw), DOWNLOAD_ATTEMPTS_MAX);
      };
  
      this.preloadedFiles = [];
      this.preload = function (pathOrBuffer, destPath, fileSize) {
          let buffer = null;
          if (typeof pathOrBuffer === 'string') {
              const me = this;
              return this.loadPromise(pathOrBuffer, fileSize).then(function (buf) {
                  me.preloadedFiles.push({
                      path: destPath || pathOrBuffer,
                      buffer: buf,
                  });
                  return Promise.resolve();
              });
          } else if (pathOrBuffer instanceof ArrayBuffer) {
              buffer = new Uint8Array(pathOrBuffer);
          } else if (ArrayBuffer.isView(pathOrBuffer)) {
              buffer = new Uint8Array(pathOrBuffer.buffer);
          }
          if (buffer) {
              this.preloadedFiles.push({
                  path: destPath,
                  buffer: pathOrBuffer,
              });
              return Promise.resolve();
          }
          return Promise.reject(new Error('Invalid object for preloading'));
      };
  };
  
  /**
   * An object used to configure the Engine instance based on godot export options, and to override those in custom HTML
   * templates if needed.
   *
   * @header Engine configuration
   * @summary The Engine configuration object. This is just a typedef, create it like a regular object, e.g.:
   *
   * ``const MyConfig = { executable: 'godot', unloadAfterInit: false }``
   *
   * @typedef {Object} EngineConfig
   */
  const EngineConfig = {}; // eslint-disable-line no-unused-vars
  
  /**
   * @struct
   * @constructor
   * @ignore
   */
  const InternalConfig = function (initConfig) { // eslint-disable-line no-unused-vars
      const cfg = /** @lends {InternalConfig.prototype} */ {
          /**
           * Whether the unload the engine automatically after the instance is initialized.
           *
           * @memberof EngineConfig
           * @default
           * @type {boolean}
           */
          unloadAfterInit: true,
          /**
           * The HTML DOM Canvas object to use.
           *
           * By default, the first canvas element in the document will be used is none is specified.
           *
           * @memberof EngineConfig
           * @default
           * @type {?HTMLCanvasElement}
           */
          canvas: null,
          /**
           * The name of the WASM file without the extension. (Set by Godot Editor export process).
           *
           * @memberof EngineConfig
           * @default
           * @type {string}
           */
          executable: '',
          /**
           * An alternative name for the game pck to load. The executable name is used otherwise.
           *
           * @memberof EngineConfig
           * @default
           * @type {?string}
           */
          mainPack: null,
          /**
           * Specify a language code to select the proper localization for the game.
           *
           * The browser locale will be used if none is specified. See complete list of
           * :ref:`supported locales <doc_locales>`.
           *
           * @memberof EngineConfig
           * @type {?string}
           * @default
           */
          locale: null,
          /**
           * The canvas resize policy determines how the canvas should be resized by Godot.
           *
           * ``0`` means Godot won't do any resizing. This is useful if you want to control the canvas size from
           * javascript code in your template.
           *
           * ``1`` means Godot will resize the canvas on start, and when changing window size via engine functions.
           *
           * ``2`` means Godot will adapt the canvas size to match the whole browser window.
           *
           * @memberof EngineConfig
           * @type {number}
           * @default
           */
          canvasResizePolicy: 2,
          /**
           * The arguments to be passed as command line arguments on startup.
           *
           * See :ref:`command line tutorial <doc_command_line_tutorial>`.
           *
           * **Note**: :js:meth:`startGame <Engine.prototype.startGame>` will always add the ``--main-pack`` argument.
           *
           * @memberof EngineConfig
           * @type {Array<string>}
           * @default
           */
          args: [],
          /**
           * When enabled, the game canvas will automatically grab the focus when the engine starts.
           *
           * @memberof EngineConfig
           * @type {boolean}
           * @default
           */
          focusCanvas: true,
          /**
           * When enabled, this will turn on experimental virtual keyboard support on mobile.
           *
           * @memberof EngineConfig
           * @type {boolean}
           * @default
           */
          experimentalVK: false,
          /**
           * The progressive web app service worker to install.
           * @memberof EngineConfig
           * @default
           * @type {string}
           */
          serviceWorker: '',
          /**
           * @ignore
           * @type {Array.<string>}
           */
          persistentPaths: ['/userfs'],
          /**
           * @ignore
           * @type {boolean}
           */
          persistentDrops: false,
          /**
           * @ignore
           * @type {Array.<string>}
           */
          gdnativeLibs: [],
          /**
           * @ignore
           * @type {Array.<string>}
           */
          fileSizes: [],
          /**
           * A callback function for handling Godot's ``OS.execute`` calls.
           *
           * This is for example used in the Web Editor template to switch between project manager and editor, and for running the game.
           *
           * @callback EngineConfig.onExecute
           * @param {string} path The path that Godot's wants executed.
           * @param {Array.<string>} args The arguments of the "command" to execute.
           */
          /**
           * @ignore
           * @type {?function(string, Array.<string>)}
           */
          onExecute: null,
          /**
           * A callback function for being notified when the Godot instance quits.
           *
           * **Note**: This function will not be called if the engine crashes or become unresponsive.
           *
           * @callback EngineConfig.onExit
           * @param {number} status_code The status code returned by Godot on exit.
           */
          /**
           * @ignore
           * @type {?function(number)}
           */
          onExit: null,
          /**
           * A callback function for displaying download progress.
           *
           * The function is called once per frame while downloading files, so the usage of ``requestAnimationFrame()``
           * is not necessary.
           *
           * If the callback function receives a total amount of bytes as 0, this means that it is impossible to calculate.
           * Possible reasons include:
           *
           * -  Files are delivered with server-side chunked compression
           * -  Files are delivered with server-side compression on Chromium
           * -  Not all file downloads have started yet (usually on servers without multi-threading)
           *
           * @callback EngineConfig.onProgress
           * @param {number} current The current amount of downloaded bytes so far.
           * @param {number} total The total amount of bytes to be downloaded.
           */
          /**
           * @ignore
           * @type {?function(number, number)}
           */
          onProgress: null,
          /**
           * A callback function for handling the standard output stream. This method should usually only be used in debug pages.
           *
           * By default, ``console.log()`` is used.
           *
           * @callback EngineConfig.onPrint
           * @param {...*} [var_args] A variadic number of arguments to be printed.
           */
          /**
           * @ignore
           * @type {?function(...*)}
           */
          onPrint: function () {
              console.log.apply(console, Array.from(arguments)); // eslint-disable-line no-console
          },
          /**
           * A callback function for handling the standard error stream. This method should usually only be used in debug pages.
           *
           * By default, ``console.error()`` is used.
           *
           * @callback EngineConfig.onPrintError
           * @param {...*} [var_args] A variadic number of arguments to be printed as errors.
          */
          /**
           * @ignore
           * @type {?function(...*)}
           */
          onPrintError: function (var_args) {
              console.error.apply(console, Array.from(arguments)); // eslint-disable-line no-console
          },
      };
  
      /**
       * @ignore
       * @struct
       * @constructor
       * @param {EngineConfig} opts
       */
      function Config(opts) {
          this.update(opts);
      }
  
      Config.prototype = cfg;
  
      /**
       * @ignore
       * @param {EngineConfig} opts
       */
      Config.prototype.update = function (opts) {
          const config = opts || {};
          // NOTE: We must explicitly pass the default, accessing it via
          // the key will fail due to closure compiler renames.
          function parse(key, def) {
              if (typeof (config[key]) === 'undefined') {
                  return def;
              }
              return config[key];
          }
          // Module config
          this.unloadAfterInit = parse('unloadAfterInit', this.unloadAfterInit);
          this.onPrintError = parse('onPrintError', this.onPrintError);
          this.onPrint = parse('onPrint', this.onPrint);
          this.onProgress = parse('onProgress', this.onProgress);
  
          // Godot config
          this.canvas = parse('canvas', this.canvas);
          this.executable = parse('executable', this.executable);
          this.mainPack = parse('mainPack', this.mainPack);
          this.locale = parse('locale', this.locale);
          this.canvasResizePolicy = parse('canvasResizePolicy', this.canvasResizePolicy);
          this.persistentPaths = parse('persistentPaths', this.persistentPaths);
          this.persistentDrops = parse('persistentDrops', this.persistentDrops);
          this.experimentalVK = parse('experimentalVK', this.experimentalVK);
          this.focusCanvas = parse('focusCanvas', this.focusCanvas);
          this.serviceWorker = parse('serviceWorker', this.serviceWorker);
          this.gdnativeLibs = parse('gdnativeLibs', this.gdnativeLibs);
          this.fileSizes = parse('fileSizes', this.fileSizes);
          this.args = parse('args', this.args);
          this.onExecute = parse('onExecute', this.onExecute);
          this.onExit = parse('onExit', this.onExit);
      };
  
      /**
       * @ignore
       * @param {string} loadPath
       * @param {Response} response
       */
      Config.prototype.getModuleConfig = function (loadPath, response) {
          let r = response;
          return {
              'print': this.onPrint,
              'printErr': this.onPrintError,
              'thisProgram': this.executable,
              'noExitRuntime': true,
              'dynamicLibraries': [`${loadPath}.side.wasm`],
              'instantiateWasm': function (imports, onSuccess) {
                  function done(result) {
                      onSuccess(result['instance'], result['module']);
                  }
                  if (typeof (WebAssembly.instantiateStreaming) !== 'undefined') {
                      WebAssembly.instantiateStreaming(Promise.resolve(r), imports).then(done);
                  } else {
                      r.arrayBuffer().then(function (buffer) {
                          WebAssembly.instantiate(buffer, imports).then(done);
                      });
                  }
                  r = null;
                  return {};
              },
              'locateFile': function (path) {
                  if (path.endsWith('.worker.js')) {
                      return `${loadPath}.worker.js`;
                  } else if (path.endsWith('.audio.worklet.js')) {
                      return `${loadPath}.audio.worklet.js`;
                  } else if (path.endsWith('.js')) {
                      return `${loadPath}.js`;
                  } else if (path.endsWith('.side.wasm')) {
                      return `${loadPath}.side.wasm`;
                  } else if (path.endsWith('.wasm')) {
                      return `${loadPath}.wasm`;
                  }
                  return path;
              },
          };
      };
  
      /**
       * @ignore
       * @param {function()} cleanup
       */
      Config.prototype.getGodotConfig = function (cleanup) {
          // Try to find a canvas
          if (!(this.canvas instanceof HTMLCanvasElement)) {
              const nodes = document.getElementsByTagName('canvas');
              if (nodes.length && nodes[0] instanceof HTMLCanvasElement) {
                  this.canvas = nodes[0];
              }
              if (!this.canvas) {
                  throw new Error('No canvas found in page');
              }
          }
          // Canvas can grab focus on click, or key events won't work.
          if (this.canvas.tabIndex < 0) {
              this.canvas.tabIndex = 0;
          }
  
          // Browser locale, or custom one if defined.
          let locale = this.locale;
          if (!locale) {
              locale = navigator.languages ? navigator.languages[0] : navigator.language;
              locale = locale.split('.')[0];
          }
          locale = locale.replace('-', '_');
          const onExit = this.onExit;
  
          // Godot configuration.
          return {
              'canvas': this.canvas,
              'canvasResizePolicy': this.canvasResizePolicy,
              'locale': locale,
              'persistentDrops': this.persistentDrops,
              'virtualKeyboard': this.experimentalVK,
              'focusCanvas': this.focusCanvas,
              'onExecute': this.onExecute,
              'onExit': function (p_code) {
                  cleanup(); // We always need to call the cleanup callback to free memory.
                  if (typeof (onExit) === 'function') {
                      onExit(p_code);
                  }
              },
          };
      };
      return new Config(initConfig);
  };
  
  /**
   * Projects exported for the Web expose the :js:class:`Engine` class to the JavaScript environment, that allows
   * fine control over the engine's start-up process.
   *
   * This API is built in an asynchronous manner and requires basic understanding
   * of `Promises <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises>`__.
   *
   * @module Engine
   * @header HTML5 shell class reference
   */
  const Engine = (function () {
      const preloader = new Preloader();
  
      let loadPromise = null;
      let loadPath = '';
      let initPromise = null;
  
      /**
       * @classdesc The ``Engine`` class provides methods for loading and starting exported projects on the Web. For default export
       * settings, this is already part of the exported HTML page. To understand practical use of the ``Engine`` class,
       * see :ref:`Custom HTML page for Web export <doc_customizing_html5_shell>`.
       *
       * @description Create a new Engine instance with the given configuration.
       *
       * @global
       * @constructor
       * @param {EngineConfig} initConfig The initial config for this instance.
       */
      function Engine(initConfig) { // eslint-disable-line no-shadow
          this.config = new InternalConfig(initConfig);
          this.rtenv = null;
      }
  
      /**
       * Load the engine from the specified base path.
       *
       * @param {string} basePath Base path of the engine to load.
       * @param {number=} [size=0] The file size if known.
       * @returns {Promise} A Promise that resolves once the engine is loaded.
       *
       * @function Engine.load
       */
      Engine.load = function (basePath, size) {
          if (loadPromise == null) {
              loadPath = basePath;
              loadPromise = preloader.loadPromise(`${loadPath}.wasm`, size, true);
              requestAnimationFrame(preloader.animateProgress);
          }
          return loadPromise;
      };
  
      /**
       * Unload the engine to free memory.
       *
       * This method will be called automatically depending on the configuration. See :js:attr:`unloadAfterInit`.
       *
       * @function Engine.unload
       */
      Engine.unload = function () {
          loadPromise = null;
      };
  
      /**
       * Check whether WebGL is available. Optionally, specify a particular version of WebGL to check for.
       *
       * @param {number=} [majorVersion=1] The major WebGL version to check for.
       * @returns {boolean} If the given major version of WebGL is available.
       * @function Engine.isWebGLAvailable
       */
      Engine.isWebGLAvailable = function (majorVersion = 1) {
          try {
              return !!document.createElement('canvas').getContext(['webgl', 'webgl2'][majorVersion - 1]);
          } catch (e) { /* Not available */ }
          return false;
      };
  
      /**
       * Safe Engine constructor, creates a new prototype for every new instance to avoid prototype pollution.
       * @ignore
       * @constructor
       */
      function SafeEngine(initConfig) {
          const proto = /** @lends Engine.prototype */ {
              /**
               * Initialize the engine instance. Optionally, pass the base path to the engine to load it,
               * if it hasn't been loaded yet. See :js:meth:`Engine.load`.
               *
               * @param {string=} basePath Base path of the engine to load.
               * @return {Promise} A ``Promise`` that resolves once the engine is loaded and initialized.
               */
              init: function (basePath) {
                  if (initPromise) {
                      return initPromise;
                  }
                  if (loadPromise == null) {
                      if (!basePath) {
                          initPromise = Promise.reject(new Error('A base path must be provided when calling `init` and the engine is not loaded.'));
                          return initPromise;
                      }
                      Engine.load(basePath, this.config.fileSizes[`${basePath}.wasm`]);
                  }
                  const me = this;
                  function doInit(promise) {
                      // Care! Promise chaining is bogus with old emscripten versions.
                      // This caused a regression with the Mono build (which uses an older emscripten version).
                      // Make sure to test that when refactoring.
                      return new Promise(function (resolve, reject) {
                          promise.then(function (response) {
                              const cloned = new Response(response.clone().body, { 'headers': [['content-type', 'application/wasm']] });
                              Godot(me.config.getModuleConfig(loadPath, cloned)).then(function (module) {
                                  const paths = me.config.persistentPaths;
                                  module['initFS'](paths).then(function (err) {
                                      me.rtenv = module;
                                      if (me.config.unloadAfterInit) {
                                          Engine.unload();
                                      }
                                      resolve();
                                  });
                              });
                          });
                      });
                  }
                  preloader.setProgressFunc(this.config.onProgress);
                  initPromise = doInit(loadPromise);
                  return initPromise;
              },
  
              /**
               * Load a file so it is available in the instance's file system once it runs. Must be called **before** starting the
               * instance.
               *
               * If not provided, the ``path`` is derived from the URL of the loaded file.
               *
               * @param {string|ArrayBuffer} file The file to preload.
               *
               * If a ``string`` the file will be loaded from that path.
               *
               * If an ``ArrayBuffer`` or a view on one, the buffer will used as the content of the file.
               *
               * @param {string=} path Path by which the file will be accessible. Required, if ``file`` is not a string.
               *
               * @returns {Promise} A Promise that resolves once the file is loaded.
               */
              preloadFile: function (file, path) {
                  return preloader.preload(file, path, this.config.fileSizes[file]);
              },
  
              /**
               * Start the engine instance using the given override configuration (if any).
               * :js:meth:`startGame <Engine.prototype.startGame>` can be used in typical cases instead.
               *
               * This will initialize the instance if it is not initialized. For manual initialization, see :js:meth:`init <Engine.prototype.init>`.
               * The engine must be loaded beforehand.
               *
               * Fails if a canvas cannot be found on the page, or not specified in the configuration.
               *
               * @param {EngineConfig} override An optional configuration override.
               * @return {Promise} Promise that resolves once the engine started.
               */
              start: function (override) {
                  this.config.update(override);
                  const me = this;
                  return me.init().then(function () {
                      if (!me.rtenv) {
                          return Promise.reject(new Error('The engine must be initialized before it can be started'));
                      }
  
                      let config = {};
                      try {
                          config = me.config.getGodotConfig(function () {
                              me.rtenv = null;
                          });
                      } catch (e) {
                          return Promise.reject(e);
                      }
                      // Godot configuration.
                      me.rtenv['initConfig'](config);
  
                      // Preload GDNative libraries.
                      const libs = [];
                      me.config.gdnativeLibs.forEach(function (lib) {
                          libs.push(me.rtenv['loadDynamicLibrary'](lib, { 'loadAsync': true }));
                      });
                      return Promise.all(libs).then(function () {
                          return new Promise(function (resolve, reject) {
                              preloader.preloadedFiles.forEach(function (file) {
                                  me.rtenv['copyToFS'](file.path, file.buffer);
                              });
                              preloader.preloadedFiles.length = 0; // Clear memory
                              me.rtenv['callMain'](me.config.args);
                              initPromise = null;
                              if (me.config.serviceWorker && 'serviceWorker' in navigator) {
                                  navigator.serviceWorker.register(me.config.serviceWorker);
                              }
                              resolve();
                          });
                      });
                  });
              },
  
              /**
               * Start the game instance using the given configuration override (if any).
               *
               * This will initialize the instance if it is not initialized. For manual initialization, see :js:meth:`init <Engine.prototype.init>`.
               *
               * This will load the engine if it is not loaded, and preload the main pck.
               *
               * This method expects the initial config (or the override) to have both the :js:attr:`executable` and :js:attr:`mainPack`
               * properties set (normally done by the editor during export).
               *
               * @param {EngineConfig} override An optional configuration override.
               * @return {Promise} Promise that resolves once the game started.
               */
              startGame: function (override) {
                  this.config.update(override);
                  // Add main-pack argument.
                  const exe = this.config.executable;
                  const pack = this.config.mainPack || `${exe}.pck`;
                  this.config.args = ['--main-pack', pack].concat(this.config.args);
                  // Start and init with execName as loadPath if not inited.
                  const me = this;
                  return Promise.all([
                      this.init(exe),
                      this.preloadFile(pack, pack),
                  ]).then(function () {
                      return me.start.apply(me);
                  });
              },
  
              /**
               * Create a file at the specified ``path`` with the passed as ``buffer`` in the instance's file system.
               *
               * @param {string} path The location where the file will be created.
               * @param {ArrayBuffer} buffer The content of the file.
               */
              copyToFS: function (path, buffer) {
                  if (this.rtenv == null) {
                      throw new Error('Engine must be inited before copying files');
                  }
                  this.rtenv['copyToFS'](path, buffer);
              },
  
              /**
               * Request that the current instance quit.
               *
               * This is akin the user pressing the close button in the window manager, and will
               * have no effect if the engine has crashed, or is stuck in a loop.
               *
               */
              requestQuit: function () {
                  if (this.rtenv) {
                      this.rtenv['request_quit']();
                  }
              },
          };
  
          Engine.prototype = proto;
          // Closure compiler exported instance methods.
          Engine.prototype['init'] = Engine.prototype.init;
          Engine.prototype['preloadFile'] = Engine.prototype.preloadFile;
          Engine.prototype['start'] = Engine.prototype.start;
          Engine.prototype['startGame'] = Engine.prototype.startGame;
          Engine.prototype['copyToFS'] = Engine.prototype.copyToFS;
          Engine.prototype['requestQuit'] = Engine.prototype.requestQuit;
          // Also expose static methods as instance methods
          Engine.prototype['load'] = Engine.load;
          Engine.prototype['unload'] = Engine.unload;
          Engine.prototype['isWebGLAvailable'] = Engine.isWebGLAvailable;
          return new Engine(initConfig);
      }
  
      // Closure compiler exported static methods.
      SafeEngine['load'] = Engine.load;
      SafeEngine['unload'] = Engine.unload;
      SafeEngine['isWebGLAvailable'] = Engine.isWebGLAvailable;
  
      return SafeEngine;
  }());
  if (typeof window !== 'undefined') {
      window['Engine'] = Engine;
  }