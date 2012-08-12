// funs.js
// A collection of useful string utilities for plain JavaScript.

/* String.escapeHTML() */
if (typeof String.prototype.escapeHTML != 'function') {
  String.prototype.escapeHTML = function () {
    return this
    .replace(/>/g,'&gt;')
    .replace(/</g,'&lt;')
    .replace(/&/g,'&amp;')
    .replace(/./g, function(a){
      var x = a.charCodeAt(0);
      return (x > 127) ? '&#'+x+';' : a;
    });
  }
}

/* String.reverse() */
if (typeof String.prototype.reverse != 'function') {
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  }
}

/* String.md5() */
if (typeof String.prototype.md5 != 'function') String.prototype.md5 = function(h) {function i(c, d) {return ((c >> 1) + (d >> 1) << 1) + (c & 1) + (d & 1)}for (var m = [], l = 0; 64 > l;) m[l] = 0 | 4294967296 * Math.abs(Math.sin(++l));return function() {var c = this;for (var d, g, f, a, j = [], c = unescape(encodeURI(c)), b = c.length, k = [d = 1732584193, g = -271733879, ~d, ~g], e = 0; e <= b;) j[e >> 2] |= (c.charCodeAt(e) || 128) << 8 * (e++ % 4);j[c = (b + 8 >> 6) * h + 14] = 8 * b;for (e = 0; e < c; e += h) {b = k;for (a = 0; 64 > a;) b = [f = b[3], i(d = b[1], (f = i(i(b[0], [d & (g = b[2]) | ~d & f, f & d | ~f & g, d ^ g ^ f, g ^ (d | ~f)][b = a >> 4]), i(m[a], j[[a, 5 * a + 1, 3 * a + 5, 7 * a][b] % h + e]))) << (b = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, h, 23, 6, 10, 15, 21][4 * b + a++ % 4]) | f >>> 32 - b), d, g];for (a = 4; a;) k[--a] = i(k[a], b[a])}for (c = ""; 32 > a;) c += (k[a >> 3] >> 4 * (1 ^ a++ & 7) & 15).toString(h);return c}}(16);

/* String.sha1() */
if (typeof String.prototype.sha1 != 'function') String.prototype.sha1 = function(){var d=this;for(var j=0,a=0,c=[],k=[1732584193,4023233417,2562383102,271733878,3285377520],e,g,h,l,f,i=unescape(encodeURI(d)),b=i.length;a<=b;)c[a>>2]|=(i.charCodeAt(a)||128)<<8*(3-a++%4);for(c[d=(b>>6<<4)+15]=b<<3;j<=d;j+=16){b=k;for(a=0;80>a;b=[[(f=((i=b[0])<<5|i>>>27)+b[4]+(c[a]=16>a?~~c[j+a]:f<<1|f>>>31)+1518500249)+((e=b[1])&(g=b[2])|~e&(h=b[3])),l=f+(e^g^h)+341275144,f+(e&g|e&h|g&h)+882459459,l+1535694389][0|a++/20]|0,i,e<<30|e>>>2,g,h])f=c[a-3]^c[a-8]^c[a-14]^c[a-16];for(a=5;a;)k[--a]=k[a]+b[a]|0}for(d="";40>a;)d+=(k[a>>3]>>4*(7-a++%8)&15).toString(16);return d};

/* String.sha256() */
if (typeof String.prototype.sha256 != 'function') String.prototype.sha256 = function(){function e(a,b){return((a>>1)+(b>>1)<<1)+(a&1)+(b&1)}function f(a,b){return a>>>b|a<<32-b}for(var b=1,a,m=[],l=[];18>++b;)for(a=b*b;312>a;a+=b)l[a]=1;b=1;for(a=0;313>b;)l[++b]||(l[a]=4294967296*(Math.pow(b,0.5)%1)|0,m[a++]=4294967296*(Math.pow(b,1/3)%1)|0);return function(){var h=this;for(var k=l.slice(b=0),c=unescape(encodeURI(h)),i=[],d=c.length,j=[],g,n;b<d;)j[b>>2]|=(c.charCodeAt(b)&255)<<8*(3-b++%4);d*=8;j[d>>5]|=128<<24-d%32;j[n=(d+64>>9<<4)+15]=d;for(b=0;b<n;b+=16){for(c=k.slice(a=0,8);64>a;c[4]=e(c[4],g))i[a]=16>a?j[a+b]:e(e(f(g=i[a-2],17)^f(g,19)^g>>>10,i[a-7]),e(f(g=i[a-15],7)^f(g,18)^g>>>3,i[a-16])),c.unshift(e(g=e(e(e(c.pop(),f(h=c[4],6)^f(h,11)^f(h,25)),e(h&c[5]^~h&c[6],m[a])),i[a++]),e(f(d=c[0],2)^f(d,13)^f(d,22),d&c[1]^c[1]&c[2]^c[2]&d)));for(a=8;a--;)k[a]=e(c[a],k[a])}for(c="";63>a;)c+=(k[++a>>3]>>4*(7-a%8)&15).toString(16);return c}}(65535);

/* String.btoa() */
if (typeof String.prototype.btoa != 'function') {
  if (typeof window.btoa == 'function') {
    // Use the implementation-supplied base64 function
    String.prototype.btoa = function() {
      return window.btoa(this);
    }
  } else {
    String.prototype.btoa = function() {
      // https://gist.github.com/999166
      var b64table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var b64e = function(a,b,c,d,e){for(d=e='';a[d|0]||(b='=',d%1);e+=b[63&c>>8-d%1*8])c=c<<8|a.charCodeAt(d-=-.75);return e};

      return b64e(this, b64table);
    }
  }
}

/* String.atob() */
if (typeof String.prototype.atob != 'function') {
  if (typeof window.atob == 'function') {
    // Use the implementation-supplied base64 function
    String.prototype.atob = function() {
      return window.atob(this);
    }
  } else {
    String.prototype.atob = function() {
      // https://gist.github.com/1020396
      var b64d = function(d,b,c,u,r,q,x){for(r=q=x='';c=d[x++];~c&&(u=q%4?u*64+c:c,q++%4)?r+=String.fromCharCode(255&u>>(-2*q&6)):0)c=b.indexOf(c);return r}

      return b64d(this.split(''), b64table);
    }
  }
}

/* String.capitalize() */
if (typeof String.prototype.capitalize != 'function') String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.substr(1).toLowerCase();
}

/* String.chomp(chr) */
if (typeof String.prototype.chomp != 'function') String.prototype.chomp = function(chr) {
  if (!chr) var chr = "\n";
  var t = this;

  while (t.length && t[t.length - 1] == chr) {
    t = t.substring(0, t.length - 1);
  }

  return t;
}

/* String.squeeze() */
if (typeof String.prototype.squeeze != 'function') String.prototype.squeeze = function() {
  var last = "";
  var out = "";

  for (var i = 0; i < this.length; i++) {
    var chr = this[i];
    if (chr != last) out += chr;
    last = chr;
  }

  return out;
}

/* String.times() */
if (typeof String.prototype.times != 'function') String.prototype.times = function(n) {
  if (!n) var n = 2;
  var t = this, out = "";
  
  for (var i = 0; i < n; i++) {
    out += t;
  }
  
  return out;
}

/* String.trim() */
if (typeof String.prototype.trim != 'function') String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
}