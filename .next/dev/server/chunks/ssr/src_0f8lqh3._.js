module.exports = [
"[project]/src/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GravityStarsBackground",
    ()=>GravityStarsBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function GravityStarsBackground({ starsCount = 75, starsSize = 2, starsOpacity = 0.75, glowIntensity = 15, glowAnimation = 'ease', movementSpeed = 0.3, mouseInfluence = 100, mouseGravity = 'attract', gravityStrength = 75, starsInteraction = false, starsInteractionType = 'bounce', className, ...props }) {
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const animRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const starsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const mouseRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        x: 0,
        y: 0
    });
    const [dpr, setDpr] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1);
    const [canvasSize, setCanvasSize] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        width: 800,
        height: 600
    });
    const readColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const el = containerRef.current;
        if (!el) return '#ffffff';
        const cs = getComputedStyle(el);
        return cs.color || '#ffffff';
    }, []);
    const initStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((w, h)=>{
        starsRef.current = Array.from({
            length: starsCount
        }).map(()=>{
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
        });
    }, [
        starsCount,
        movementSpeed,
        starsOpacity,
        starsSize
    ]);
    const redistributeStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((w, h)=>{
        starsRef.current.forEach((p)=>{
            p.x = Math.random() * w;
            p.y = Math.random() * h;
        });
    }, []);
    const resizeCanvas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
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
    }, [
        initStars,
        redistributeStars
    ]);
    const handlePointerMove = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((e)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
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
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }, []);
    const updateStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const w = canvasSize.width;
        const h = canvasSize.height;
        const mouse = mouseRef.current;
        for(let i = 0; i < starsRef.current.length; i++){
            const p = starsRef.current[i];
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist < mouseInfluence && dist > 0) {
                const force = (mouseInfluence - dist) / mouseInfluence;
                const nx = dx / dist;
                const ny = dy / dist;
                const g = force * (gravityStrength * 0.001);
                if (mouseGravity === 'attract') {
                    p.vx += nx * g;
                    p.vy += ny * g;
                } else if (mouseGravity === 'repel') {
                    p.vx -= nx * g;
                    p.vy -= ny * g;
                }
                p.opacity = Math.min(1, p.baseOpacity + force * 0.4);
                const targetGlow = 1 + force * 2;
                const currentGlow = p.glowMultiplier || 1;
                if (glowAnimation === 'instant') {
                    p.glowMultiplier = targetGlow;
                } else if (glowAnimation === 'ease') {
                    const ease = 0.15;
                    p.glowMultiplier = currentGlow + (targetGlow - currentGlow) * ease;
                } else {
                    const spring = (targetGlow - currentGlow) * 0.2;
                    const damping = 0.85;
                    p.glowVelocity = (p.glowVelocity || 0) * damping + spring;
                    p.glowMultiplier = currentGlow + (p.glowVelocity || 0);
                }
            } else {
                p.opacity = Math.max(p.baseOpacity * 0.3, p.opacity - 0.02);
                const targetGlow = 1;
                const currentGlow = p.glowMultiplier || 1;
                if (glowAnimation === 'instant') {
                    p.glowMultiplier = targetGlow;
                } else if (glowAnimation === 'ease') {
                    const ease = 0.08;
                    p.glowMultiplier = Math.max(1, currentGlow + (targetGlow - currentGlow) * ease);
                } else {
                    const spring = (targetGlow - currentGlow) * 0.15;
                    const damping = 0.9;
                    p.glowVelocity = (p.glowVelocity || 0) * damping + spring;
                    p.glowMultiplier = Math.max(1, currentGlow + (p.glowVelocity || 0));
                }
            }
            if (starsInteraction) {
                for(let j = i + 1; j < starsRef.current.length; j++){
                    const o = starsRef.current[j];
                    const dx2 = o.x - p.x;
                    const dy2 = o.y - p.y;
                    const d = Math.hypot(dx2, dy2);
                    const minD = p.size + o.size + 5;
                    if (d < minD && d > 0) {
                        if (starsInteractionType === 'bounce') {
                            const nx = dx2 / d;
                            const ny = dy2 / d;
                            const rvx = p.vx - o.vx;
                            const rvy = p.vy - o.vy;
                            const speed = rvx * nx + rvy * ny;
                            if (speed < 0) continue;
                            const impulse = 2 * speed / (p.mass + o.mass);
                            p.vx -= impulse * o.mass * nx;
                            p.vy -= impulse * o.mass * ny;
                            o.vx += impulse * p.mass * nx;
                            o.vy += impulse * p.mass * ny;
                            const overlap = minD - d;
                            const sx = nx * overlap * 0.5;
                            const sy = ny * overlap * 0.5;
                            p.x -= sx;
                            p.y -= sy;
                            o.x += sx;
                            o.y += sy;
                        } else {
                            const mergeForce = (minD - d) / minD;
                            p.glowMultiplier = (p.glowMultiplier || 1) + mergeForce * 0.5;
                            o.glowMultiplier = (o.glowMultiplier || 1) + mergeForce * 0.5;
                            const af = mergeForce * 0.01;
                            p.vx += dx2 * af;
                            p.vy += dy2 * af;
                            o.vx -= dx2 * af;
                            o.vy -= dy2 * af;
                        }
                    }
                }
            }
            p.x += p.vx;
            p.y += p.vy;
            p.vx += (Math.random() - 0.5) * 0.001;
            p.vy += (Math.random() - 0.5) * 0.001;
            p.vx *= 0.999;
            p.vy *= 0.999;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
        }
    }, [
        canvasSize.width,
        canvasSize.height,
        mouseInfluence,
        mouseGravity,
        gravityStrength,
        glowAnimation,
        starsInteraction,
        starsInteractionType
    ]);
    const drawStars = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((ctx)=>{
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const color = readColor();
        for (const p of starsRef.current){
            ctx.save();
            ctx.shadowColor = color;
            ctx.shadowBlur = glowIntensity * (p.glowMultiplier || 1) * 2;
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }, [
        dpr,
        glowIntensity,
        readColor
    ]);
    const animate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        updateStars();
        drawStars(ctx);
        animRef.current = requestAnimationFrame(animate);
    }, [
        updateStars,
        drawStars
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        resizeCanvas();
        const container = containerRef.current;
        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resizeCanvas) : null;
        if (container && ro) ro.observe(container);
        const onResize = ()=>resizeCanvas();
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
            if (ro && container) ro.disconnect();
        };
    }, [
        resizeCanvas
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (starsRef.current.length === 0) {
            initStars(canvasSize.width, canvasSize.height);
        } else {
            starsRef.current.forEach((p)=>{
                p.baseOpacity = starsOpacity;
                p.opacity = starsOpacity;
                const spd = Math.hypot(p.vx, p.vy);
                if (spd > 0) {
                    const ratio = movementSpeed / spd;
                    p.vx *= ratio;
                    p.vy *= ratio;
                }
            });
        }
    }, [
        starsCount,
        starsOpacity,
        movementSpeed,
        canvasSize.width,
        canvasSize.height,
        initStars
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (animRef.current) cancelAnimationFrame(animRef.current);
        animRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (animRef.current) cancelAnimationFrame(animRef.current);
            animRef.current = null;
        };
    }, [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-slot": "gravity-stars-background",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative size-full overflow-hidden', className),
        onMouseMove: (e)=>handlePointerMove(e),
        onTouchMove: (e)=>handlePointerMove(e),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "block w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx",
            lineNumber: 310,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
;
}),
];

//# sourceMappingURL=src_0f8lqh3._.js.map