"use strict";var e=require("react"),r=require("@radix-ui/react-toggle-group"),t=require("@wds-utilities/cn"),a=require("@wds-ui/toggle");function n(e){var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var i=n(e),o=n(r),c=function(){return c=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},c.apply(this,arguments)};function s(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}"function"==typeof SuppressedError&&SuppressedError;var l=i.createContext({size:"default",variant:"default"}),u=i.forwardRef((function(e,r){var a=e.className,n=e.variant,u=e.size,f=e.children,p=s(e,["className","variant","size","children"]);return i.createElement(o.Root,c({ref:r,className:t.cn("flex items-center justify-center gap-1",a)},p),i.createElement(l.Provider,{value:{variant:n,size:u}},f))}));u.displayName=o.Root.displayName;var f=i.forwardRef((function(e,r){var n=e.className,u=e.children,f=e.variant,p=e.size,d=s(e,["className","children","variant","size"]),v=i.useContext(l);return i.createElement(o.Item,c({ref:r,className:t.cn(a.toggleVariants({variant:v.variant||f,size:v.size||p}),n)},d),u)}));f.displayName=o.Item.displayName,exports.ToggleGroup=u,exports.ToggleGroupItem=f;
//# sourceMappingURL=index.js.map