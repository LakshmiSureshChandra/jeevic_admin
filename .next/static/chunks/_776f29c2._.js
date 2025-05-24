(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ui/popup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Popup": (()=>Popup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Popup({ title, message, isOpen, onClose, type = "info", autoClose = true, autoCloseTime = 3000 }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Popup.useEffect": ()=>{
            if (isOpen) {
                setIsVisible(true);
                if (autoClose) {
                    const timer = setTimeout({
                        "Popup.useEffect.timer": ()=>{
                            setIsVisible(false);
                            setTimeout(onClose, 300) // Wait for fade-out animation
                            ;
                        }
                    }["Popup.useEffect.timer"], autoCloseTime);
                    return ({
                        "Popup.useEffect": ()=>clearTimeout(timer)
                    })["Popup.useEffect"];
                }
            }
        }
    }["Popup.useEffect"], [
        isOpen,
        autoClose,
        autoCloseTime,
        onClose
    ]);
    if (!isOpen && !isVisible) return null;
    const getTypeStyles = ()=>{
        switch(type){
            case "success":
                return "bg-green-50 border-green-500 text-green-700";
            case "error":
                return "bg-red-50 border-red-500 text-red-700";
            case "warning":
                return "bg-yellow-50 border-yellow-500 text-yellow-700";
            case "info":
            default:
                return "bg-blue-50 border-blue-500 text-blue-700";
        }
    };
    const getIconStyles = ()=>{
        switch(type){
            case "success":
                return "text-green-500";
            case "error":
                return "text-red-500";
            case "warning":
                return "text-yellow-500";
            case "info":
            default:
                return "text-blue-500";
        }
    };
    const getIcon = ()=>{
        switch(type){
            case "success":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/popup.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this);
            case "error":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/popup.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this);
            case "warning":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/popup.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this);
            case "info":
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/popup.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
          ${getTypeStyles()} 
          border rounded-lg shadow-lg max-w-md w-full pointer-events-auto
          transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}
        `,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-shrink-0 ${getIconStyles()}`,
                        children: getIcon()
                    }, void 0, false, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3 flex-grow",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/popup.tsx",
                                lineNumber: 116,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm mt-1",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/components/ui/popup.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setIsVisible(false);
                            setTimeout(onClose, 300) // Wait for fade-out animation
                            ;
                        },
                        className: "flex-shrink-0 ml-1 text-gray-400 hover:text-gray-500 focus:outline-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/ui/popup.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/popup.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/popup.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/popup.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/popup.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(Popup, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = Popup;
