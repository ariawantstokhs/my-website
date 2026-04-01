(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GravityStarsBackground",
    ()=>GravityStarsBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GravityStarsBackground({ starsCount = 75, starsSize = 2, starsOpacity = 0.75, glowIntensity = 15, glowAnimation = 'ease', movementSpeed = 0.3, mouseInfluence = 100, mouseGravity = 'attract', gravityStrength = 75, starsInteraction = false, starsInteractionType = 'bounce', className, ...props }) {
    _s();
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const animRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const starsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    const mouseRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        x: 0,
        y: 0
    });
    const [dpr, setDpr] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](1);
    const [canvasSize, setCanvasSize] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        width: 800,
        height: 600
    });
    const readColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[readColor]": ()=>{
            const el = containerRef.current;
            if (!el) return '#ffffff';
            const cs = getComputedStyle(el);
            return cs.color || '#ffffff';
        }
    }["GravityStarsBackground.useCallback[readColor]"], []);
    const initStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[initStars]": (w, h)=>{
            starsRef.current = Array.from({
                length: starsCount
            }).map({
                "GravityStarsBackground.useCallback[initStars]": ()=>{
                    const angle = Math.random() * Math.PI * 2;
                    const speed = movementSpeed * (0.5 + Math.random() * 0.5);
                    return {
                        x: Math.random() * w,
                        y: Math.random() * h,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        size: Math.random() * starsSize + 1,
                        opacity: starsOpacity,
                        baseOpacity: starsOpacity,
                        mass: Math.random() * 0.5 + 0.5,
                        glowMultiplier: 1,
                        glowVelocity: 0
                    };
                }
            }["GravityStarsBackground.useCallback[initStars]"]);
        }
    }["GravityStarsBackground.useCallback[initStars]"], [
        starsCount,
        movementSpeed,
        starsOpacity,
        starsSize
    ]);
    const redistributeStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[redistributeStars]": (w_0, h_0)=>{
            starsRef.current.forEach({
                "GravityStarsBackground.useCallback[redistributeStars]": (p)=>{
                    p.x = Math.random() * w_0;
                    p.y = Math.random() * h_0;
                }
            }["GravityStarsBackground.useCallback[redistributeStars]"]);
        }
    }["GravityStarsBackground.useCallback[redistributeStars]"], []);
    const resizeCanvas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[resizeCanvas]": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const rect = container.getBoundingClientRect();
            const nextDpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
            setDpr(nextDpr);
            canvas.width = Math.max(1, Math.floor(rect.width * nextDpr));
            canvas.height = Math.max(1, Math.floor(rect.height * nextDpr));
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            setCanvasSize({
                width: rect.width,
                height: rect.height
            });
            if (starsRef.current.length === 0) {
                initStars(rect.width, rect.height);
            } else {
                redistributeStars(rect.width, rect.height);
            }
        }
    }["GravityStarsBackground.useCallback[resizeCanvas]"], [
        initStars,
        redistributeStars
    ]);
    const handlePointerMove = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[handlePointerMove]": (e)=>{
            const canvas_0 = canvasRef.current;
            if (!canvas_0) return;
            const rect_0 = canvas_0.getBoundingClientRect();
            let clientX = 0;
            let clientY = 0;
            if ('touches' in e) {
                const t = e.touches[0];
                if (!t) return;
                clientX = t.clientX;
                clientY = t.clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            mouseRef.current = {
                x: clientX - rect_0.left,
                y: clientY - rect_0.top
            };
        }
    }["GravityStarsBackground.useCallback[handlePointerMove]"], []);
    const updateStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[updateStars]": ()=>{
            const w_1 = canvasSize.width;
            const h_1 = canvasSize.height;
            const mouse = mouseRef.current;
            for(let i = 0; i < starsRef.current.length; i++){
                const p_0 = starsRef.current[i];
                const dx = mouse.x - p_0.x;
                const dy = mouse.y - p_0.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouseInfluence && dist > 0) {
                    const force = (mouseInfluence - dist) / mouseInfluence;
                    const nx = dx / dist;
                    const ny = dy / dist;
                    const g = force * (gravityStrength * 0.001);
                    if (mouseGravity === 'attract') {
                        p_0.vx += nx * g;
                        p_0.vy += ny * g;
                    } else if (mouseGravity === 'repel') {
                        p_0.vx -= nx * g;
                        p_0.vy -= ny * g;
                    }
                    p_0.opacity = Math.min(1, p_0.baseOpacity + force * 0.4);
                    const targetGlow = 1 + force * 2;
                    const currentGlow = p_0.glowMultiplier || 1;
                    if (glowAnimation === 'instant') {
                        p_0.glowMultiplier = targetGlow;
                    } else if (glowAnimation === 'ease') {
                        const ease = 0.15;
                        p_0.glowMultiplier = currentGlow + (targetGlow - currentGlow) * ease;
                    } else {
                        const spring = (targetGlow - currentGlow) * 0.2;
                        const damping = 0.85;
                        p_0.glowVelocity = (p_0.glowVelocity || 0) * damping + spring;
                        p_0.glowMultiplier = currentGlow + (p_0.glowVelocity || 0);
                    }
                } else {
                    p_0.opacity = Math.max(p_0.baseOpacity * 0.3, p_0.opacity - 0.02);
                    const targetGlow_0 = 1;
                    const currentGlow_0 = p_0.glowMultiplier || 1;
                    if (glowAnimation === 'instant') {
                        p_0.glowMultiplier = targetGlow_0;
                    } else if (glowAnimation === 'ease') {
                        const ease_0 = 0.08;
                        p_0.glowMultiplier = Math.max(1, currentGlow_0 + (targetGlow_0 - currentGlow_0) * ease_0);
                    } else {
                        const spring_0 = (targetGlow_0 - currentGlow_0) * 0.15;
                        const damping_0 = 0.9;
                        p_0.glowVelocity = (p_0.glowVelocity || 0) * damping_0 + spring_0;
                        p_0.glowMultiplier = Math.max(1, currentGlow_0 + (p_0.glowVelocity || 0));
                    }
                }
                if (starsInteraction) {
                    for(let j = i + 1; j < starsRef.current.length; j++){
                        const o = starsRef.current[j];
                        const dx2 = o.x - p_0.x;
                        const dy2 = o.y - p_0.y;
                        const d = Math.hypot(dx2, dy2);
                        const minD = p_0.size + o.size + 5;
                        if (d < minD && d > 0) {
                            if (starsInteractionType === 'bounce') {
                                const nx_0 = dx2 / d;
                                const ny_0 = dy2 / d;
                                const rvx = p_0.vx - o.vx;
                                const rvy = p_0.vy - o.vy;
                                const speed_0 = rvx * nx_0 + rvy * ny_0;
                                if (speed_0 < 0) continue;
                                const impulse = 2 * speed_0 / (p_0.mass + o.mass);
                                p_0.vx -= impulse * o.mass * nx_0;
                                p_0.vy -= impulse * o.mass * ny_0;
                                o.vx += impulse * p_0.mass * nx_0;
                                o.vy += impulse * p_0.mass * ny_0;
                                const overlap = minD - d;
                                const sx = nx_0 * overlap * 0.5;
                                const sy = ny_0 * overlap * 0.5;
                                p_0.x -= sx;
                                p_0.y -= sy;
                                o.x += sx;
                                o.y += sy;
                            } else {
                                const mergeForce = (minD - d) / minD;
                                p_0.glowMultiplier = (p_0.glowMultiplier || 1) + mergeForce * 0.5;
                                o.glowMultiplier = (o.glowMultiplier || 1) + mergeForce * 0.5;
                                const af = mergeForce * 0.01;
                                p_0.vx += dx2 * af;
                                p_0.vy += dy2 * af;
                                o.vx -= dx2 * af;
                                o.vy -= dy2 * af;
                            }
                        }
                    }
                }
                p_0.x += p_0.vx;
                p_0.y += p_0.vy;
                p_0.vx += (Math.random() - 0.5) * 0.001;
                p_0.vy += (Math.random() - 0.5) * 0.001;
                p_0.vx *= 0.999;
                p_0.vy *= 0.999;
                if (p_0.x < 0) p_0.x = w_1;
                if (p_0.x > w_1) p_0.x = 0;
                if (p_0.y < 0) p_0.y = h_1;
                if (p_0.y > h_1) p_0.y = 0;
            }
        }
    }["GravityStarsBackground.useCallback[updateStars]"], [
        canvasSize.width,
        canvasSize.height,
        mouseInfluence,
        mouseGravity,
        gravityStrength,
        glowAnimation,
        starsInteraction,
        starsInteractionType
    ]);
    const drawStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[drawStars]": (ctx)=>{
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            const color = readColor();
            for (const p_1 of starsRef.current){
                ctx.save();
                ctx.shadowColor = color;
                ctx.shadowBlur = glowIntensity * (p_1.glowMultiplier || 1) * 2;
                ctx.globalAlpha = p_1.opacity;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(p_1.x * dpr, p_1.y * dpr, p_1.size * dpr, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
    }["GravityStarsBackground.useCallback[drawStars]"], [
        dpr,
        glowIntensity,
        readColor
    ]);
    const animate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "GravityStarsBackground.useCallback[animate]": ()=>{
            const canvas_1 = canvasRef.current;
            if (!canvas_1) return;
            const ctx_0 = canvas_1.getContext('2d');
            if (!ctx_0) return;
            updateStars();
            drawStars(ctx_0);
            animRef.current = requestAnimationFrame(animate);
        }
    }["GravityStarsBackground.useCallback[animate]"], [
        updateStars,
        drawStars
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GravityStarsBackground.useEffect": ()=>{
            resizeCanvas();
            const container_0 = containerRef.current;
            const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resizeCanvas) : null;
            if (container_0 && ro) ro.observe(container_0);
            const onResize = {
                "GravityStarsBackground.useEffect.onResize": ()=>resizeCanvas()
            }["GravityStarsBackground.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            return ({
                "GravityStarsBackground.useEffect": ()=>{
                    window.removeEventListener('resize', onResize);
                    if (ro && container_0) ro.disconnect();
                }
            })["GravityStarsBackground.useEffect"];
        }
    }["GravityStarsBackground.useEffect"], [
        resizeCanvas
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GravityStarsBackground.useEffect": ()=>{
            if (starsRef.current.length === 0) {
                initStars(canvasSize.width, canvasSize.height);
            } else {
                starsRef.current.forEach({
                    "GravityStarsBackground.useEffect": (p_2)=>{
                        p_2.baseOpacity = starsOpacity;
                        p_2.opacity = starsOpacity;
                        const spd = Math.hypot(p_2.vx, p_2.vy);
                        if (spd > 0) {
                            const ratio = movementSpeed / spd;
                            p_2.vx *= ratio;
                            p_2.vy *= ratio;
                        }
                    }
                }["GravityStarsBackground.useEffect"]);
            }
        }
    }["GravityStarsBackground.useEffect"], [
        starsCount,
        starsOpacity,
        movementSpeed,
        canvasSize.width,
        canvasSize.height,
        initStars
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "GravityStarsBackground.useEffect": ()=>{
            if (animRef.current) cancelAnimationFrame(animRef.current);
            animRef.current = requestAnimationFrame(animate);
            return ({
                "GravityStarsBackground.useEffect": ()=>{
                    if (animRef.current) cancelAnimationFrame(animRef.current);
                    animRef.current = null;
                }
            })["GravityStarsBackground.useEffect"];
        }
    }["GravityStarsBackground.useEffect"], [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-slot": "gravity-stars-background",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative size-full overflow-hidden', className),
        onMouseMove: (e_0)=>handlePointerMove(e_0),
        onTouchMove: (e_1)=>handlePointerMove(e_1),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "block w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx",
            lineNumber: 271,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx",
        lineNumber: 270,
        columnNumber: 10
    }, this);
}
_s(GravityStarsBackground, "LKc4nkRmFUZpFg7Nhe+n0SdfgNQ=");
_c = GravityStarsBackground;
;
var _c;
__turbopack_context__.k.register(_c, "GravityStarsBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/personalwebsite.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonalWebsite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$gravity$2d$stars$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ── DATA ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        id: "01",
        title: "Project One",
        description: "A short glimpse at what this does and what drew you to build it.",
        tags: [
            "React",
            "WebGL"
        ],
        href: "#",
        glow: "#a78bfa"
    },
    {
        id: "02",
        title: "Project Two",
        description: "Something that challenged you and taught you something new.",
        tags: [
            "Node.js",
            "API"
        ],
        href: "#",
        glow: "#67e8f9"
    },
    {
        id: "03",
        title: "Project Three",
        description: "An experiment, a side project, or something just for fun.",
        tags: [
            "Design",
            "CSS"
        ],
        href: "#",
        glow: "#f0abfc"
    }
];
const SKILLS = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "WebGL",
    "Figma",
    "Git",
    "CSS"
];
// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52";
    }
    const threshold = t0 === undefined ? 0.12 : t0;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== threshold) {
        t1 = ({
            "useInView[useEffect()]": ()=>{
                const obs = new IntersectionObserver((t2)=>{
                    const [e] = t2;
                    if (e.isIntersecting) {
                        setInView(true);
                    }
                }, {
                    threshold
                });
                if (ref.current) {
                    obs.observe(ref.current);
                }
                return ()=>obs.disconnect();
            }
        })["useInView[useEffect()]"];
        $[1] = threshold;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== inView) {
        t3 = [
            ref,
            inView
        ];
        $[4] = inView;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
// ── ANIMATION WRAPPER ─────────────────────────────────────────────────────────
function Reveal(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52";
    }
    const { children, delay: t1, style: t2 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    let t3;
    if ($[1] !== t2) {
        t3 = t2 === undefined ? {} : t2;
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const style = t3;
    const [ref, inView] = useInView();
    const t4 = inView ? 1 : 0;
    const t5 = inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.98)";
    const t6 = `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`;
    let t7;
    if ($[3] !== style || $[4] !== t4 || $[5] !== t5 || $[6] !== t6) {
        t7 = {
            opacity: t4,
            transform: t5,
            transition: t6,
            ...style
        };
        $[3] = style;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== children || $[9] !== ref || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            style: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = ref;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    return t8;
}
_s1(Reveal, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c = Reveal;
// ── CHROME STAR SVG ───────────────────────────────────────────────────────────
function ChromeStar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52";
    }
    const { size: t1, rotate: t2, style: t3 } = t0;
    const size = t1 === undefined ? 48 : t1;
    const rotate = t2 === undefined ? 0 : t2;
    let t4;
    if ($[1] !== t3) {
        t4 = t3 === undefined ? {} : t3;
        $[1] = t3;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const style = t4;
    const t5 = `rotate(${rotate}deg)`;
    let t6;
    if ($[3] !== style || $[4] !== t5) {
        t6 = {
            transform: t5,
            ...style
        };
        $[3] = style;
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    const t7 = `cg-${rotate}`;
    let t10;
    let t11;
    let t8;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
            offset: "0%",
            stopColor: "#e2e8f0"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
            offset: "35%",
            stopColor: "#94a3b8"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
            offset: "65%",
            stopColor: "#cbd5e1"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
            offset: "100%",
            stopColor: "#475569"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[6] = t10;
        $[7] = t11;
        $[8] = t8;
        $[9] = t9;
    } else {
        t10 = $[6];
        t11 = $[7];
        t8 = $[8];
        t9 = $[9];
    }
    let t12;
    if ($[10] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: t7,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "100%",
                children: [
                    t8,
                    t9,
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 203,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[10] = t7;
        $[11] = t12;
    } else {
        t12 = $[11];
    }
    const t13 = `url(#cg-${rotate})`;
    let t14;
    if ($[12] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z",
            fill: t13,
            stroke: "rgba(255,255,255,0.3)",
            strokeWidth: "0.5"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[12] = t13;
        $[13] = t14;
    } else {
        t14 = $[13];
    }
    let t15;
    if ($[14] !== size || $[15] !== t12 || $[16] !== t14 || $[17] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 100 100",
            style: t6,
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[14] = size;
        $[15] = t12;
        $[16] = t14;
        $[17] = t6;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    return t15;
}
_c1 = ChromeStar;
// ── SMALL DECORATIVE STAR ─────────────────────────────────────────────────────
function MiniStar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52";
    }
    const { style: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? {} : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const style = t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                id: "mstar",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "100%",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "0%",
                        stopColor: "#e2e8f0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 256,
                        columnNumber: 79
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                        offset: "100%",
                        stopColor: "#7dd3fc"
                    }, void 0, false, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 256,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 256,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 256,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z",
            fill: "url(#mstar)"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 257,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] !== style) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 100 100",
            style: style,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[5] = style;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c2 = MiniStar;
// ── CRESCENT ORNAMET ─────────────────────────────────────────────────────────
function ChromeCrescent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52";
    }
    const { size: t1, style: t2 } = t0;
    const size = t1 === undefined ? 60 : t1;
    let t3;
    if ($[1] !== t2) {
        t3 = t2 === undefined ? {} : t2;
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const style = t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
            id: "crescent-g",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "0%",
                    stopColor: "#e2e8f0",
                    stopOpacity: "0.9"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 300,
                    columnNumber: 78
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "50%",
                    stopColor: "#94a3b8"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 300,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: "100%",
                    stopColor: "#334155"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 300,
                    columnNumber: 177
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 300,
            columnNumber: 10
        }, this);
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    let t6;
    let t7;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "ring-g",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "rgba(200,220,255,0.8)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 309,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "rgba(100,140,200,0.3)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 309,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 309,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 309,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M70 18 A35 35 0 1 0 70 82 A25 25 0 1 1 70 18 Z",
            fill: "url(#crescent-g)",
            stroke: "rgba(255,255,255,0.2)",
            strokeWidth: "0.5"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 310,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            cx: "50",
            cy: "50",
            rx: "42",
            ry: "14",
            fill: "none",
            stroke: "url(#ring-g)",
            strokeWidth: "2",
            transform: "rotate(-30 50 50)"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 311,
            columnNumber: 10
        }, this);
        $[4] = t5;
        $[5] = t6;
        $[6] = t7;
    } else {
        t5 = $[4];
        t6 = $[5];
        t7 = $[6];
    }
    let t8;
    if ($[7] !== size || $[8] !== style) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 100 100",
            style: style,
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 322,
            columnNumber: 10
        }, this);
        $[7] = size;
        $[8] = style;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}
