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
"[project]/src/components/personalwebsite.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PersonalWebsite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$gravity$2d$stars$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animate-ui/components/backgrounds/gravity-stars.jsx [app-ssr] (ecmascript)");
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
function useInView(threshold = 0.12) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setInView(true);
        }, {
            threshold
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    return [
        ref,
        inView
    ];
}
// ── ANIMATION WRAPPER ─────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }) {
    const [ref, inView] = useInView();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.98)",
            transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
// ── CHROME STAR SVG ───────────────────────────────────────────────────────────
function ChromeStar({ size = 48, rotate = 0, style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 100 100",
        style: {
            transform: `rotate(${rotate}deg)`,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `cg-${rotate}`,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#e2e8f0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "35%",
                            stopColor: "#94a3b8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "65%",
                            stopColor: "#cbd5e1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#475569"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z",
                fill: `url(#cg-${rotate})`,
                stroke: "rgba(255,255,255,0.3)",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
// ── SMALL DECORATIVE STAR ─────────────────────────────────────────────────────
function MiniStar({ style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 100 100",
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "mstar",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#e2e8f0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#7dd3fc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/personalwebsite.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z",
                fill: "url(#mstar)"
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
// ── CRESCENT ORNAMET ─────────────────────────────────────────────────────────
function ChromeCrescent({ size = 60, style = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 100 100",
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "crescent-g",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#e2e8f0",
                                stopOpacity: "0.9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "#94a3b8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#334155"
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "ring-g",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(200,220,255,0.8)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(100,140,200,0.3)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M70 18 A35 35 0 1 0 70 82 A25 25 0 1 1 70 18 Z",
                fill: "url(#crescent-g)",
                stroke: "rgba(255,255,255,0.2)",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
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
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/personalwebsite.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
function PersonalWebsite() {
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hero");
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrollY(window.scrollY);
        const onMouse = (e)=>setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        window.addEventListener("scroll", onScroll);
        window.addEventListener("mousemove", onMouse);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMouse);
        };
    }, []);
    const scrollTo = (id)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
        setActiveSection(id);
    };
    // parallax offset for hero ornaments
    const px = (mousePos.x / window.innerWidth - 0.5) * 24;
    const py = (mousePos.y / window.innerHeight - 0.5) * 24;
    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      font-family: 'Syne', sans-serif;
      background: #05060f;
      color: #e2e8f0;
      overflow-x: hidden;
    }

    ::selection { background: rgba(167,139,250,0.35); color: #f0e8ff; }

    @keyframes heroIn {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0);    }
    }
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100%{opacity:0.4;} 50%{opacity:0.85;} }
    @keyframes orbitRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes floatY {
      0%,100% { transform: translateY(0px); }
      50%     { transform: translateY(-12px); }
    }
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position:  400px 0; }
    }
    @keyframes glowPulse {
      0%,100% { text-shadow: 0 0 30px rgba(167,139,250,0.4), 0 0 60px rgba(167,139,250,0.1); }
      50%      { text-shadow: 0 0 50px rgba(167,139,250,0.6), 0 0 80px rgba(167,139,250,0.2); }
    }

    .nav-link {
      background: none; border: none; cursor: pointer;
      font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 500;
      color: rgba(203,213,225,0.6); letter-spacing: 0.06em;
      text-transform: uppercase; padding: 6px 0;
      border-bottom: 1px solid transparent;
      transition: color 0.2s, border-color 0.2s;
    }
    .nav-link:hover, .nav-link.active {
      color: #e2e8f0;
      border-bottom-color: rgba(167,139,250,0.6);
    }

    .project-card {
      background: rgba(255,255,255,0.025);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 32px;
      transition: transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.35s, background 0.35s;
      position: relative;
      overflow: hidden;
    }
    .project-card:hover {
      transform: translateY(-6px);
      background: rgba(255,255,255,0.045);
    }

    .glow-line {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--glow-color, #a78bfa), transparent);
      opacity: 0;
      transition: opacity 0.35s;
    }
    .project-card:hover .glow-line { opacity: 1; }

    .skill-chip {
      font-family: 'Syne', sans-serif;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: rgba(148,163,184,0.9);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 6px 16px;
      background: rgba(255,255,255,0.03);
      transition: all 0.2s;
    }
    .skill-chip:hover {
      border-color: rgba(167,139,250,0.4);
      color: #c4b5fd;
      background: rgba(167,139,250,0.06);
    }

    .input-field {
      width: 100%;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 14px 18px;
      font-family: 'Syne', sans-serif;
      font-size: 14px;
      color: #e2e8f0;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .input-field:focus {
      border-color: rgba(167,139,250,0.5);
      background: rgba(167,139,250,0.04);
    }
    .input-field::placeholder { color: rgba(148,163,184,0.4); }

    .send-btn {
      background: linear-gradient(135deg, rgba(167,139,250,0.15), rgba(103,232,249,0.1));
      border: 1px solid rgba(167,139,250,0.35);
      border-radius: 40px;
      padding: 15px 40px;
      color: #c4b5fd;
      font-family: 'Syne', sans-serif;
      font-size: 14px; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      cursor: pointer;
      transition: all 0.25s;
    }
    .send-btn:hover {
      background: linear-gradient(135deg, rgba(167,139,250,0.28), rgba(103,232,249,0.18));
      border-color: rgba(167,139,250,0.6);
      color: #ede9fe;
      transform: translateY(-2px);
    }

    .tag-pill {
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 20px;
      background: rgba(255,255,255,0.06);
      color: rgba(148,163,184,0.8);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .section-label {
      font-size: 11px; font-weight: 700;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: rgba(167,139,250,0.8);
      margin-bottom: 16px;
    }

    .view-link {
      font-size: 12px; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      color: rgba(167,139,250,0.7);
      text-decoration: none;
      transition: color 0.2s;
    }
    .view-link:hover { color: #c4b5fd; }

    .divider {
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(167,139,250,0.2), rgba(103,232,249,0.2), transparent);
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: css
            }, void 0, false, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#05060f",
                    minHeight: "100vh",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 200,
                            padding: "0 2.5rem",
                            background: scrollY > 60 ? "rgba(5,6,15,0.85)" : "transparent",
                            backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
                            borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.05)" : "none",
                            transition: "all 0.4s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1000,
                                margin: "0 auto",
                                height: 68,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStar, {
                                            style: {
                                                animation: "spinSlow 8s linear infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 36
                                    },
                                    children: [
                                        "about",
                                        "projects",
                                        "contact"
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `nav-link${activeSection === s ? " active" : ""}`,
                                            onClick: ()=>scrollTo(s),
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            minHeight: "100vh",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 2.5rem",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animate$2d$ui$2f$components$2f$backgrounds$2f$gravity$2d$stars$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GravityStarsBackground"], {
                                className: "absolute inset-0",
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    pointerEvents: "none",
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "20%",
                                            left: "55%",
                                            width: 600,
                                            height: 600,
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)",
                                            transform: `translate(${px * 0.5}px, ${py * 0.5}px)`,
                                            transition: "transform 0.12s ease-out"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "30%",
                                            width: 400,
                                            height: 400,
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 70%)",
                                            transform: `translate(${-px * 0.3}px, ${-py * 0.3}px)`,
                                            transition: "transform 0.12s ease-out"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "15%",
                                    right: "8%",
                                    zIndex: 2,
                                    transform: `translate(${px * 1.2}px, ${py * 1.2}px)`,
                                    transition: "transform 0.15s ease-out",
                                    animation: "floatY 6s ease-in-out infinite"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                    size: 80,
                                    rotate: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "22%",
                                    right: "20%",
                                    zIndex: 2,
                                    transform: `translate(${px * 0.7}px, ${py * 0.7}px)`,
                                    transition: "transform 0.15s ease-out",
                                    animation: "floatY 8s 1s ease-in-out infinite"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                    size: 44,
                                    rotate: -20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "35%",
                                    right: "30%",
                                    zIndex: 2,
                                    transform: `translate(${px}px, ${py}px)`,
                                    transition: "transform 0.15s ease-out",
                                    animation: "floatY 7s 2s ease-in-out infinite"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeCrescent, {
                                    size: 90
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "15%",
                                    left: "5%",
                                    zIndex: 2,
                                    opacity: 0.5,
                                    animation: "pulse 4s ease-in-out infinite"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                    size: 28,
                                    rotate: 45
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 1000,
                                    margin: "0 auto",
                                    width: "100%",
                                    position: "relative",
                                    zIndex: 3,
                                    paddingTop: 80
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            marginBottom: 28,
                                            animation: "heroIn 0.7s ease both"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 32,
                                                    height: 1,
                                                    background: "rgba(167,139,250,0.6)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: "'Syne', sans-serif",
                                            fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                                            fontWeight: 800,
                                            color: "#f1f5f9",
                                            lineHeight: 1.0,
                                            letterSpacing: "-0.03em",
                                            marginBottom: 12,
                                            animation: "heroIn 0.75s 0.1s ease both",
                                            animationFillMode: "both",
                                            opacity: 0
                                        },
                                        children: "Your Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                        children: "Developer & maker — building things that feel alive."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 16,
                                            flexWrap: "wrap",
                                            animation: "heroIn 0.75s 0.34s ease both",
                                            animationFillMode: "both",
                                            opacity: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "send-btn",
                                                onClick: ()=>scrollTo("projects"),
                                                style: {
                                                    fontSize: 13
                                                },
                                                children: "View work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollTo("about"),
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
                                                onMouseEnter: (e)=>e.target.style.color = "#94a3b8",
                                                onMouseLeave: (e)=>e.target.style.color = "rgba(148,163,184,0.6)",
                                                children: "About me →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        style: {
                            padding: "120px 2.5rem",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 429,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 1000,
                                    margin: "0 auto"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 80,
                                        alignItems: "start"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "section-label",
                                                            children: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 434,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            style: {
                                                                fontFamily: "'Syne', sans-serif",
                                                                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                                                                fontWeight: 800,
                                                                color: "#f1f5f9",
                                                                lineHeight: 1.1,
                                                                letterSpacing: "-0.025em",
                                                                marginBottom: 32
                                                            },
                                                            children: [
                                                                "The person",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: "'Libre Baskerville', serif",
                                                                        fontStyle: "italic",
                                                                        fontWeight: 400,
                                                                        color: "rgba(167,139,250,0.85)"
                                                                    },
                                                                    children: "behind the work"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 435,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                    delay: 0.1,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                            lineNumber: 443,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'Syne', sans-serif",
                                                                fontSize: 16,
                                                                lineHeight: 1.8,
                                                                color: "rgba(148,163,184,0.85)"
                                                            },
                                                            children: "When I'm not building things, you'll find me [hobby], [hobby], or somewhere between curiosity and obsession."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 446,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 442,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 432,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                    delay: 0.15,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                            lineNumber: 453,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexWrap: "wrap",
                                                                gap: 10
                                                            },
                                                            children: SKILLS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "skill-chip",
                                                                    style: {
                                                                        animationDelay: `${i * 0.05}s`
                                                                    },
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 456,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                    delay: 0.25,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: 48,
                                                            background: "rgba(255,255,255,0.02)",
                                                            border: "1px solid rgba(255,255,255,0.06)",
                                                            borderRadius: 16,
                                                            padding: "24px 28px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 20
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                                                size: 36,
                                                                rotate: 5,
                                                                style: {
                                                                    flexShrink: 0
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                                lineNumber: 473,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                        lineNumber: 475,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontFamily: "'Syne', sans-serif",
                                                                            fontSize: 12,
                                                                            color: "rgba(148,163,184,0.6)"
                                                                        },
                                                                        children: "Let's build something together."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                                lineNumber: 474,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                                        lineNumber: 465,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "projects",
                        style: {
                            padding: "100px 2.5rem",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 487,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 1000,
                                    margin: "0 auto"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "section-label",
                                                children: "Selected work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 490,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Syne', sans-serif",
                                                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                                                    fontWeight: 800,
                                                    color: "#f1f5f9",
                                                    lineHeight: 1.1,
                                                    letterSpacing: "-0.025em",
                                                    marginBottom: 56
                                                },
                                                children: [
                                                    "Things I've",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'Libre Baskerville', serif",
                                                            fontStyle: "italic",
                                                            fontWeight: 400,
                                                            color: "rgba(103,232,249,0.8)"
                                                        },
                                                        children: "built"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                                        lineNumber: 493,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gap: 20
                                        },
                                        children: PROJECTS.map((proj, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                delay: i * 0.1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "project-card",
                                                    style: {
                                                        "--glow-color": proj.glow
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "glow-line"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "1fr auto",
                                                                gap: 24,
                                                                alignItems: "start"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                gap: 14,
                                                                                marginBottom: 14
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                                    lineNumber: 507,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        width: 24,
                                                                                        height: 1,
                                                                                        background: "rgba(100,116,139,0.3)"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                                    lineNumber: 510,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                                            lineNumber: 506,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                                            lineNumber: 512,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                            lineNumber: 515,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                gap: 8
                                                                            },
                                                                            children: proj.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "tag-pill",
                                                                                    children: t
                                                                                }, t, false, {
                                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                                    lineNumber: 519,
                                                                                    columnNumber: 47
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                                            lineNumber: 518,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: proj.href,
                                                                    className: "view-link",
                                                                    style: {
                                                                        marginTop: 6,
                                                                        whiteSpace: "nowrap"
                                                                    },
                                                                    children: "View →"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                                            lineNumber: 504,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 502,
                                                    columnNumber: 19
                                                }, this)
                                            }, proj.id, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 501,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        style: {
                            padding: "100px 2.5rem 80px",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divider"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 535,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 600,
                                    margin: "0 auto"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "section-label",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 538,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Syne', sans-serif",
                                                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                                                    fontWeight: 800,
                                                    color: "#f1f5f9",
                                                    lineHeight: 1.1,
                                                    letterSpacing: "-0.025em",
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    "Let's",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'Libre Baskerville', serif",
                                                            fontStyle: "italic",
                                                            fontWeight: 400,
                                                            color: "rgba(167,139,250,0.85)"
                                                        },
                                                        children: "connect"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                                        lineNumber: 541,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/personalwebsite.jsx",
                                                lineNumber: 539,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                lineNumber: 545,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "rgba(167,139,250,0.07)",
                                                border: "1px solid rgba(167,139,250,0.2)",
                                                borderRadius: 16,
                                                padding: "40px",
                                                textAlign: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChromeStar, {
                                                    size: 40,
                                                    style: {
                                                        margin: "0 auto 16px",
                                                        display: "block"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 553,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Libre Baskerville', serif",
                                                        fontSize: "1.1rem",
                                                        fontStyle: "italic",
                                                        color: "rgba(196,181,253,0.9)"
                                                    },
                                                    children: "Message received. Talk soon."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 554,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 552,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                ].map(({ id, placeholder, type })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input-field",
                                                        type: type,
                                                        placeholder: placeholder,
                                                        value: form[id],
                                                        onChange: (e)=>setForm((p)=>({
                                                                    ...p,
                                                                    [id]: e.target.value
                                                                }))
                                                    }, id, false, {
                                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                                        lineNumber: 566,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "input-field",
                                                    rows: 5,
                                                    placeholder: "Your message",
                                                    value: form.message,
                                                    onChange: (e)=>setForm((p)=>({
                                                                ...p,
                                                                message: e.target.value
                                                            })),
                                                    style: {
                                                        resize: "vertical"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 575,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "send-btn",
                                                        onClick: ()=>setSent(true),
                                                        children: "Send message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                                        lineNumber: 584,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/personalwebsite.jsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/personalwebsite.jsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            padding: "32px 2.5rem",
                            borderTop: "1px solid rgba(255,255,255,0.05)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1000,
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStar, {}, void 0, false, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 598,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Syne', sans-serif",
                                                fontSize: 13,
                                                color: "rgba(100,116,139,0.7)"
                                            },
                                            children: [
                                                "Your Name · ",
                                                new Date().getFullYear()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/personalwebsite.jsx",
                                            lineNumber: 599,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/personalwebsite.jsx",
                                    lineNumber: 597,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/personalwebsite.jsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/personalwebsite.jsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/personalwebsite.jsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_0f1po_s._.js.map