var _c;
__turbopack_context__.k.register(_c, "Popup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/confirm-popup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfirmPopup": (()=>ConfirmPopup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ConfirmPopup({ title = "Confirm Action", message, isOpen, onConfirm, onCancel, confirmText = "Confirm", cancelText = "Cancel" }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmPopup.useEffect": ()=>{
            if (isOpen) {
                setIsVisible(true);
            }
        }
    }["ConfirmPopup.useEffect"], [
        isOpen
    ]);
    const handleConfirm = ()=>{
        setIsVisible(false);
        setTimeout(()=>{
            onConfirm();
        }, 300);
    };
    const handleCancel = ()=>{
        setIsVisible(false);
        setTimeout(()=>{
            onCancel();
        }, 300);
    };
    if (!isOpen && !isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
          bg-white border rounded-lg shadow-lg max-w-md w-full
          transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}
          transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}
        `,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/confirm-popup.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancel,
                                className: "text-gray-400 hover:text-gray-500 focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/confirm-popup.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/confirm-popup.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/confirm-popup.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/components/ui/confirm-popup.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/confirm-popup.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancel,
                                className: "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none",
                                children: cancelText
                            }, void 0, false, {
                                fileName: "[project]/components/ui/confirm-popup.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirm,
                                className: "px-4 py-2 bg-red-600 border border-transparent rounded-md text-white hover:bg-red-700 focus:outline-none",
                                children: confirmText
                            }, void 0, false, {
                                fileName: "[project]/components/ui/confirm-popup.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/confirm-popup.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/confirm-popup.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/confirm-popup.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/confirm-popup.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ConfirmPopup, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ConfirmPopup;
var _c;
__turbopack_context__.k.register(_c, "ConfirmPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/context/popup-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PopupProvider": (()=>PopupProvider),
    "usePopup": (()=>usePopup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$confirm$2d$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/confirm-popup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const PopupContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function PopupProvider({ children }) {
    _s();
    const [popups, setPopups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [confirmPopup, setConfirmPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showPopup = (message, options = {})=>{
        const id = Date.now().toString();
        const { title, type = "info", autoClose = true, autoCloseTime = 3000 } = options;
        setPopups((prev)=>[
                ...prev,
                {
                    id,
                    message,
                    title,
                    type,
                    autoClose,
                    autoCloseTime
                }
            ]);
    };
    const showConfirm = (message, onConfirm, options = {})=>{
        const id = Date.now().toString();
        const { title, confirmText, cancelText } = options;
        setConfirmPopup({
            id,
            message,
            title,
            confirmText,
            cancelText,
            onConfirm
        });
    };
    const closePopup = (id)=>{
        setPopups((prev)=>prev.filter((popup)=>popup.id !== id));
    };
    const closeConfirmPopup = ()=>{
        setConfirmPopup(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopupContext.Provider, {
        value: {
            showPopup,
            showConfirm
        },
        children: [
            children,
            popups.map((popup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                    isOpen: true,
                    message: popup.message,
                    title: popup.title,
                    type: popup.type,
                    autoClose: popup.autoClose,
                    autoCloseTime: popup.autoCloseTime,
                    onClose: ()=>closePopup(popup.id)
                }, popup.id, false, {
                    fileName: "[project]/context/popup-context.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)),
            confirmPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$confirm$2d$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmPopup"], {
                isOpen: true,
                message: confirmPopup.message,
                title: confirmPopup.title,
                confirmText: confirmPopup.confirmText,
                cancelText: confirmPopup.cancelText,
                onConfirm: ()=>{
                    confirmPopup.onConfirm();
                    closeConfirmPopup();
                },
                onCancel: closeConfirmPopup
            }, void 0, false, {
                fileName: "[project]/context/popup-context.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/context/popup-context.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(PopupProvider, "vwo/F8jX4xDY/3rGyYp+aCZO5sQ=");
_c = PopupProvider;
function usePopup() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PopupContext);
    if (context === undefined) {
        throw new Error("usePopup must be used within a PopupProvider");
    }
    return context;
}
_s1(usePopup, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PopupProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/auth/logout-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LogoutButton": (()=>LogoutButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$popup$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/popup-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LogoutButton({ variant = "full", className = "" }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { showConfirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$popup$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"])();
    const [isLoggingOut, setIsLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        showConfirm("Are you sure you want to log out?", async ()=>{
            try {
                setIsLoggingOut(true);
                // Clear access token
                localStorage.removeItem("access_token");
                // Redirect to login page
                router.push("/login");
            } finally{
                setIsLoggingOut(false);
            }
        }, {
            title: "Logout Confirmation",
            confirmText: "Logout",
            cancelText: "Cancel"
        });
    };
    if (variant === "icon") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogout,
            disabled: isLoggingOut,
            className: `p-2 rounded-md hover:bg-gray-100 ${className}`,
            title: "Logout",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/auth/logout-button.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/auth/logout-button.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleLogout,
        disabled: isLoggingOut,
        className: `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/components/auth/logout-button.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: isLoggingOut ? "Logging out..." : "Logout"
            }, void 0, false, {
                fileName: "[project]/components/auth/logout-button.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/auth/logout-button.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(LogoutButton, "zzuCxoXvO2FHdeREcjeHxaReo88=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$popup$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"]
    ];
});
_c = LogoutButton;
var _c;
__turbopack_context__.k.register(_c, "LogoutButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/env.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {},
    client: {
        NEXT_PUBLIC_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().url()
    },
    runtimeEnv: {
        NEXT_PUBLIC_API_URL: ("TURBOPACK compile-time value", "https://api.jeevic.com")
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/api/types.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/api/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "APISDK": (()=>APISDK),
    "LOGIN_URL": (()=>LOGIN_URL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/api/types.ts [app-client] (ecmascript)");
;
const LOGIN_URL = `${__TURBOPACK__imported__module__$5b$project$5d2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_URL}/auth/login`;
class APISDK {
    static instance;
    static BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_URL;
    accessToken;
    constructor(accessToken){
        this.accessToken = accessToken;
    }
    static getInstance(accessToken) {
        // If an instance already exists, update its token if a new one is provided
        if (APISDK.instance) {
            if (accessToken !== undefined) {
                APISDK.instance.setAccessToken(accessToken);
            }
            return APISDK.instance;
        }
        // For first initialization, try to get token from localStorage if not provided
        if (accessToken === undefined && "object" !== "undefined") {
            try {
                const storedToken = localStorage.getItem("access_token");
                if (storedToken) {
                    accessToken = storedToken;
                }
            } catch (error) {
                console.error("APISDK: Error accessing localStorage:", error);
            }
        }
        // Create a new instance with the provided token
        APISDK.instance = new APISDK(accessToken || null);
        return APISDK.instance;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    async getUser() {
        if (!this.accessToken) {
            console.error("APISDK: No access token available for getUser request");
            throw new Error("Authentication required");
        }
        const response = await fetch(`${APISDK.BASE_URL}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get user: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async loginRequest(countryCode, phoneNumber) {
        const response = await fetch(`${APISDK.BASE_URL}/auth/login-request`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                country_code: countryCode,
                phone_number: phoneNumber
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to login request: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async verifyAccountAccess(countryCode, phoneNumber, otp) {
        const response = await fetch(`${APISDK.BASE_URL}/auth/verify-account-access`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                country_code: countryCode,
                phone_number: phoneNumber,
                otp
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to verify account access: ${response.status} ${response.statusText}`);
        }
        // Return the full response to ensure we get the access_token
        return await response.json();
    }
    async getDishCategories() {
        const response = await fetch(`${APISDK.BASE_URL}/dish/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get dish categories: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getDishCategoryById(dishCategoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/categories/${dishCategoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get dish category by id: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getDishById(dishId) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/i/${dishId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get dish by id: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getContactMessages() {
        const response = await fetch(`${APISDK.BASE_URL}/message`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get contact messages: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result; // Return the entire result object
    }
    // Get a specific contact message by ID
    async getContactMessageById(messageId) {
        const response = await fetch(`${APISDK.BASE_URL}/message/${messageId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get contact message: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // Mark a message as read
    async updateContactMessageStatus(messageId, isRead) {
        const response = await fetch(`${APISDK.BASE_URL}/message/${messageId}/read`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                is_read: isRead
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update message status: ${response.status} ${response.statusText}`);
        }
    }
    // Delete a contact message
    async deleteContactMessage(messageId) {
        const response = await fetch(`${APISDK.BASE_URL}/message/${messageId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete message: ${response.status} ${response.statusText}`);
        }
    }
    async getDishes() {
        const response = await fetch(`${APISDK.BASE_URL}/dish/dishes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get dishes: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getDishesByCategoryId(dishCategoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/dishes/${dishCategoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get dishes by category id: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async createDishCategory(name, picture) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                picture
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create dish category: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateDishCategory
    async updateDishCategory(dishCategoryId, name, picture) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/categories/${dishCategoryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                picture
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update dish category: ${response.status} ${response.statusText}`);
        }
    }
    // deleteDishCategory
    async deleteDishCategory(dishCategoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/categories/${dishCategoryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete dish category: ${response.status} ${response.statusText}`);
        }
    }
    // createDish
    async createDish({ name, price, dish_category_id, is_available, is_non_veg, meta_data, picture }) {
        const response = await fetch(`${APISDK.BASE_URL}/dish`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                price,
                picture,
                dish_category_id,
                is_available,
                is_non_veg,
                meta_data
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create dish: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateDish
    async updateDish(dishId, { name, price, picture, dish_category_id, is_available, is_non_veg, meta_data }) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/${dishId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                price,
                picture,
                dish_category_id,
                is_available,
                is_non_veg,
                meta_data
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update dish: ${response.status} ${response.statusText}`);
        }
    }
    // deleteDish
    async deleteDish(dishId) {
        const response = await fetch(`${APISDK.BASE_URL}/dish/${dishId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete dish: ${response.status} ${response.statusText}`);
        }
    }
    // getTables
    async getTables() {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get tables: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getTableById
    async getTableById(tableId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables/${tableId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get table: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getTableByTableNumber
    async getTableByTableNumber(tableNumber) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables/by-no/${tableNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get table: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getBooking
    async getBooking(bookingId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings/${bookingId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get booking: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // createBooking
    async createBooking({ table_id, booking_date, booking_time, from_time, to_time, number_of_people }) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                table_id,
                booking_date,
                booking_time,
                from_time,
                to_time,
                number_of_people
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create booking: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateBooking
    async updateBooking(bookingId, data) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings/${bookingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to update booking: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // deleteBooking
    async deleteBooking(bookingId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings/${bookingId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete booking: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markBookingAsCancelled
    async markBookingAsCancelled(bookingId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings/cancel/${bookingId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark booking as cancelled: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markBookingAsCompleted
    async markBookingAsCompleted(bookingId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings/complete/${bookingId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark booking as completed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getOrderById
    async getOrderById(orderId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/${orderId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get order: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getOrdersByBookingId
    async getOrdersByBookingId(bookingId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/booking/${bookingId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get orders: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getOrdersByUserId
    async getOrdersByUserId(userId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/user/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get orders: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getOrdersByTableId
    async getOrdersByTableId(tableId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/table/${tableId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get orders: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // createOrder
    async createOrder(orderData) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(orderData)
        });
        if (!response.ok) {
            throw new Error(`Failed to create order: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markOrderAsCancelled
    async markOrderAsCancelled(orderId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/cancel/${orderId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark order as cancelled: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getCheckoutById
    async getCheckoutById(checkoutId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts/${checkoutId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getCheckoutByBookingId
    async getCheckoutByBookingId(bookingId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts/booking/${bookingId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getCheckoutByUserId
    async getCheckoutByUserId(userId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts/user/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getCheckoutByTableId
    async getCheckoutByTableId(tableId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts/table/${tableId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // createUserEndCheckout
    async createUserEndCheckout(booking_id) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                booking_id
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getAvailableTables
    async getAvailableTables(fromTime, toTime) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/available-tables`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                from_time: fromTime,
                to_time: toTime
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to get available tables: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getCheckouts
    async getCheckouts() {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get checkouts: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateCheckout
    async updateCheckout(checkoutId, checkoutData) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts/${checkoutId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(checkoutData)
        });
        if (!response.ok) {
            throw new Error(`Failed to update checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // deleteCheckout
    async deleteCheckout(checkoutId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/checkouts/${checkoutId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete checkout: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getOrders
    async getOrders() {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get orders: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markOrderAsReady
    async markOrderAsReady(orderId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/ready/${orderId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark order as ready: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markOrderAsServed
    async markOrderAsServed(orderId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/serve/${orderId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark order as served: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markOrderAsPreparing
    async markOrderAsPreparing(orderId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/prepare/${orderId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark order as served: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateOrder
    async updateOrder(orderId, data) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to update order: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async updateOrDeleteOrder(orderId, data) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/update/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to update order: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // deleteOrder
    async deleteOrder(orderId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/orders/${orderId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete order: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getBookings
    async getBookings() {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/bookings`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get bookings: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // createTable
    async createTable({ table_number, capacity, meta_data }) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                table_number,
                capacity,
                meta_data
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create table: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateTable
    async updateTable(tableId, { table_number, capacity, meta_data }) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables/${tableId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                table_number,
                capacity,
                meta_data
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update table: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // deleteTable
    async deleteTable(tableId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables/${tableId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete table: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getReviewsByDish
    async getReviewsByDish(dishId) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/d/${dishId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get reviews by dish: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getReviewsByProduct
    async getReviewsByProduct(productId) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/p/${productId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get reviews by dish: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getReview
    async getReview(reviewId) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/${reviewId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get review: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // createReview
    async createReview({ product_id, dish_id, rating, comment, meta_data }) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                product_id,
                dish_id,
                rating,
                comment,
                meta_data
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create review: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // deleteReview
    async deleteReview(reviewId) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/${reviewId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete review: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // updateReview
    async updateReview(reviewId, { rating, comment, meta_data }) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                rating,
                comment,
                meta_data
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update review: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getAverageRatingForDish
    async getAverageRatingForDish(dishId) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/avg/d/${dishId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get average rating for dish: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getAverageRatingForProduct
    async getAverageRatingForProduct(productId) {
        const response = await fetch(`${APISDK.BASE_URL}/reviews/avg/p/${productId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get average rating for product: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async uploadFile(file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(`${APISDK.BASE_URL}/upload`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            },
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Failed to upload file: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getReservations
    async getReservations(page, limit) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/reservations?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get reservations: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // markTableAsCleaned
    async markTableAsCleaned(tableId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/tables/cleaned/${tableId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to mark table as cleaned: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getTableStats
    async getTableStats() {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/table-stats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get table stats: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getAllAssistance() {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/assistance`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get assistance: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // deleteAssistance
    async deleteAssistance(assistanceId) {
        const response = await fetch(`${APISDK.BASE_URL}/dine-in/assistance/${assistanceId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete assistance: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // Add this near other user-related methods
    async getAdminUsers() {
        const response = await fetch(`${APISDK.BASE_URL}/admin/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get admin users: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // getAllStats
    async getAllStats() {
        const response = await fetch(`${APISDK.BASE_URL}/admin/allstats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get all stats: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // Create banner
    async createBanner(formData) {
        const response = await fetch(`${APISDK.BASE_URL}/banner/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            },
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Failed to create banner: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // Get all banners
    async getBanners() {
        const response = await fetch(`${APISDK.BASE_URL}/banner`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get banners: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // Delete a banner
    async deleteBanner(bannerId) {
        const response = await fetch(`${APISDK.BASE_URL}/banner/${bannerId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete banner: ${response.status} ${response.statusText}`);
        }
    }
    async createEmployee(employeeData) {
        const response = await fetch(`${APISDK.BASE_URL}/admin/staff`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(employeeData)
        });
        if (!response.ok) {
            throw new Error(`Failed to create employee: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getEmployees() {
        const response = await fetch(`${APISDK.BASE_URL}/admin/staff`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get employees: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getEmployeeById(staffId) {
        const response = await fetch(`${APISDK.BASE_URL}/admin/staff/${staffId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get employee: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async updateEmployee(staffId, employeeData) {
        const response = await fetch(`${APISDK.BASE_URL}/admin/staff/${staffId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(employeeData)
        });
        if (!response.ok) {
            throw new Error(`Failed to update employee: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async deleteEmployee(staffId) {
        const response = await fetch(`${APISDK.BASE_URL}/admin/staff/${staffId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete employee: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async createNewCategory(name, imageUrl) {
        const response = await fetch(`${APISDK.BASE_URL}/category`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                image_url: imageUrl
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create category: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.id;
    }
    async getAllCategories() {
        const response = await fetch(`${APISDK.BASE_URL}/category`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get categories: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async updateCategory(categoryId, name, imageUrl) {
        const response = await fetch(`${APISDK.BASE_URL}/category/${categoryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                image_url: imageUrl
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update category: ${response.status} ${response.statusText}`);
        }
    }
    async deleteCategory(categoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/category/${categoryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete category: ${response.status} ${response.statusText}`);
        }
    }
    async getCategoryById(categoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/category/${categoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get category by id: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    //sub categories
    async createNewSubCategory(name, categoryId, image_url) {
        const response = await fetch(`${APISDK.BASE_URL}/subcategory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                category_id: categoryId,
                image_url
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create subcategory: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.id;
    }
    async getAllSubCategories() {
        const response = await fetch(`${APISDK.BASE_URL}/subcategory`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get subcategories: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async updateSubCategory(subCategoryId, name, categoryId, image_url) {
        const response = await fetch(`${APISDK.BASE_URL}/subcategory/${subCategoryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                category_id: categoryId,
                image_url
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to update subcategory: ${response.status} ${response.statusText}`);
        }
    }
    async deleteSubCategory(subCategoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/subcategory/${subCategoryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete subcategory: ${response.status} ${response.statusText}`);
        }
    }
    async getSubCategoryById(subCategoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/subcategory/${subCategoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get subcategory by id: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getSubCategoriesByCategoryId(categoryId) {
        const response = await fetch(`${APISDK.BASE_URL}/subcategory/c/${categoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get subcategories by category id: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    // product functions
    async createProduct({ name, description, price, image_url, category_id, subcategory_id, meta_data, is_active, availability_count }) {
        const response = await fetch(`${APISDK.BASE_URL}/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                name,
                description,
                price,
                image_url,
                category_id,
                subcategory_id,
                meta_data,
                is_active,
                availability_count
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to create product: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.id;
    }
    async updateProduct(product_id, data) {
        const response = await fetch(`${APISDK.BASE_URL}/product/${product_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to update product: ${response.status} ${response.statusText}`);
        }
    }
    async deleteProduct(product_id) {
        const response = await fetch(`${APISDK.BASE_URL}/product/${product_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete product: ${response.status} ${response.statusText}`);
        }
    }
    async getProductsByCategory({ category_id, subcategory_id }, { limit, page }) {
        const query = new URLSearchParams();
        if (category_id) query.append("category_id", category_id);
        if (subcategory_id) query.append("subcategory_id", subcategory_id);
        query.append("limit", limit.toString());
        query.append("page", page.toString());
        const response = await fetch(`${APISDK.BASE_URL}/product?${query.toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get products: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getProductByCategoryId(category_id) {
        const response = await fetch(`${APISDK.BASE_URL}/product/c/${category_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get product: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getProductBySubCategoryId(subcategory_id) {
        const response = await fetch(`${APISDK.BASE_URL}/product/s/${subcategory_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get product: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getProductById(product_id) {
        const response = await fetch(`${APISDK.BASE_URL}/product/i/${product_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get product: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getProductCount({ category_id, subcategory_id }) {
        const query = new URLSearchParams();
        if (category_id) query.append("category_id", category_id);
        if (subcategory_id) query.append("subcategory_id", subcategory_id);
        const response = await fetch(`${APISDK.BASE_URL}/product/count?${query.toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get product count: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.count;
    }
    async getProductsByIds(product_ids) {
        const response = await fetch(`${APISDK.BASE_URL}/product/ids`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({
                ids: product_ids
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to get products by ids: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getReviewsByProductId(product_id) {
        const response = await fetch(`${APISDK.BASE_URL}/review/p/${product_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get products by ids: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async deleteReviewById(review_id) {
        const response = await fetch(`${APISDK.BASE_URL}/review/${review_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get products by ids: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async averageRatingsByProductId(product_id) {
        const response = await fetch(`${APISDK.BASE_URL}/review/avg/p/${product_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get products by ids: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getCoupons() {
        const response = await fetch(`${APISDK.BASE_URL}/coupon`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get coupons: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getCoupon(coupon_id) {
        const response = await fetch(`${APISDK.BASE_URL}/coupon/${coupon_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get coupon: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async createCoupon(data) {
        const response = await fetch(`${APISDK.BASE_URL}/coupon`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to create coupon: ${response.status} ${response.statusText}`);
        }
        const res = await response.json();
        return res.id;
    }
    async updateCoupon(coupon_id, data) {
        const response = await fetch(`${APISDK.BASE_URL}/coupon/${coupon_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to update coupon: ${response.status} ${response.statusText}`);
        }
    }
    async deleteCoupon(coupon_id) {
        const response = await fetch(`${APISDK.BASE_URL}/coupon/${coupon_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete coupon: ${response.status} ${response.statusText}`);
        }
    }
    // sales
    async getSales() {
        const response = await fetch(`${APISDK.BASE_URL}/sales`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get sales: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getSale(saleId) {
        const response = await fetch(`${APISDK.BASE_URL}/sales/${saleId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get sale: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getSaleProducts(saleType, saleId) {
        const response = await fetch(`${APISDK.BASE_URL}/sales/${saleType}/${saleId}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get sale products: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async getCurrentSalesOverProduct(productId) {
        const response = await fetch(`${APISDK.BASE_URL}/sales/over/${productId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get current sales over product: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async createSale(saleData) {
        const response = await fetch(`${APISDK.BASE_URL}/sales`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(saleData)
        });
        if (!response.ok) {
            throw new Error(`Failed to create sale: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    async updateSale(saleId, saleData) {
        const response = await fetch(`${APISDK.BASE_URL}/sales/${saleId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(saleData)
        });
        if (!response.ok) {
            throw new Error(`Failed to update sale: ${response.status} ${response.statusText}`);
        }
    }
    async deleteSale(saleId) {
        const response = await fetch(`${APISDK.BASE_URL}/sales/${saleId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to delete sale: ${response.status} ${response.statusText}`);
        }
    }
    async getEcomStats() {
        const response = await fetch(`${APISDK.BASE_URL}/admin/allecomstats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to get all stats: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/api/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/api/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/libs/api/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/hooks/useAuth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/libs/api/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/libs/api/index.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useAuth = ()=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accessToken, setAccessToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Effect to get token from localStorage (runs once)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            try {
                const token = localStorage.getItem('access_token');
                if (token) {
                    setAccessToken(token);
                    setIsAuthenticated(true); // Set authenticated immediately if token exists
                } else {
                    setIsLoading(false);
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error accessing localStorage:', error);
                setIsLoading(false);
                setIsAuthenticated(false);
            }
        }
    }["useAuth.useEffect"], []);
    // Effect to fetch user data when token is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            if (!accessToken) {
                setIsLoading(false);
                return;
            }
            const fetchUser = {
                "useAuth.useEffect.fetchUser": async ()=>{
                    try {
                        const cleanToken = accessToken.startsWith('"') && accessToken.endsWith('"') ? accessToken.slice(1, -1) : accessToken;
                        const api = __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["APISDK"].getInstance(cleanToken);
                        const userData = await api.getUser();
                        if (userData && [
                            'admin',
                            'cafe_admin',
                            'ecommerce_admin'
                        ].includes(userData.role)) {
                            setUser(userData);
                            setIsAuthenticated(true);
                        } else {
                            throw new Error('User does not have the required role');
                        }
                    } catch (error) {
                        console.error('Failed to fetch user:', error);
                        // Don't clear token on network errors
                        if (error instanceof Error && error.message !== 'Failed to fetch') {
                            localStorage.removeItem('access_token');
                            setIsAuthenticated(false);
                            setUser(undefined);
                        }
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["useAuth.useEffect.fetchUser"];
            fetchUser();
        }
    }["useAuth.useEffect"], [
        accessToken
    ]);
    const refreshAuth = async ()=>{
        const token = localStorage.getItem('access_token');
        if (token) {
            setAccessToken(token);
        }
    };
    return {
        user,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        refreshAuth
    };
};
_s(useAuth, "H8Y4jSoKLJOucDVULo0ll0OLpE0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$logout$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/logout-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Sidebar() {
    _s();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated, user, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const toggleSidebar = ()=>{
        setCollapsed(!collapsed);
    };
    // Format user display name from first_name and last_name
    const displayName = user ? `${user.first_name || ""} ${user.last_name || ""}`.trim() : "Jeevan";
    // Don't render sensitive parts while still loading
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${collapsed ? "w-20" : "w-60"} h-screen bg-white border-r flex flex-col transition-all duration-300`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${collapsed ? "justify-center" : "pl-4"} p-4 border-b flex items-center`,
                    children: [
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/logo1.svg",
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 53,
                            columnNumber: 26
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleSidebar,
                            className: `${collapsed ? "ml-0" : "ml-auto"} p-1 text-black bg-gray-100 rounded-full hover:bg-gray-100`,
                            children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 60,
                                columnNumber: 26
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 60,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sidebar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto"
                }, void 0, false, {
                    fileName: "[project]/components/sidebar.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sidebar.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${collapsed ? "w-20" : "w-60"} h-screen bg-white  border-r flex flex-col transition-all duration-300`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${collapsed ? "justify-center" : "pl-4"} p-4 border-b flex items-center`,
                children: [
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo1.svg",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 24
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleSidebar,
                        className: `${collapsed ? "ml-0" : "ml-auto"} p-1 text-black bg-gray-100 rounded-full hover:bg-gray-100`,
                        children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 88,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 88,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 font-medium",
                                    children: "CONVENIENCE"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/ecom-oveview",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, void 0),
                                label: "Overview",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/inventory",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 19
                                }, void 0),
                                label: "Inventory",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/category",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 19
                                }, void 0),
                                label: "category",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/subcategory",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 19
                                }, void 0),
                                label: "subcategory",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/reviews",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, void 0),
                                label: "reviews",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 font-medium ",
                                    children: "CAFE"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, void 0),
                                label: "Overview",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/real-time",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, void 0),
                                label: "Real-Time view",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/operations",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 19
                                }, void 0),
                                label: "Operations",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 font-medium",
                                    children: "MARKETING"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/promotional-mail",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 166,
                                    columnNumber: 19
                                }, void 0),
                                label: "Promotional Mail",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "#",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 19
                                }, void 0),
                                label: "Promotional Mesasge",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/coupon-codes",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 19
                                }, void 0),
                                label: "Coupon Codes",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/contact-messages",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 184,
                                    columnNumber: 19
                                }, void 0),
                                label: "Contact Messages",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4",
                        children: [
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 font-medium",
                                    children: "Staff managemenr"
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                href: "/staff",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 200,
                                    columnNumber: 19
                                }, void 0),
                                label: "Staff Management",
                                collapsed: collapsed
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-4 border-t ${collapsed ? "flex flex-col items-center" : ""}`,
                children: !collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user?.profile_picture || "https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg?height=40&width=40",
                                        alt: "User avatar",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-800",
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/components/sidebar.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: user ? `${user.country_code}${user.phone_number}` : "admin@jeevic.com"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sidebar.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sidebar.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 222,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$logout$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoutButton"], {
                            className: "text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 244,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sidebar.tsx",
                    lineNumber: 221,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 bg-gray-200 rounded-full overflow-hidden mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: user?.profile_picture || "/placeholder.svg?height=40&width=40",
                                alt: "User avatar",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 249,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 248,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$logout$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoutButton"], {
                            variant: "icon",
                            className: "text-gray-700 hover:text-orange-500 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/components/sidebar.tsx",
                            lineNumber: 258,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "9+mZmdm0eBM4PtG5Mq+lU35XFpg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Sidebar;
function NavItem({ href, icon, label, collapsed }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = pathname === href && href !== "#";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `flex items-center ${collapsed ? "justify-center" : "px-4"} py-2 text-sm ${isActive ? "bg-orange-500 text-white font-medium" : "text-gray-800 hover:bg-gray-100"}`,
        title: collapsed ? label : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: collapsed ? "" : "mr-3",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            !collapsed && label
        ]
    }, void 0, true, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_s1(NavItem, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = NavItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "Sidebar");
__turbopack_context__.k.register(_c1, "NavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/context/auth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthContext": (()=>AuthContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/context/provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthContextProvider": (()=>AuthContextProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContextProvider = ({ children })=>{
    _s();
    const { isAuthenticated, isLoading, user, setIsAuthenticated, setUser, refreshAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthContextProvider.useMemo[contextValue]": ()=>({
                user: user ?? null,
                isLoading,
                isAuthenticated,
                setIsAuthenticated,
                setUser,
                refreshAuth
            })
    }["AuthContextProvider.useMemo[contextValue]"], [
        user,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        refreshAuth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthContext"].Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/provider.tsx",
        lineNumber: 18,
        columnNumber: 12
    }, this);
};
_s(AuthContextProvider, "8fvf61OiQ9xQf2tSyzPSeaBGqaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthContextProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/auth/auth-guard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthGuard": (()=>AuthGuard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$popup$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/popup-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthGuard({ children }) {
    _s();
    const { isAuthenticated, isLoading, refreshAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { showPopup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$popup$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"])();
    const [redirectInProgress, setRedirectInProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLoadComplete, setInitialLoadComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            if (refreshAuth && !initialLoadComplete) {
                refreshAuth();
                setInitialLoadComplete(true);
            }
        }
    }["AuthGuard.useEffect"], [
        refreshAuth,
        initialLoadComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            if (pathname === "/login") {
                return;
            }
            if (redirectInProgress) {
                return;
            }
            if (!isLoading) {
                const isFirstLoad = sessionStorage.getItem('sessionChecked') !== 'true';
                if (!isAuthenticated) {
                    if (isFirstLoad) {
                        showPopup("Your session has expired. Please login again.", {
                            type: "warning",
                            title: "Authentication Required"
                        });
                        sessionStorage.setItem('sessionChecked', 'true');
                    }
                    setRedirectInProgress(true);
                    router.push("/login");
                } else {
                    sessionStorage.setItem('sessionChecked', 'true');
                }
            }
        }
    }["AuthGuard.useEffect"], [
        isAuthenticated,
        isLoading,
        router,
        pathname,
        showPopup,
        redirectInProgress
    ]);
    // Show loading state while checking authentication, but only on protected routes
    if ((isLoading || !initialLoadComplete) && pathname !== "/login") {
        console.log('Showing loading state for protected route');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-16 h-16 border-4 border-gray-200 border-t-4 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/components/auth/auth-guard.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-medium text-gray-700 mb-1",
                        children: "Loading"
                    }, void 0, false, {
                        fileName: "[project]/components/auth/auth-guard.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: "Verifying your session..."
                    }, void 0, false, {
                        fileName: "[project]/components/auth/auth-guard.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/auth/auth-guard.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/auth/auth-guard.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    // On login page, always render children
    if (pathname === "/login") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    // For other routes, only render children if authenticated
    return isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false) : null;
}
_s(AuthGuard, "r7WuItXg347l7AulpAF8hzX8G3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$popup$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"]
    ];
});
_c = AuthGuard;
var _c;
__turbopack_context__.k.register(_c, "AuthGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_776f29c2._.js.map