_c3 = ChromeCrescent;
function PersonalWebsite() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(95);
    if ($[0] !== "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52") {
        for(let $i = 0; $i < 95; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "288710e7b99dd81aba6d9e1daceccded047ce39511045ae39cf4186f10fa9f52";
    }
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            email: "",
            message: ""
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PersonalWebsite[useEffect()]": ()=>{
                const onScroll = {
                    "PersonalWebsite[useEffect() > onScroll]": ()=>setScrollY(window.scrollY)
                }["PersonalWebsite[useEffect() > onScroll]"];
                const onMouse = {
                    "PersonalWebsite[useEffect() > onMouse]": (e)=>setMousePos({
                            x: e.clientX,
                            y: e.clientY
                        })
                }["PersonalWebsite[useEffect() > onMouse]"];
                window.addEventListener("scroll", onScroll);
                window.addEventListener("mousemove", onMouse);
                return ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("mousemove", onMouse);
                };
            }
        })["PersonalWebsite[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "PersonalWebsite[scrollTo]": (id)=>{
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth"
                });
                setActiveSection(id);
            }
        })["PersonalWebsite[scrollTo]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const scrollTo = t4;
    const px = (mousePos.x / window.innerWidth - 0.5) * 24;
    const py = (mousePos.y / window.innerHeight - 0.5) * 24;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n    html { scroll-behavior: smooth; }\n\n    body {\n      font-family: 'Syne', sans-serif;\n      background: #05060f;\n      color: #e2e8f0;\n      overflow-x: hidden;\n    }\n\n    ::selection { background: rgba(167,139,250,0.35); color: #f0e8ff; }\n\n    @keyframes heroIn {\n      from { opacity: 0; transform: translateY(24px); }\n      to   { opacity: 1; transform: translateY(0);    }\n    }\n    @keyframes spinSlow { to { transform: rotate(360deg); } }\n    @keyframes pulse { 0%,100%{opacity:0.4;} 50%{opacity:0.85;} }\n    @keyframes orbitRing {\n      from { transform: rotate(0deg); }\n      to   { transform: rotate(360deg); }\n    }\n    @keyframes floatY {\n      0%,100% { transform: translateY(0px); }\n      50%     { transform: translateY(-12px); }\n    }\n    @keyframes shimmer {\n      0%   { background-position: -400px 0; }\n      100% { background-position:  400px 0; }\n    }\n    @keyframes glowPulse {\n      0%,100% { text-shadow: 0 0 30px rgba(167,139,250,0.4), 0 0 60px rgba(167,139,250,0.1); }\n      50%      { text-shadow: 0 0 50px rgba(167,139,250,0.6), 0 0 80px rgba(167,139,250,0.2); }\n    }\n\n    .nav-link {\n      background: none; border: none; cursor: pointer;\n      font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 500;\n      color: rgba(203,213,225,0.6); letter-spacing: 0.06em;\n      text-transform: uppercase; padding: 6px 0;\n      border-bottom: 1px solid transparent;\n      transition: color 0.2s, border-color 0.2s;\n    }\n    .nav-link:hover, .nav-link.active {\n      color: #e2e8f0;\n      border-bottom-color: rgba(167,139,250,0.6);\n    }\n\n    .project-card {\n      background: rgba(255,255,255,0.025);\n      border: 1px solid rgba(255,255,255,0.07);\n      border-radius: 16px;\n      padding: 32px;\n      transition: transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.35s, background 0.35s;\n      position: relative;\n      overflow: hidden;\n    }\n    .project-card:hover {\n      transform: translateY(-6px);\n      background: rgba(255,255,255,0.045);\n    }\n\n    .glow-line {\n      position: absolute;\n      top: 0; left: 0; right: 0;\n      height: 1px;\n      background: linear-gradient(90deg, transparent, var(--glow-color, #a78bfa), transparent);\n      opacity: 0;\n      transition: opacity 0.35s;\n    }\n    .project-card:hover .glow-line { opacity: 1; }\n\n    .skill-chip {\n      font-family: 'Syne', sans-serif;\n      font-size: 11px; font-weight: 600;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      color: rgba(148,163,184,0.9);\n      border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 20px;\n      padding: 6px 16px;\n      background: rgba(255,255,255,0.03);\n      transition: all 0.2s;\n    }\n    .skill-chip:hover {\n      border-color: rgba(167,139,250,0.4);\n      color: #c4b5fd;\n      background: rgba(167,139,250,0.06);\n    }\n\n    .input-field {\n      width: 100%;\n      background: rgba(255,255,255,0.03);\n      border: 1px solid rgba(255,255,255,0.1);\n      border-radius: 10px;\n      padding: 14px 18px;\n      font-family: 'Syne', sans-serif;\n      font-size: 14px;\n      color: #e2e8f0;\n      outline: none;\n      transition: border-color 0.2s, background 0.2s;\n    }\n    .input-field:focus {\n      border-color: rgba(167,139,250,0.5);\n      background: rgba(167,139,250,0.04);\n    }\n    .input-field::placeholder { color: rgba(148,163,184,0.4); }\n\n    .send-btn {\n      background: linear-gradient(135deg, rgba(167,139,250,0.15), rgba(103,232,249,0.1));\n      border: 1px solid rgba(167,139,250,0.35);\n      border-radius: 40px;\n      padding: 15px 40px;\n      color: #c4b5fd;\n      font-family: 'Syne', sans-serif;\n      font-size: 14px; font-weight: 600;\n      letter-spacing: 0.06em; text-transform: uppercase;\n      cursor: pointer;\n      transition: all 0.25s;\n    }\n    .send-btn:hover {\n      background: linear-gradient(135deg, rgba(167,139,250,0.28), rgba(103,232,249,0.18));\n      border-color: rgba(167,139,250,0.6);\n      color: #ede9fe;\n      transform: translateY(-2px);\n    }\n\n    .tag-pill {\n      font-size: 11px; font-weight: 600;\n      letter-spacing: 0.08em; text-transform: uppercase;\n      padding: 4px 12px;\n      border-radius: 20px;\n      background: rgba(255,255,255,0.06);\n      color: rgba(148,163,184,0.8);\n      border: 1px solid rgba(255,255,255,0.08);\n    }\n\n    .section-label {\n      font-size: 11px; font-weight: 700;\n      letter-spacing: 0.2em; text-transform: uppercase;\n      color: rgba(167,139,250,0.8);\n      margin-bottom: 16px;\n    }\n\n    .view-link {\n      font-size: 12px; font-weight: 600;\n      letter-spacing: 0.06em; text-transform: uppercase;\n      color: rgba(167,139,250,0.7);\n      text-decoration: none;\n      transition: color 0.2s;\n    }\n    .view-link:hover { color: #c4b5fd; }\n\n    .divider {\n      width: 100%; height: 1px;\n      background: linear-gradient(90deg, transparent, rgba(167,139,250,0.2), rgba(103,232,249,0.2), transparent);\n    }\n  "
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 417,
            columnNumber: 10
        }, this);
        t6 = {
            background: "#05060f",
            minHeight: "100vh",
            position: "relative"
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    const t7 = scrollY > 60 ? "rgba(5,6,15,0.85)" : "transparent";
    const t8 = scrollY > 60 ? "blur(20px)" : "none";
    const t9 = scrollY > 60 ? "1px solid rgba(255,255,255,0.05)" : "none";
    let t10;
    if ($[8] !== t7 || $[9] !== t8 || $[10] !== t9) {
        t10 = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            padding: "0 2.5rem",
            background: t7,
            backdropFilter: t8,
            borderBottom: t9,
            transition: "all 0.4s"
        };
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            maxWidth: 1000,
            margin: "0 auto",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        };
        t12 = {
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer"
        };
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    let t14;
    let t15;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t12,
            onClick: _PersonalWebsiteDivOnClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStar, {
                    style: {
                        animation: "spinSlow 8s linear infinite"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 480,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#e2e8f0",
                        letterSpacing: "-0.01em"
                    },
                    children: "Your Name"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 482,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        t14 = {
            display: "flex",
            gap: 36
        };
        t15 = [
            "about",
            "projects",
            "contact"
        ];
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
    } else {
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] !== activeSection) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t14,
                    children: t15.map({
                        "PersonalWebsite[(anonymous)()]": (s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `nav-link${activeSection === s ? " active" : ""}`,
                                onClick: {
                                    "PersonalWebsite[(anonymous)() > <button>.onClick]": ()=>scrollTo(s)
                                }["PersonalWebsite[(anonymous)() > <button>.onClick]"],
                                children: s
                            }, s, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 505,
                                columnNumber: 50
                            }, this)
                    }["PersonalWebsite[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 504,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[17] = activeSection;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] !== t10 || $[20] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            style: t10,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t16;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "0 2.5rem",
            overflow: "hidden"
        };
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$gravity$2d$stars$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GravityStarsBackground"], {
            className: "absolute inset-0",
            style: {
                position: "absolute",
                inset: 0,
                zIndex: 0
            }
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        t20 = {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1
        };
        $[23] = t19;
        $[24] = t20;
    } else {
        t19 = $[23];
        t20 = $[24];
    }
    const t21 = `translate(${px * 0.5}px, ${py * 0.5}px)`;
    let t22;
    if ($[25] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: "20%",
                left: "55%",
                width: 600,
                height: 600,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)",
                transform: t21,
                transition: "transform 0.12s ease-out"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[25] = t21;
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    const t23 = `translate(${-px * 0.3}px, ${-py * 0.3}px)`;
    let t24;
    if ($[27] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: "50%",
                left: "30%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 70%)",
                transform: t23,
                transition: "transform 0.12s ease-out"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[27] = t23;
        $[28] = t24;
    } else {
        t24 = $[28];
    }
    let t25;
    if ($[29] !== t22 || $[30] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t20,
            children: [
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 597,
            columnNumber: 11
        }, this);
        $[29] = t22;
        $[30] = t24;
        $[31] = t25;
    } else {
        t25 = $[31];
    }
    const t26 = `translate(${px * 1.2}px, ${py * 1.2}px)`;
    let t27;
    if ($[32] !== t26) {
        t27 = {
            position: "absolute",
            top: "15%",
            right: "8%",
            zIndex: 2,
            transform: t26,
            transition: "transform 0.15s ease-out",
            animation: "floatY 6s ease-in-out infinite"
        };
        $[32] = t26;
        $[33] = t27;
    } else {
        t27 = $[33];
    }
    let t28;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
            size: 80,
            rotate: 12
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[34] = t28;
    } else {
        t28 = $[34];
    }
    let t29;
    if ($[35] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t27,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[35] = t27;
        $[36] = t29;
    } else {
        t29 = $[36];
    }
    const t30 = `translate(${px * 0.7}px, ${py * 0.7}px)`;
    let t31;
    if ($[37] !== t30) {
        t31 = {
            position: "absolute",
            bottom: "22%",
            right: "20%",
            zIndex: 2,
            transform: t30,
            transition: "transform 0.15s ease-out",
            animation: "floatY 8s 1s ease-in-out infinite"
        };
        $[37] = t30;
        $[38] = t31;
    } else {
        t31 = $[38];
    }
    let t32;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
            size: 44,
            rotate: -20
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 655,
            columnNumber: 11
        }, this);
        $[39] = t32;
    } else {
        t32 = $[39];
    }
    let t33;
    if ($[40] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t31,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 662,
            columnNumber: 11
        }, this);
        $[40] = t31;
        $[41] = t33;
    } else {
        t33 = $[41];
    }
    const t34 = `translate(${px}px, ${py}px)`;
    let t35;
    if ($[42] !== t34) {
        t35 = {
            position: "absolute",
            top: "35%",
            right: "30%",
            zIndex: 2,
            transform: t34,
            transition: "transform 0.15s ease-out",
            animation: "floatY 7s 2s ease-in-out infinite"
        };
        $[42] = t34;
        $[43] = t35;
    } else {
        t35 = $[43];
    }
    let t36;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeCrescent, {
            size: 90
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 687,
            columnNumber: 11
        }, this);
        $[44] = t36;
    } else {
        t36 = $[44];
    }
    let t37;
    if ($[45] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[45] = t35;
        $[46] = t37;
    } else {
        t37 = $[46];
    }
    let t38;
    let t39;
    let t40;
    let t41;
    let t42;
    let t43;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                bottom: "15%",
                left: "5%",
                zIndex: 2,
                opacity: 0.5,
                animation: "pulse 4s ease-in-out infinite"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                size: 28,
                rotate: 45
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 714,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        t39 = {
            maxWidth: 1000,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 3,
            paddingTop: 80
        };
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
                animation: "heroIn 0.7s ease both"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 32,
                        height: 1,
                        background: "rgba(167,139,250,0.6)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 729,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "rgba(167,139,250,0.9)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase"
                    },
                    children: "Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 733,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 723,
            columnNumber: 11
        }, this);
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: {
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                fontWeight: 800,
                color: "#f1f5f9",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                marginBottom: 12,
                animation: "heroIn 0.75s 0.1s ease both",
                animationFillMode: "both",
                opacity: 0
            },
            children: "Your Name"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 741,
            columnNumber: 11
        }, this);
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            style: {
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "rgba(148,163,184,0.8)",
                marginBottom: 40,
                maxWidth: 520,
                lineHeight: 1.5,
                animation: "heroIn 0.75s 0.22s ease both",
                animationFillMode: "both",
                opacity: 0
            },
            children: "Developer & maker \u2014 building things that feel alive."
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 753,
            columnNumber: 11
        }, this);
        t43 = {
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            animation: "heroIn 0.75s 0.34s ease both",
            animationFillMode: "both",
            opacity: 0
        };
        $[47] = t38;
        $[48] = t39;
        $[49] = t40;
        $[50] = t41;
        $[51] = t42;
        $[52] = t43;
    } else {
        t38 = $[47];
        t39 = $[48];
        t40 = $[49];
        t41 = $[50];
        t42 = $[51];
        t43 = $[52];
    }
    let t44;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t39,
            children: [
                t40,
                t41,
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t43,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "send-btn",
                            onClick: {
                                "PersonalWebsite[<button>.onClick]": ()=>scrollTo("projects")
                            }["PersonalWebsite[<button>.onClick]"],
                            style: {
                                fontSize: 13
                            },
                            children: "View work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 790,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "PersonalWebsite[<button>.onClick]": ()=>scrollTo("about")
                            }["PersonalWebsite[<button>.onClick]"],
                            style: {
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "rgba(148,163,184,0.6)",
                                padding: "15px 0",
                                transition: "color 0.2s"
                            },
                            onMouseEnter: _PersonalWebsiteButtonOnMouseEnter,
                            onMouseLeave: _PersonalWebsiteButtonOnMouseLeave,
                            children: "About me →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 794,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 790,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 790,
            columnNumber: 11
        }, this);
        $[53] = t44;
    } else {
        t44 = $[53];
    }
    let t45;
    if ($[54] !== t25 || $[55] !== t29 || $[56] !== t33 || $[57] !== t37) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t18,
            children: [
                t19,
                t25,
                t29,
                t33,
                t37,
                t38,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 815,
            columnNumber: 11
        }, this);
        $[54] = t25;
        $[55] = t29;
        $[56] = t33;
        $[57] = t37;
        $[58] = t45;
    } else {
        t45 = $[58];
    }
    let t46;
    let t47;
    let t48;
    let t49;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            padding: "120px 2.5rem",
            position: "relative"
        };
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 838,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 833,
            columnNumber: 11
        }, this);
        t48 = {
            maxWidth: 1000,
            margin: "0 auto"
        };
        t49 = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start"
        };
        $[59] = t46;
        $[60] = t47;
        $[61] = t48;
        $[62] = t49;
    } else {
        t46 = $[59];
        t47 = $[60];
        t48 = $[61];
        t49 = $[62];
    }
    let t50;
    let t51;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "section-label",
            children: "About"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 862,
            columnNumber: 11
        }, this);
        t51 = {
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: 32
        };
        $[63] = t50;
        $[64] = t51;
    } else {
        t50 = $[63];
        t51 = $[64];
    }
    let t52;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
            children: [
                t50,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: t51,
                    children: [
                        "The person",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 880,
                            columnNumber: 50
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Libre Baskerville', serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: "rgba(167,139,250,0.85)"
                            },
                            children: "behind the work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 880,
                            columnNumber: 56
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 880,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 880,
            columnNumber: 11
        }, this);
        $[65] = t52;
    } else {
        t52 = $[65];
    }
    let t53;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    delay: 0.1,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 16,
                                lineHeight: 1.8,
                                color: "rgba(148,163,184,0.85)",
                                marginBottom: 20
                            },
                            children: "I'm a developer based in [Your City]. I care about the craft — the small interactions, the details that take something from good to memorable."
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 892,
                            columnNumber: 41
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 16,
                                lineHeight: 1.8,
                                color: "rgba(148,163,184,0.85)"
                            },
                            children: "When I'm not building things, you'll find me [hobby], [hobby], or somewhere between curiosity and obsession."
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 898,
                            columnNumber: 158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 892,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 892,
            columnNumber: 11
        }, this);
        $[66] = t53;
    } else {
        t53 = $[66];
    }
    let t54;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
            delay: 0.15,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(100,116,139,0.8)",
                        marginBottom: 20
                    },
                    children: "Technologies"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 910,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10
                    },
                    children: SKILLS.map(_PersonalWebsiteSKILLSMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 918,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 910,
            columnNumber: 11
        }, this);
        $[67] = t54;
    } else {
        t54 = $[67];
    }
    let t55;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = {
            marginTop: 48,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            gap: 20
        };
        $[68] = t55;
    } else {
        t55 = $[68];
    }
    let t56;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            style: t46,
            children: [
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t48,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t49,
                        children: [
                            t53,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t54,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: 0.25,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: t55,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                                    size: 36,
                                                    rotate: 5,
                                                    style: {
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 945,
                                                    columnNumber: 135
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'Syne', sans-serif",
                                                                fontSize: 13,
                                                                fontWeight: 700,
                                                                color: "#e2e8f0",
                                                                marginBottom: 4
                                                            },
                                                            children: "Open to opportunities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 947,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'Syne', sans-serif",
                                                                fontSize: 12,
                                                                color: "rgba(148,163,184,0.6)"
                                                            },
                                                            children: "Let's build something together."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 953,
                                                            columnNumber: 47
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 947,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 945,
                                            columnNumber: 118
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 945,
                                        columnNumber: 97
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 945,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 945,
                        columnNumber: 65
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 945,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 945,
            columnNumber: 11
        }, this);
        $[69] = t56;
    } else {
        t56 = $[69];
    }
    let t57;
    let t58;
    let t59;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = {
            padding: "100px 2.5rem",
            position: "relative"
        };
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 975,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 970,
            columnNumber: 11
        }, this);
        t59 = {
            maxWidth: 1000,
            margin: "0 auto"
        };
        $[70] = t57;
        $[71] = t58;
        $[72] = t59;
    } else {
        t57 = $[70];
        t58 = $[71];
        t59 = $[72];
    }
    let t60;
    let t61;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "section-label",
            children: "Selected work"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 991,
            columnNumber: 11
        }, this);
        t61 = {
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: 56
        };
        $[73] = t60;
        $[74] = t61;
    } else {
        t60 = $[73];
        t61 = $[74];
    }
    let t62;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "projects",
            style: t57,
            children: [
                t58,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t59,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            children: [
                                t60,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: t61,
                                    children: [
                                        "Things I've",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Libre Baskerville', serif",
                                                fontStyle: "italic",
                                                fontWeight: 400,
                                                color: "rgba(103,232,249,0.8)"
                                            },
                                            children: "built"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 1009,
                                            columnNumber: 113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 1009,
                                    columnNumber: 81
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1009,
                            columnNumber: 68
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gap: 20
                            },
                            children: PROJECTS.map(_PersonalWebsitePROJECTSMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1014,
                            columnNumber: 42
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1009,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1009,
            columnNumber: 11
        }, this);
        $[75] = t62;
    } else {
        t62 = $[75];
    }
    let t63;
    let t64;
    let t65;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = {
            padding: "100px 2.5rem 80px",
            position: "relative"
        };
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 1035,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1030,
            columnNumber: 11
        }, this);
        t65 = {
            maxWidth: 600,
            margin: "0 auto"
        };
        $[76] = t63;
        $[77] = t64;
        $[78] = t65;
    } else {
        t63 = $[76];
        t64 = $[77];
        t65 = $[78];
    }
    let t66;
    let t67;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "section-label",
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1051,
            columnNumber: 11
        }, this);
        t67 = {
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: 12
        };
        $[79] = t66;
        $[80] = t67;
    } else {
        t66 = $[79];
        t67 = $[80];
    }
    let t68;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
            children: [
                t66,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: t67,
                    children: [
                        "Let's",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Libre Baskerville', serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: "rgba(167,139,250,0.85)"
                            },
                            children: "connect"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1069,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1069,
                    columnNumber: 24
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 16,
                        color: "rgba(148,163,184,0.7)",
                        marginBottom: 48,
                        lineHeight: 1.7
                    },
                    children: "Whether it's a project, a collab, or just a hello — I'd love to hear from you."
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1074,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1069,
            columnNumber: 11
        }, this);
        $[81] = t68;
    } else {
        t68 = $[81];
    }
    let t69;
    if ($[82] !== form || $[83] !== sent) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            style: t63,
            children: [
                t64,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t65,
                    children: [
                        t68,
                        sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "rgba(167,139,250,0.07)",
                                    border: "1px solid rgba(167,139,250,0.2)",
                                    borderRadius: 16,
                                    padding: "40px",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                        size: 40,
                                        style: {
                                            margin: "0 auto 16px",
                                            display: "block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 1093,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Libre Baskerville', serif",
                                            fontSize: "1.1rem",
                                            fontStyle: "italic",
                                            color: "rgba(196,181,253,0.9)"
                                        },
                                        children: "Message received. Talk soon."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 1096,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 1087,
                                columnNumber: 88
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1087,
                            columnNumber: 80
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 16
                                },
                                children: [
                                    [
                                        {
                                            id: "name",
                                            placeholder: "Your name",
                                            type: "text"
                                        },
                                        {
                                            id: "email",
                                            placeholder: "Email address",
                                            type: "email"
                                        }
                                    ].map({
                                        "PersonalWebsite[(anonymous)()]": (t70)=>{
                                            const { id: id_0, placeholder, type } = t70;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input-field",
                                                type: type,
                                                placeholder: placeholder,
                                                value: form[id_0],
                                                onChange: {
                                                    "PersonalWebsite[(anonymous)() > <input>.onChange]": (e_2)=>setForm({
                                                            "PersonalWebsite[(anonymous)() > <input>.onChange > setForm()]": (p)=>({
                                                                    ...p,
                                                                    [id_0]: e_2.target.value
                                                                })
                                                        }["PersonalWebsite[(anonymous)() > <input>.onChange > setForm()]"])
                                                }["PersonalWebsite[(anonymous)() > <input>.onChange]"]
                                            }, id_0, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 1120,
                                                columnNumber: 24
                                            }, this);
                                        }
                                    }["PersonalWebsite[(anonymous)()]"]),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "input-field",
                                        rows: 5,
                                        placeholder: "Your message",
                                        value: form.message,
                                        onChange: {
                                            "PersonalWebsite[<textarea>.onChange]": (e_3)=>setForm({
                                                    "PersonalWebsite[<textarea>.onChange > setForm()]": (p_0)=>({
                                                            ...p_0,
                                                            message: e_3.target.value
                                                        })
                                                }["PersonalWebsite[<textarea>.onChange > setForm()]"])
                                        }["PersonalWebsite[<textarea>.onChange]"],
                                        style: {
                                            resize: "vertical"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 1129,
                                        columnNumber: 50
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "send-btn",
                                            onClick: {
                                                "PersonalWebsite[<button>.onClick]": ()=>setSent(true)
                                            }["PersonalWebsite[<button>.onClick]"],
                                            children: "Send message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 1138,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 1138,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 1101,
                                columnNumber: 86
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1101,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1087,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1087,
            columnNumber: 11
        }, this);
        $[82] = form;
        $[83] = sent;
        $[84] = t69;
    } else {
        t69 = $[84];
    }
    let t70;
    let t71;
    let t72;
    let t73;
    let t74;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = {
            padding: "32px 2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.05)"
        };
        t71 = {
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        };
        t72 = {
            display: "flex",
            alignItems: "center",
            gap: 10
        };
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStar, {}, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1169,
            columnNumber: 11
        }, this);
        t74 = {
            fontFamily: "'Syne', sans-serif",
            fontSize: 13,
            color: "rgba(100,116,139,0.7)"
        };
        $[85] = t70;
        $[86] = t71;
        $[87] = t72;
        $[88] = t73;
        $[89] = t74;
    } else {
        t70 = $[85];
        t71 = $[86];
        t72 = $[87];
        t73 = $[88];
        t74 = $[89];
    }
    let t75;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            style: t70,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t71,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t72,
                        children: [
                            t73,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: t74,
                                children: [
                                    "Your Name · ",
                                    new Date().getFullYear()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 1189,
                                columnNumber: 70
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 1189,
                        columnNumber: 48
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 11,
                            color: "rgba(100,116,139,0.4)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase"
                        },
                        children: "Built with care"
                    }, void 0, false, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 1189,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 1189,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1189,
            columnNumber: 11
        }, this);
        $[90] = t75;
    } else {
        t75 = $[90];
    }
    let t76;
    if ($[91] !== t17 || $[92] !== t45 || $[93] !== t69) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t6,
                    children: [
                        t17,
                        t45,
                        t56,
                        t62,
                        t69,
                        t75
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1202,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
        $[91] = t17;
        $[92] = t45;
        $[93] = t69;
        $[94] = t76;
    } else {
        t76 = $[94];
    }
    return t76;
}
_s2(PersonalWebsite, "ZvNAhpEWSDzjif/X6yV3o651y14=");
_c4 = PersonalWebsite;
function _PersonalWebsitePROJECTSMap(proj, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
        delay: i_0 * 0.1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "project-card",
            style: {
                "--glow-color": proj.glow
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glow-line"
                }, void 0, false, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1215,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: 24,
                        alignItems: "start"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 14,
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Syne', sans-serif",
                                                fontSize: 11,
                                                fontWeight: 700,
                                                color: "rgba(100,116,139,0.7)",
                                                letterSpacing: "0.12em"
                                            },
                                            children: proj.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 1225,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 24,
                                                height: 1,
                                                background: "rgba(100,116,139,0.3)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 1231,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 1220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        color: "#f1f5f9",
                                        marginBottom: 12,
                                        letterSpacing: "-0.01em"
                                    },
                                    children: proj.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 1235,
                                    columnNumber: 24
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize: 15,
                                        lineHeight: 1.7,
                                        color: "rgba(148,163,184,0.75)",
                                        marginBottom: 20
                                    },
                                    children: proj.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 1242,
                                    columnNumber: 31
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8
                                    },
                                    children: proj.tags.map(_PersonalWebsitePROJECTSMapProjTagsMap)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 1248,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1220,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: proj.href,
                            className: "view-link",
                            style: {
                                marginTop: 6,
                                whiteSpace: "nowrap"
                            },
                            children: "View →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 1251,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 1215,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/personalwebsite.jsx",
            lineNumber: 1213,
            columnNumber: 50
        }, this)
    }, proj.id, false, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 1213,
        columnNumber: 10
    }, this);
}
function _PersonalWebsitePROJECTSMapProjTagsMap(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tag-pill",
        children: t
    }, t, false, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 1257,
        columnNumber: 10
    }, this);
}
function _PersonalWebsiteSKILLSMap(s_0, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "skill-chip",
        style: {
            animationDelay: `${i * 0.05}s`
        },
        children: s_0
    }, s_0, false, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 1260,
        columnNumber: 10
    }, this);
}
function _PersonalWebsiteButtonOnMouseLeave(e_1) {
    return e_1.target.style.color = "rgba(148,163,184,0.6)";
}
function _PersonalWebsiteButtonOnMouseEnter(e_0) {
    return e_0.target.style.color = "#94a3b8";
}
function _PersonalWebsiteDivOnClick() {
    return window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "ChromeStar");
__turbopack_context__.k.register(_c2, "MiniStar");
__turbopack_context__.k.register(_c3, "ChromeCrescent");
__turbopack_context__.k.register(_c4, "PersonalWebsite");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0_~j12s._.js.map