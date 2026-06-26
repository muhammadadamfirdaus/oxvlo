(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_69fe51._.js", {

"[project]/src/app/components/shared/SectionStats.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const stats = [
    {
        target: 99.99,
        decimals: 2,
        suffix: '%',
        label: 'Uptime SLA',
        large: true
    },
    {
        target: 4.9,
        decimals: 1,
        suffix: '★',
        label: 'Client Rating',
        large: false
    },
    {
        target: 10,
        decimals: 0,
        suffix: '+',
        label: 'Years running',
        large: false
    },
    {
        target: 50,
        decimals: 0,
        suffix: '+',
        label: 'Integrations',
        large: false
    }
];
function animateCount(el, target, decimals, suffix, duration) {
    if (!el) return;
    const start = performance.now();
    const ease = (t)=>1 - Math.pow(1 - t, 3);
    const step = (now)=>{
        const t = Math.min(1, (now - start) / duration);
        const value = target * ease(t);
        el.textContent = value.toFixed(decimals) + suffix;
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
}
function SectionStats() {
    _s();
    const refContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refStats = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null)
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionStats.useEffect": ()=>{
            const container = refContainer.current;
            if (!container) return;
            const observer = new IntersectionObserver({
                "SectionStats.useEffect": (entries)=>{
                    entries.forEach({
                        "SectionStats.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                stats.forEach({
                                    "SectionStats.useEffect": (stat, i)=>{
                                        if (refStats[i].current) {
                                            refStats[i].current.textContent = 0..toFixed(stat.decimals) + stat.suffix;
                                        }
                                        animateCount(refStats[i].current, stat.target, stat.decimals, stat.suffix, 1300 + i * 120);
                                    }
                                }["SectionStats.useEffect"]);
                                observer.disconnect();
                            }
                        }
                    }["SectionStats.useEffect"]);
                }
            }["SectionStats.useEffect"], {
                threshold: 0.4
            });
            observer.observe(container);
            return ({
                "SectionStats.useEffect": ()=>observer.disconnect()
            })["SectionStats.useEffect"];
        }
    }["SectionStats.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: refContainer,
        className: "px-14 py-[76px] border-t border-oxv-border-divider",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-14 flex-wrap",
            children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-14",
                    children: [
                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-16 bg-oxv-border"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/shared/SectionStats.jsx",
                            lineNumber: 60,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center w-[180px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: refStats[i],
                                    className: `font-display font-semibold leading-none tabular-nums ${stat.large ? 'text-[58px] tracking-[-0.02em] text-oxv-accent' : 'text-[42px] text-oxv-heading'}`,
                                    children: stat.target.toFixed(stat.decimals) + stat.suffix
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/shared/SectionStats.jsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-[13px] mt-2 ${stat.large ? 'text-oxv-text-muted' : 'text-oxv-text-dim'}`,
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/shared/SectionStats.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/shared/SectionStats.jsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, stat.label, true, {
                    fileName: "[project]/src/app/components/shared/SectionStats.jsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/components/shared/SectionStats.jsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/shared/SectionStats.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(SectionStats, "0o1wOiax3cHsdCHQN8/JrURYWHI=");
_c = SectionStats;
const __TURBOPACK__default__export__ = SectionStats;
var _c;
__turbopack_refresh__.register(_c, "SectionStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_69fe51._.js.map