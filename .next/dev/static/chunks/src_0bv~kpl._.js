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
]);

//# sourceMappingURL=src_0bv~kpl._.js.map