// ═══════ STORY DATA ═══════
        const pages = [
            {
                type: 'story',
                chapter: 'Chapter 1',
                title: 'Once Upon a Sunflower',
                image: 'img/img-2.webp',
                caption: 'The beginning of something beautiful ✨',
                text: `There lived a girl named <span class="highlight">Shivi</span>, whose smile could rival the sun itself. She wasn't just any girl — she was a <span class="highlight">sunflower soul</span>, always turning toward the light, always blooming with grace.`,
                quote: '"Be your own sunshine ☀️"',
                emojis: ['🌻', '✨', '💛']
            },
            {
                type: 'story',
                chapter: 'Chapter 2',
                title: 'The Girl Who Bloomed',
                image: 'img/img-3.webp',
                caption: 'Blooming wherever she was planted 🌸',
                text: `Every season, <span class="highlight">she bloomed differently</span> — in whites and pinks, in bold patterns and delicate lace. But no matter the outfit, the same <span class="rose">warm light</span> always shone through her.`,
                quote: '"She carried sunshine in her soul"',
                emojis: ['🌸', '🦋', '💖']
            },
            {
                type: 'story',
                chapter: 'Chapter 3',
                title: 'A Vibe Unlike Any Other',
                image: 'img/img-5.webp',
                caption: 'Main character energy 💫',
                text: `People said she had an <span class="highlight">aura</span> — the kind that makes sunflowers jealous because they'd rather turn to face <span class="highlight">her</span>. She walked into rooms and the energy <span class="rose">shifted</span>.`,
                quote: '"Good vibes only ✨"',
                emojis: ['💫', '🌟', '✨']
            },
            {
                type: 'story',
                chapter: 'Chapter 4',
                title: 'Golden Hour Magic',
                image: 'img/img-6.webp',
                caption: 'Fierce & fabulous 🔥',
                text: `There's a golden hour that photographers chase — but for Shivi, <span class="highlight">every hour was golden</span>. Her eyes held stories, her smile held warmth, and her presence held a quiet kind of <span class="rose">magic</span>.`,
                quote: '"She was her own golden hour"',
                emojis: ['🌅', '💛', '✨']
            },
            {
                type: 'story',
                chapter: 'Chapter 5',
                title: 'Graceful & Unapologetic',
                image: 'img/img-7.webp',
                caption: 'Pure grace 🦋',
                text: `Grace wasn't something she <em>tried</em> to have — it just <span class="highlight">flowed from her</span>. In the way she laughed, in the way she cared, in the way she made everyone around her feel seen and <span class="rose">loved</span>.`,
                quote: '"Elegance is when the inside is as beautiful as the outside"',
                emojis: ['🦋', '🤍', '✨']
            },
            {
                type: 'story',
                chapter: 'Chapter 6',
                title: 'Flowers in Her Hair',
                image: 'img/img-15.webp',
                caption: 'Nature\'s favorite child 🌺',
                text: `She wore <span class="highlight">flowers in her hair</span> and carried entire gardens in her heart. Nature recognized one of its own — the wind played with her dupatta, and the sun saved its best light just for <span class="rose">her</span>.`,
                quote: '"She was wildflowers and warm sunshine"',
                emojis: ['🌺', '🌻', '🌸']
            },
            {
                type: 'story',
                chapter: 'Chapter 7',
                title: 'The World She Lit Up',
                image: 'img/img-9.webp',
                caption: 'Spreading joy everywhere 🌟',
                text: `Wherever she went, <span class="highlight">light followed</span>. Not the kind from lamps or screens, but the warm, honey-gold kind that comes from someone who is <span class="rose">genuinely happy</span> being who they are.`,
                quote: '"Some people are just born to shine"',
                emojis: ['🌟', '💡', '☀️']
            },
            {
                type: 'story',
                chapter: 'Chapter 8',
                title: 'The Dreamer',
                image: 'img/img-11.webp',
                caption: 'Lost in beautiful dreams 💭',
                text: `Behind those sparkling eyes lived a <span class="highlight">dreamer</span> — someone who believed in magic, in sunsets, in second chances, and in the idea that <span class="rose">beautiful things are worth waiting for</span>.`,
                quote: '"She dreamed in colors borrowed from the sunset"',
                emojis: ['💭', '🌈', '✨']
            },
            {
                type: 'story',
                chapter: 'Chapter 9',
                title: 'Portrait of Joy',
                image: 'img/img-13.webp',
                caption: 'Radiant & real 💛',
                text: `If joy had a face, it would look exactly like <span class="highlight">Shivi's smile</span>. Not the posed kind — the real, eyes-crinkling, soul-deep kind that makes the whole world feel like a <span class="rose">warmer place</span>.`,
                quote: '"Her smile was proof that magic exists"',
                emojis: ['😊', '💛', '🌻']
            },
            {
                type: 'story',
                chapter: 'Chapter 10',
                title: 'Chapters of Elegance',
                image: 'img/img-17.webp',
                caption: 'Every look tells a story 📖',
                text: `Every outfit was a <span class="highlight">chapter</span>, every photo a page in the most beautiful story ever written. She didn't follow trends — <span class="rose">she set them</span>. With effortless style and a touch of her signature warmth.`,
                quote: '"Style is a way to say who you are without speaking"',
                emojis: ['📖', '👑', '✨']
            },
            {
                type: 'story',
                chapter: 'Chapter 11',
                title: 'Moments Worth Keeping',
                image: 'img/img-20.webp',
                caption: 'Memories etched in gold 🏆',
                text: `Some moments aren't meant to be forgotten. They're meant to be <span class="highlight">pressed between the pages</span> of your heart like dried flowers — fragile, precious, and forever <span class="rose">beautiful</span>.`,
                quote: '"Collecting moments, not things"',
                emojis: ['📸', '💫', '🌸']
            },
            {
                type: 'story',
                chapter: 'Chapter 12',
                title: 'The Strength Within',
                image: 'img/img-22.webp',
                caption: 'Fierce on the inside 💪',
                text: `Don't let the softness fool you. Beneath the <span class="highlight">sunflower petals</span> was steel — a girl who faced storms with her chin up and her smile intact. She was <span class="rose">gentle and fierce</span>, all at once.`,
                quote: '"She was a storm dressed in sunshine"',
                emojis: ['⚡', '🌻', '💪']
            },
            {
                type: 'story',
                chapter: 'Chapter 13',
                title: 'A Heart of Gold',
                image: 'img/img-24.webp',
                caption: 'Pure & precious 💝',
                text: `Her heart wasn't just kind — it was <span class="highlight">golden</span>. The kind of heart that remembers birthdays, that checks on friends, that loves without conditions. The world needs more hearts like <span class="rose">hers</span>.`,
                quote: '"The most beautiful things are felt with the heart"',
                emojis: ['💝', '💛', '🌻']
            },
            {
                type: 'story',
                chapter: 'Chapter 14',
                title: 'The Birthday Wish',
                image: 'img/img-1.webp',
                caption: 'Make a wish, Shivi 🎂',
                text: `And so, on this <span class="highlight">special day</span>, the universe paused to celebrate one of its finest creations. Candles were lit, wishes were made, and every sunflower in the garden bloomed a little <span class="rose">brighter</span>.`,
                quote: '"Today, even the stars are singing Happy Birthday"',
                emojis: ['🎂', '🎁', '🥳', '🎉']
            },
            {
                type: 'ending',
                title: 'Happy Birthday, Shivi!',
                message: `Here's to another year of blooming, shining, and being unapologetically YOU. May this year bring you everything your beautiful heart desires — and then some! Keep being the vibe, Shivi. The world needs your light. ✨💛`,
                sign: 'With love & sunflowers 🌻💛'
            }
        ];

        // ═══════ INIT ═══════
        let currentPage = 0;
        const totalPages = pages.length;
        const book = document.getElementById('book');
        const navDots = document.getElementById('navDots');
        const navIndicator = document.getElementById('navIndicator');
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');
        const navControls = document.getElementById('navControls');
        const keyHint = document.getElementById('keyHint');

        // ═══════ BUILD PAGES ═══════
        function buildPages() {
            pages.forEach((page, index) => {
                const pageEl = document.createElement('div');
                pageEl.className = 'page-content' + (index === 0 ? ' active' : '');
                pageEl.id = `page-${index}`;

                // Corner ornament SVG (filigree)
                const cornerSVG = `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d="M4 4 Q4 22 4 40" stroke="#b8860b" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M4 4 Q22 4 40 4" stroke="#b8860b" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M4 4 Q14 14 24 10 Q30 8 32 4" stroke="#b8860b" stroke-width="0.9" stroke-linecap="round" opacity="0.7"/>
                    <path d="M4 4 Q14 14 10 24 Q8 30 4 32" stroke="#b8860b" stroke-width="0.9" stroke-linecap="round" opacity="0.7"/>
                    <circle cx="4" cy="4" r="2.2" fill="#b8860b" opacity="0.8"/>
                    <circle cx="18" cy="8" r="1.2" fill="#b8860b" opacity="0.5"/>
                    <circle cx="8" cy="18" r="1.2" fill="#b8860b" opacity="0.5"/>
                    <path d="M10 4 Q12 10 10 16" stroke="#b8860b" stroke-width="0.7" opacity="0.4" stroke-linecap="round"/>
                    <path d="M4 10 Q10 12 16 10" stroke="#b8860b" stroke-width="0.7" opacity="0.4" stroke-linecap="round"/>
                </svg>`;

                // Botanical marginal SVG
                const floralSVG = `<svg viewBox="0 0 28 140" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d="M14 5 Q14 70 14 135" stroke="#b8860b" stroke-width="1.2" stroke-linecap="round"/>
                    <ellipse cx="14" cy="30" rx="6" ry="10" fill="#b8860b" opacity="0.5" transform="rotate(-20 14 30)"/>
                    <ellipse cx="14" cy="30" rx="6" ry="10" fill="#b8860b" opacity="0.4" transform="rotate(20 14 30)"/>
                    <circle cx="14" cy="28" r="3.5" fill="#c89e0a" opacity="0.7"/>
                    <ellipse cx="14" cy="70" rx="5" ry="9" fill="#b8860b" opacity="0.45" transform="rotate(-15 14 70)"/>
                    <ellipse cx="14" cy="70" rx="5" ry="9" fill="#b8860b" opacity="0.35" transform="rotate(15 14 70)"/>
                    <circle cx="14" cy="68" r="3" fill="#c89e0a" opacity="0.6"/>
                    <ellipse cx="14" cy="108" rx="4" ry="7" fill="#e8688a" opacity="0.3" transform="rotate(-10 14 108)"/>
                    <ellipse cx="14" cy="108" rx="4" ry="7" fill="#e8688a" opacity="0.25" transform="rotate(10 14 108)"/>
                    <circle cx="14" cy="107" r="2.5" fill="#c94070" opacity="0.5"/>
                </svg>`;

                const pressedFlowers = ['🌸', '🌼', '🌺', '🪷', '🌻', '🍃', '🌹'];
                const randomFlower = pressedFlowers[index % pressedFlowers.length];

                if (page.type === 'story') {
                    pageEl.innerHTML = `
                        <div class="page-left">
                            <div class="pg-corner pg-corner-tl">${cornerSVG}</div>
                            <div class="pg-corner pg-corner-bl">${cornerSVG}</div>
                            <div class="pg-flora-l">${floralSVG}</div>
                            <span class="pressed-flower" style="bottom:2.5rem;left:1.8rem;transform:rotate(-15deg);animation-delay:${index*0.3}s">${randomFlower}</span>
                            <div class="page-image-frame page-active">
                                <img src="${page.image}" alt="Shivi — ${page.title}" loading="lazy">
                                <div class="img-overlay"></div>
                                <span class="page-image-caption">${page.caption}</span>
                                <span class="chapter-badge">${page.chapter}</span>
                                <span class="polaroid-label">${page.chapter} ✦</span>
                            </div>
                            <span class="page-number">${(index * 2) + 1}</span>
                        </div>
                        <div class="page-right">
                            <div class="pg-corner pg-corner-tr">${cornerSVG}</div>
                            <div class="pg-corner pg-corner-br">${cornerSVG}</div>
                            <div class="pg-flora-r">${floralSVG}</div>
                            <div class="page-chapter">${page.chapter}</div>
                            <h2 class="page-title">${page.title}</h2>
                            <div class="page-divider"></div>
                            <p class="page-text">${page.text}</p>
                            <p class="page-quote">${page.quote}</p>
                            <div class="page-emoji-row">
                                ${page.emojis.map(e => `<span>${e}</span>`).join('')}
                            </div>
                            <span class="page-number">${(index * 2) + 2}</span>
                        </div>
                    `;
                } else if (page.type === 'ending') {
                    const cornerSVGEnd = `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path d="M4 4 Q4 22 4 40" stroke="#b8860b" stroke-width="1.2" stroke-linecap="round"/>
                        <path d="M4 4 Q22 4 40 4" stroke="#b8860b" stroke-width="1.2" stroke-linecap="round"/>
                        <path d="M4 4 Q14 14 24 10 Q30 8 32 4" stroke="#b8860b" stroke-width="0.9" stroke-linecap="round" opacity="0.7"/>
                        <path d="M4 4 Q14 14 10 24 Q8 30 4 32" stroke="#b8860b" stroke-width="0.9" stroke-linecap="round" opacity="0.7"/>
                        <circle cx="4" cy="4" r="2.2" fill="#b8860b" opacity="0.8"/>
                        <circle cx="18" cy="8" r="1.2" fill="#b8860b" opacity="0.5"/>
                        <circle cx="8" cy="18" r="1.2" fill="#b8860b" opacity="0.5"/>
                    </svg>`;
                    pageEl.innerHTML = `
                        <div class="page-full" style="position:relative;">
                            <div class="pg-corner pg-corner-tl" style="position:absolute;">${cornerSVGEnd}</div>
                            <div class="pg-corner pg-corner-bl" style="position:absolute;">${cornerSVGEnd}</div>
                            <svg class="end-sunflower" viewBox="0 0 200 200">
                                <g transform="translate(100,100)">
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#f5c518" transform="rotate(0)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#ffe066" transform="rotate(30)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#f5c518" transform="rotate(60)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#ffe066" transform="rotate(90)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#f5c518" transform="rotate(120)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#ffe066" transform="rotate(150)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#f5c518" transform="rotate(180)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#ffe066" transform="rotate(210)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#f5c518" transform="rotate(240)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#ffe066" transform="rotate(270)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#f5c518" transform="rotate(300)"/>
                                    <ellipse rx="14" ry="34" cx="0" cy="-38" fill="#ffe066" transform="rotate(330)"/>
                                    <circle r="22" fill="#5c3a1e"/>
                                    <circle r="17" fill="#8B5E3C"/>
                                </g>
                            </svg>
                            <h2 class="end-title">${page.title}</h2>
                            <p class="end-message">${page.message}</p>
                            <div class="end-sign">${page.sign}</div>
                            <div class="end-heart">
                                <svg width="50" height="50" viewBox="0 0 100 100">
                                    <path d="M50 88 C25 65 5 50 5 30 C5 15 17 5 30 5 C38 5 45 10 50 18 C55 10 62 5 70 5 C83 5 95 15 95 30 C95 50 75 65 50 88Z"
                                        fill="#e8688a" opacity="0.9">
                                        <animate attributeName="opacity" values="0.9;1;0.8;1;0.9" dur="1.5s" repeatCount="indefinite"/>
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="page-full" style="position:relative;">
                            <div class="pg-corner pg-corner-tr" style="position:absolute;">${cornerSVGEnd}</div>
                            <div class="pg-corner pg-corner-br" style="position:absolute;">${cornerSVGEnd}</div>
                            <div class="end-flowers">
                                <span>🌻</span><span>🌸</span><span>🌻</span><span>🌸</span><span>🌻</span>
                            </div>
                            <a href="https://www.instagram.com/shivionthevibe/" target="_blank" rel="noopener noreferrer" class="insta-link" style="margin-top:2rem;">
                                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                @shivionthevibe
                            </a>
                            <p style="font-family:var(--ff-body);font-size:0.75rem;color:var(--text-muted);margin-top:2.5rem;letter-spacing:1px;">
                                Made with ❤️ for the most radiant sunflower soul
                            </p>
                            <span class="page-number" style="position:relative;bottom:auto;margin-top:1rem;">The End 🌻</span>
                        </div>
                    `;
                }

                book.appendChild(pageEl);

                // Build nav dots
                const dot = document.createElement('div');
                dot.className = 'nav-dot' + (index === 0 ? ' active' : '');
                dot.addEventListener('click', () => goToPage(index));
                navDots.appendChild(dot);
            });
        }

        // ═══════ NAVIGATION ═══════
        let isAnimating = false;

        function goToPage(index, direction = 'next') {
            if (index < 0 || index >= totalPages || isAnimating) return;
            if (index === currentPage && document.querySelectorAll('.page-content.active').length > 0) return;

            const oldIndex = currentPage;
            currentPage = index;

            document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
            if (navDots.children[index]) navDots.children[index].classList.add('active');
            navIndicator.textContent = `${index + 1} / ${totalPages}`;

            btnPrev.disabled = index === 0;
            btnNext.disabled = index === totalPages - 1;

            const toPage = document.getElementById(`page-${index}`);

            // First load or mobile view
            if (oldIndex === undefined || oldIndex === index || window.innerWidth <= 768) {
                document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active', 'fade-in'));
                toPage.classList.add('active', 'fade-in');
                return;
            }

            if (index > oldIndex) direction = 'next';
            else if (index < oldIndex) direction = 'prev';

            const fromPage = document.getElementById(`page-${oldIndex}`);
            isAnimating = true;

            const transitionEl = document.createElement('div');
            transitionEl.className = 'book-transition';

            const staticLeft = document.createElement('div');
            staticLeft.className = 'static-left';

            const staticRight = document.createElement('div');
            staticRight.className = 'static-right';

            const flipperWrap = document.createElement('div');
            flipperWrap.className = `flipper-wrap ${direction}`;

            const flipper = document.createElement('div');
            flipper.className = 'flipper';

            const flipperFront = document.createElement('div');
            flipperFront.className = 'flipper-front';

            const flipperBack = document.createElement('div');
            flipperBack.className = 'flipper-back';

            flipper.appendChild(flipperFront);
            flipper.appendChild(flipperBack);
            flipperWrap.appendChild(flipper);

            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active', 'fade-in'));

            const getLeft = (page) => (page.querySelector('.page-left') || page.querySelectorAll('.page-full')[0]).cloneNode(true);
            const getRight = (page) => (page.querySelector('.page-right') || page.querySelectorAll('.page-full')[1]).cloneNode(true);

            if (direction === 'next') {
                staticLeft.appendChild(getLeft(fromPage));
                staticRight.appendChild(getRight(toPage));
                flipperFront.appendChild(getRight(fromPage));
                flipperBack.appendChild(getLeft(toPage));
            } else {
                staticLeft.appendChild(getLeft(toPage));
                staticRight.appendChild(getRight(fromPage));
                flipperFront.appendChild(getLeft(fromPage));
                flipperBack.appendChild(getRight(toPage));
            }

            transitionEl.appendChild(staticLeft);
            transitionEl.appendChild(staticRight);
            transitionEl.appendChild(flipperWrap);
            book.appendChild(transitionEl);

            // Trigger reflow
            void flipper.offsetWidth;

            flipperWrap.classList.add('animating');

            setTimeout(() => {
                transitionEl.remove();
                toPage.classList.add('active');
                isAnimating = false;
            }, 1500);
        }

        btnPrev.addEventListener('click', () => goToPage(currentPage - 1, 'prev'));
        btnNext.addEventListener('click', () => goToPage(currentPage + 1, 'next'));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                goToPage(currentPage + 1, 'next');
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPage(currentPage - 1, 'prev');
            }
        });

        // Swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) goToPage(currentPage + 1);
                else goToPage(currentPage - 1);
            }
        }, { passive: true });

        // ═══════ COVER ═══════
        const coverOverlay = document.getElementById('coverOverlay');
        const storyContainer = document.getElementById('storyContainer');

        coverOverlay.addEventListener('click', (ev) => {
            burstConfetti(ev.clientX, ev.clientY);
            coverOverlay.classList.add('hidden');
            setTimeout(() => {
                storyContainer.classList.add('visible');
                navControls.style.display = 'flex';
                keyHint.style.display = 'flex';
            }, 400);
        });

        // ═══════ BACKGROUND STARS, PETALS & FIREFLIES ═══════
        (function createBg() {
            const canvas = document.getElementById('bgCanvas');

            // Stars — more of them, varied opacity
            for (let i = 0; i < 70; i++) {
                const star = document.createElement('div');
                star.className = 'bg-star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                const sz = (Math.random() * 2.5 + 0.5) + 'px';
                star.style.width = star.style.height = sz;
                star.style.animationDuration = (Math.random() * 5 + 2) + 's';
                star.style.animationDelay = (Math.random() * 4) + 's';
                star.style.opacity = (Math.random() * 0.6 + 0.2).toString();
                canvas.appendChild(star);
            }

            // Petals — more colours, more variety
            for (let i = 0; i < 14; i++) {
                const petal = document.createElement('div');
                petal.className = 'bg-petal';
                petal.style.left = Math.random() * 100 + '%';
                petal.style.animationDuration = (Math.random() * 10 + 12) + 's';
                petal.style.animationDelay = (Math.random() * 14) + 's';
                const colors = ['#f5c518', '#ffe066', '#e8912a', '#e8688a', '#ffb347', '#ffd700'];
                petal.style.background = colors[Math.floor(Math.random() * colors.length)];
                const w = (Math.random() * 8 + 8) + 'px';
                const h = (Math.random() * 10 + 12) + 'px';
                petal.style.width = w;
                petal.style.height = h;
                petal.style.borderRadius = Math.random() > 0.5 ? '50% 50% 50% 0' : '50%';
                canvas.appendChild(petal);
            }

            // Fireflies — warm glowing drifters
            for (let i = 0; i < 18; i++) {
                const ff = document.createElement('div');
                ff.className = 'firefly';
                const sz = (Math.random() * 4 + 2) + 'px';
                ff.style.width = ff.style.height = sz;
                ff.style.left = Math.random() * 100 + '%';
                ff.style.top = (20 + Math.random() * 70) + '%';
                const dur = (Math.random() * 12 + 10) + 's';
                ff.style.animationDuration = dur;
                ff.style.animationDelay = (Math.random() * 15) + 's';
                const dx  = ((Math.random() - 0.5) * 200) + 'px';
                const dy  = ((Math.random() - 0.5) * 120) + 'px';
                const dx2 = ((Math.random() - 0.5) * 300) + 'px';
                const dy2 = (-Math.random() * 200 - 60) + 'px';
                ff.style.setProperty('--dx',  dx);
                ff.style.setProperty('--dy',  dy);
                ff.style.setProperty('--dx2', dx2);
                ff.style.setProperty('--dy2', dy2);
                const gColors = [
                    'radial-gradient(circle, rgba(255,230,80,1) 0%, rgba(255,200,50,0.3) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(255,180,100,1) 0%, rgba(245,197,24,0.3) 60%, transparent 100%)',
                    'radial-gradient(circle, rgba(232,104,138,0.9) 0%, rgba(201,64,112,0.2) 60%, transparent 100%)',
                ];
                ff.style.background = gColors[Math.floor(Math.random() * gColors.length)];
                ff.style.boxShadow = '0 0 6px 2px rgba(255,220,50,0.18)';
                canvas.appendChild(ff);
            }
        })();

        // ══════════════════════════════════════════════
        //  ✨ ROUND 2 DECORATIONS
        // ══════════════════════════════════════════════

        // ── Cursor Sparkle Trail ──────────────────────
        const _sparkShapes = ['✦','⋆','✧','★','◆','·','✿','❋','⬧','⁕'];
        const _sparkColors  = ['#f5c518','#ffe066','#e8912a','#e8688a','#ffffff','#ffd700','#ffb347'];
        let   _lastSpark    = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - _lastSpark < 38) return;
            _lastSpark = now;
            const sp = document.createElement('div');
            sp.className = 'c-spark';
            sp.textContent = _sparkShapes[Math.floor(Math.random() * _sparkShapes.length)];
            sp.style.left  = e.clientX + 'px';
            sp.style.top   = e.clientY + 'px';
            sp.style.color = _sparkColors[Math.floor(Math.random() * _sparkColors.length)];
            sp.style.fontSize = (8 + Math.random() * 7) + 'px';
            sp.style.setProperty('--tx',  ((Math.random() - 0.5) * 70) + 'px');
            sp.style.setProperty('--ty',  (-Math.random() * 65 - 15) + 'px');
            sp.style.setProperty('--rot', (Math.random() * 540 - 270) + 'deg');
            document.body.appendChild(sp);
            setTimeout(() => sp.remove(), 900);
        });

        // ── Confetti Burst ───────────────────────────
        function burstConfetti(cx, cy) {
            const colors = ['#f5c518','#ffe066','#e8688a','#e8912a','#ffd700','#ffb347','#ff69b4','#ffffff','#c94070'];
            for (let i = 0; i < 90; i++) {
                const c   = document.createElement('div');
                c.className = 'confetto';
                c.style.left   = cx + 'px';
                c.style.top    = cy + 'px';
                const angle    = Math.random() * Math.PI * 2;
                const dist     = 80 + Math.random() * 340;
                c.style.background = colors[Math.floor(Math.random() * colors.length)];
                c.style.width  = (4 + Math.random() * 9) + 'px';
                c.style.height = (4 + Math.random() * 9) + 'px';
                c.style.borderRadius = Math.random() > 0.45 ? '50%' : '2px';
                c.style.setProperty('--cx', Math.cos(angle) * dist + 'px');
                c.style.setProperty('--cy', Math.sin(angle) * dist + 'px');
                c.style.setProperty('--cr', (Math.random() * 900 - 450) + 'deg');
                c.style.animationDuration = (0.7 + Math.random() * 1.4) + 's';
                c.style.animationDelay    = (Math.random() * 0.25) + 's';
                document.body.appendChild(c);
                setTimeout(() => c.remove(), 2800);
            }
        }

        // ── Firework Burst ───────────────────────────
        function firework(cx, cy) {
            const colors = ['#f5c518','#ffe066','#e8912a','#e8688a','#ffffff','#ffd700','#c94070'];
            for (let i = 0; i < 48; i++) {
                const p = document.createElement('div');
                p.className = 'firework-particle';
                p.style.left   = cx + 'px';
                p.style.top    = cy + 'px';
                p.style.background = colors[Math.floor(Math.random() * colors.length)];
                p.style.width = p.style.height = (3 + Math.random() * 6) + 'px';
                const angle = (i / 48) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
                const dist  = 55 + Math.random() * 130;
                p.style.setProperty('--fx', Math.cos(angle) * dist + 'px');
                p.style.setProperty('--fy', Math.sin(angle) * dist + 'px');
                p.style.animationDuration = (0.7 + Math.random() * 0.9) + 's';
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 1800);
            }
        }

        // ── Shooting Stars ───────────────────────────
        function launchShootingStar() {
            const canvas = document.getElementById('bgCanvas');
            const ss  = document.createElement('div');
            ss.className = 'shooting-star';
            ss.style.left  = (5  + Math.random() * 55) + '%';
            ss.style.top   = (4  + Math.random() * 28) + '%';
            const len = 120 + Math.random() * 160;
            ss.style.width = len + 'px';
            ss.style.setProperty('--sx', (len + Math.random() * 60) + 'px');
            ss.style.setProperty('--sy', (len * 0.55) + 'px');
            ss.style.animationDuration = (0.55 + Math.random() * 0.55) + 's';
            canvas.appendChild(ss);
            setTimeout(() => ss.remove(), 1400);
        }
        launchShootingStar();
        setInterval(launchShootingStar, 3200 + Math.random() * 4500);
        setInterval(launchShootingStar, 5000 + Math.random() * 6000); // second stream

        // ── Moon + Constellation ─────────────────────
        (function buildSky() {
            const canvas = document.getElementById('bgCanvas');

            // Moon
            const moon = document.createElement('div');
            moon.className = 'bg-moon';
            canvas.appendChild(moon);

            // Constellation SVG (Orion-ish, top-left corner)
            const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
            svg.className = 'constellation-svg';
            svg.setAttribute('viewBox','0 0 220 220');
            svg.setAttribute('width','200');
            svg.setAttribute('height','200');
            svg.style.position = 'absolute';
            svg.style.top  = '4%';
            svg.style.left = '3%';
            const pts  = [[45,35],[85,25],[130,48],[55,100],[100,112],[148,78],[88,165],[118,165]];
            const lns  = [[0,1],[1,2],[2,5],[0,3],[3,4],[4,5],[3,6],[4,7]];
            lns.forEach(([a,b]) => {
                const ln = document.createElementNS('http://www.w3.org/2000/svg','line');
                ln.setAttribute('x1', pts[a][0]); ln.setAttribute('y1', pts[a][1]);
                ln.setAttribute('x2', pts[b][0]); ln.setAttribute('y2', pts[b][1]);
                ln.setAttribute('stroke','rgba(255,240,120,0.55)');
                ln.setAttribute('stroke-width','0.9');
                svg.appendChild(ln);
            });
            pts.forEach(([x,y], i) => {
                const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
                c.setAttribute('cx', x); c.setAttribute('cy', y);
                c.setAttribute('r', i % 3 === 0 ? '3' : '2');
                c.setAttribute('fill','rgba(255,245,130,0.95)');
                c.setAttribute('filter','url(#starGlow)');
                svg.appendChild(c);
            });
            // Glow filter
            const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
            defs.innerHTML = `<filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>`;
            svg.prepend(defs);
            canvas.appendChild(svg);
        })();

        // ── Butterflies ──────────────────────────────
        (function spawnButterflies() {

            /* ═══ REALISTIC BUTTERFLY SVG BUILDER ═══
               ViewBox: 0 0 180 160  |  Body centre: x=90
               Left wings  → x: 0–90   (transform-origin: right centre → x≈90)
               Right wings → x: 90–180 (transform-origin: left  centre → x≈90)
            ══════════════════════════════════════════ */
            function mkSVG(s) {
                const id = 'bf' + Math.random().toString(36).slice(2,7);

                // ── Wing outline paths ──────────────────
                const LF = `M 90,55 C 75,44 56,30 38,20
                             C 22,12 8,16 6,30
                             C 4,44 8,58 20,68
                             C 32,78 52,82 90,78 Z`;
                const RF = `M 90,55 C 105,44 124,30 142,20
                             C 158,12 172,16 174,30
                             C 176,44 172,58 160,68
                             C 148,78 128,82 90,78 Z`;

                const LH = ({
                    swallowtail: `M 90,78 C 74,82 54,90 36,102
                                  C 18,114 12,128 20,136
                                  C 26,144 42,142 56,132
                                  C 62,126 64,120 66,126
                                  C 68,134 66,144 70,150
                                  C 74,156 80,154 80,148
                                  C 80,138 84,120 90,90 Z`,
                    regular: `M 90,78 C 74,82 54,90 36,102
                               C 18,114 12,128 20,136
                               C 28,144 48,142 64,130
                               C 76,120 84,102 90,90 Z`,
                    round:   `M 90,78 C 70,84 48,94 30,110
                               C 14,124 10,142 22,150
                               C 34,158 56,154 74,140
                               C 82,130 88,114 90,90 Z`,
                })[s.type];

                const RH = ({
                    swallowtail: `M 90,78 C 106,82 126,90 144,102
                                  C 162,114 168,128 160,136
                                  C 154,144 138,142 124,132
                                  C 118,126 116,120 114,126
                                  C 112,134 114,144 110,150
                                  C 106,156 100,154 100,148
                                  C 100,138 96,120 90,90 Z`,
                    regular: `M 90,78 C 106,82 126,90 144,102
                               C 162,114 168,128 160,136
                               C 152,144 132,142 116,130
                               C 104,120 96,102 90,90 Z`,
                    round:   `M 90,78 C 110,84 132,94 150,110
                               C 166,124 170,142 158,150
                               C 146,158 124,154 106,140
                               C 98,130 92,114 90,90 Z`,
                })[s.type];

                // ── SVG element helpers ─────────────────
                const ln = (x1,y1,x2,y2, w=0.9, op=0.52) =>
                    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                           stroke="${s.c4}" stroke-width="${w}" opacity="${op}"/>`;
                const dot = (cx,cy,r,fill,op) =>
                    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${op}"/>`;

                // ── Wing venation ───────────────────────
                // Left forewing: main veins radiating from body hinge
                const lfv =
                    ln(90,57, 50,22) + ln(90,61, 32,32) + ln(90,65, 16,48) +
                    ln(90,69, 12,64) + ln(90,73, 24,74, 0.8, 0.42) +
                    // cross-veins (short connectors between main veins)
                    ln(55,26, 47,38, 0.65,0.32) + ln(36,38, 28,50, 0.60,0.28) +
                    ln(22,52, 16,64, 0.55,0.25);
                // Right forewing (mirror: x → 180-x)
                const rfv =
                    ln(90,57, 130,22) + ln(90,61, 148,32) + ln(90,65, 164,48) +
                    ln(90,69, 168,64) + ln(90,73, 156,74, 0.8, 0.42) +
                    ln(125,26, 133,38, 0.65,0.32) + ln(144,38, 152,50, 0.60,0.28) +
                    ln(158,52, 164,64, 0.55,0.25);
                // Hindwing veins
                const lhv = ln(90,80, 52,96) + ln(90,84, 34,110) + ln(90,88, 24,126, 0.8, 0.42);
                const rhv = ln(90,80, 128,96) + ln(90,84, 146,110) + ln(90,88, 156,126, 0.8, 0.42);

                // ── Species-specific wing markings ──────
                const lm = s.type === 'swallowtail' ? `
                    ${dot(10,34, 4.5,'rgba(255,255,255)',0.22)}
                    ${dot(10,48, 4,  'rgba(255,255,255)',0.18)}
                    ${dot(22,136, 9,  '#3355dd',0.70)} ${dot(22,136, 6,'#99bbff',0.75)}
                    ${dot(22,136, 3,  'rgba(0,0,0)',0.40)}
                    ${dot(38,128, 6.5,'#2244cc',0.60)} ${dot(38,128, 4,'#aaccff',0.65)}
                    ${dot(20,120, 4.5,'#e8912a',0.55)}
                ` : s.type === 'round' ? `
                    ${dot(28,114,13,'rgba(0,0,0)',0.55)}
                    ${dot(28,114, 9, s.c3,        1.00)}
                    ${dot(28,114, 5.5,'rgba(0,0,0)',0.72)}
                    ${dot(26,112, 2,  'rgba(255,255,255)',0.82)}
                    ${dot(10,38,  4,  'rgba(255,255,255)',0.18)}
                ` : `
                    ${dot(10,34,  4.5, s.c2, 0.52)} ${dot(10,34,  2.5,'white',0.40)}
                    ${dot(8, 48,  4,   s.c2, 0.46)} ${dot(8, 48,  2,  'white',0.34)}
                    ${dot(22,126, 6.5, s.c2, 0.66)} ${dot(22,126, 3.8,'white',0.52)}
                    ${dot(36,116, 5.5, s.c2, 0.58)} ${dot(36,116, 3,  'white',0.46)}
                `;
                const rm = s.type === 'swallowtail' ? `
                    ${dot(170,34, 4.5,'rgba(255,255,255)',0.22)}
                    ${dot(170,48, 4,  'rgba(255,255,255)',0.18)}
                    ${dot(158,136, 9,  '#3355dd',0.70)} ${dot(158,136, 6,'#99bbff',0.75)}
                    ${dot(158,136, 3,  'rgba(0,0,0)',0.40)}
                    ${dot(142,128, 6.5,'#2244cc',0.60)} ${dot(142,128, 4,'#aaccff',0.65)}
                    ${dot(160,120, 4.5,'#e8912a',0.55)}
                ` : s.type === 'round' ? `
                    ${dot(152,114,13,'rgba(0,0,0)',0.55)}
                    ${dot(152,114, 9, s.c3,        1.00)}
                    ${dot(152,114, 5.5,'rgba(0,0,0)',0.72)}
                    ${dot(150,112, 2,  'rgba(255,255,255)',0.82)}
                    ${dot(170,38,  4,  'rgba(255,255,255)',0.18)}
                ` : `
                    ${dot(170,34,  4.5, s.c2, 0.52)} ${dot(170,34,  2.5,'white',0.40)}
                    ${dot(172,48,  4,   s.c2, 0.46)} ${dot(172,48,  2,  'white',0.34)}
                    ${dot(158,126, 6.5, s.c2, 0.66)} ${dot(158,126, 3.8,'white',0.52)}
                    ${dot(144,116, 5.5, s.c2, 0.58)} ${dot(144,116, 3,  'white',0.46)}
                `;

                return `<svg width="${s.w}" height="${s.h}"
                             viewBox="0 0 180 160"
                             xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <!-- Radial gradient: darker near body-hinge, fades outward -->
                    <radialGradient id="ig${id}" cx="90" cy="67" r="58"
                                    gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stop-color="${s.c2}" stop-opacity="0.58"/>
                      <stop offset="65%"  stop-color="${s.c2}" stop-opacity="0.08"/>
                      <stop offset="100%" stop-color="${s.c2}" stop-opacity="0"/>
                    </radialGradient>
                    <!-- Radial gradient: transparent centre → dark border -->
                    <radialGradient id="bd${id}" cx="90" cy="67" r="114"
                                    gradientUnits="userSpaceOnUse">
                      <stop offset="46%"  stop-color="transparent" stop-opacity="0"/>
                      <stop offset="76%"  stop-color="${s.c4}" stop-opacity="0.20"/>
                      <stop offset="100%" stop-color="${s.c4}" stop-opacity="0.60"/>
                    </radialGradient>
                    <!-- Diagonal sheen / iridescence shimmer -->
                    <linearGradient id="sh${id}" x1="0" y1="0" x2="180" y2="160"
                                    gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stop-color="white" stop-opacity="0.18"/>
                      <stop offset="38%"  stop-color="white" stop-opacity="0.03"/>
                      <stop offset="62%"  stop-color="white" stop-opacity="0.14"/>
                      <stop offset="100%" stop-color="white" stop-opacity="0.02"/>
                    </linearGradient>
                  </defs>

                  <!-- ══ LEFT WING GROUP ══
                       transform-box:fill-box; transform-origin:right center
                       → scaleX collapses wing toward body (x≈90)              -->
                  <g class="bf-wing-l">
                    <!-- Hindwing (drawn first = under forewing) -->
                    <path d="${LH}" fill="${s.c1}" opacity="0.88"/>
                    <path d="${LH}" fill="url(#ig${id})" opacity="0.80"/>
                    <path d="${LH}" fill="url(#bd${id})" opacity="0.88"/>
                    <path d="${LH}" fill="none"
                          stroke="${s.c4}" stroke-width="1.15" opacity="0.46"/>
                    ${lhv}
                    <!-- Forewing (on top of hindwing) -->
                    <path d="${LF}" fill="${s.c1}" opacity="0.93"/>
                    <path d="${LF}" fill="url(#ig${id})" opacity="0.88"/>
                    <path d="${LF}" fill="url(#bd${id})" opacity="0.90"/>
                    <path d="${LF}" fill="url(#sh${id})" opacity="0.68"/>
                    <path d="${LF}" fill="none"
                          stroke="${s.c4}" stroke-width="1.30" opacity="0.52"/>
                    ${lfv}
                    ${lm}
                  </g>

                  <!-- ══ RIGHT WING GROUP ══
                       transform-origin:left center → pivot at x≈90             -->
                  <g class="bf-wing-r">
                    <path d="${RH}" fill="${s.c1}" opacity="0.88"/>
                    <path d="${RH}" fill="url(#ig${id})" opacity="0.80"/>
                    <path d="${RH}" fill="url(#bd${id})" opacity="0.88"/>
                    <path d="${RH}" fill="none"
                          stroke="${s.c4}" stroke-width="1.15" opacity="0.46"/>
                    ${rhv}
                    <path d="${RF}" fill="${s.c1}" opacity="0.93"/>
                    <path d="${RF}" fill="url(#ig${id})" opacity="0.88"/>
                    <path d="${RF}" fill="url(#bd${id})" opacity="0.90"/>
                    <path d="${RF}" fill="url(#sh${id})" opacity="0.68"/>
                    <path d="${RF}" fill="none"
                          stroke="${s.c4}" stroke-width="1.30" opacity="0.52"/>
                    ${rfv}
                    ${rm}
                  </g>

                  <!-- ══ BODY (drawn last — on top of all wings) ══ -->
                  <!-- Abdomen (segmented cylinder) -->
                  <rect x="87"   y="80" width="6"  height="44" rx="3"   fill="#180902"/>
                  <rect x="88.5" y="81" width="3"  height="42" rx="1.5" fill="#301808" opacity="0.70"/>
                  <line x1="87" y1="90"  x2="93" y2="90"  stroke="rgba(255,255,255,0.14)" stroke-width="0.8"/>
                  <line x1="87" y1="99"  x2="93" y2="99"  stroke="rgba(255,255,255,0.11)" stroke-width="0.8"/>
                  <line x1="87" y1="108" x2="93" y2="108" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
                  <line x1="87" y1="117" x2="93" y2="117" stroke="rgba(255,255,255,0.06)" stroke-width="0.8"/>
                  <!-- Thorax (bulbous, slightly wider) -->
                  <ellipse cx="90" cy="72" rx="6.5"  ry="10"  fill="#180902"/>
                  <ellipse cx="90" cy="71" rx="4.8"  ry="7.8" fill="#301808" opacity="0.65"/>
                  <!-- Highlight on thorax -->
                  <ellipse cx="89" cy="68" rx="2.2"  ry="3.5" fill="rgba(255,255,255,0.08)"/>
                  <!-- Head -->
                  <circle  cx="90" cy="57" r="9.5"  fill="#180902"/>
                  <circle  cx="90" cy="57" r="7.5"  fill="#2c1406"/>
                  <ellipse cx="90" cy="55" rx="5.5"  ry="4"   fill="#381a08" opacity="0.5"/>
                  <!-- Compound eyes (large, oval) -->
                  <ellipse cx="84.8" cy="55" rx="3.5" ry="3.0" fill="#040302"/>
                  <ellipse cx="95.2" cy="55" rx="3.5" ry="3.0" fill="#040302"/>
                  <!-- Eye highlights -->
                  <circle cx="84.2" cy="54.0" r="1.3" fill="rgba(255,255,255,0.72)"/>
                  <circle cx="94.6" cy="54.0" r="1.3" fill="rgba(255,255,255,0.72)"/>
                  <circle cx="85.5" cy="56.5" r="0.7" fill="rgba(255,255,255,0.30)"/>
                  <circle cx="96.0" cy="56.5" r="0.7" fill="rgba(255,255,255,0.30)"/>
                  <!-- Proboscis (coiled) -->
                  <path d="M 90,65 Q 89.5,69 88,71" stroke="#2c1406"
                        stroke-width="1.2" fill="none" stroke-linecap="round"/>
                  <!-- Antennae (curved with distinct club tips) -->
                  <path d="M 87,49 Q 72,34 64,20" stroke="#180902"
                        stroke-width="2.3" fill="none" stroke-linecap="round"/>
                  <ellipse cx="64"  cy="20" rx="4.8" ry="3.8" fill="#180902"/>
                  <ellipse cx="64"  cy="20" rx="3.0" ry="2.4" fill="${s.c1}" opacity="0.65"/>
                  <path d="M 93,49 Q 108,34 116,20" stroke="#180902"
                        stroke-width="2.3" fill="none" stroke-linecap="round"/>
                  <ellipse cx="116" cy="20" rx="4.8" ry="3.8" fill="#180902"/>
                  <ellipse cx="116" cy="20" rx="3.0" ry="2.4" fill="${s.c1}" opacity="0.65"/>
                </svg>`;
            }

            /* ── 4 distinct species ── */
            const specs = [
                // Eastern Tiger Swallowtail (Papilio glaucus) — gold/black
                { c1:'#f5c518', c2:'#7a4400', c3:'#fff8c0', c4:'#2e1600',
                  type:'swallowtail', top:14, dur:26, delay:1,  w:110, h:98 },
                // Crimson Rose / Red Admiral — deep rose/scarlet
                { c1:'#e05868', c2:'#8a1828', c3:'#ffc0c8', c4:'#380a10',
                  type:'regular',    top:46, dur:34, delay:9,  w:92,  h:82 },
                // Amber Helicon / Monarch-ish — rich amber
                { c1:'#de7218', c2:'#622400', c3:'#ffe880', c4:'#280e00',
                  type:'swallowtail', top:66, dur:29, delay:17, w:102, h:92 },
                // Blue Morpho — electric cobalt with eyespots
                { c1:'#4870e8', c2:'#0e28a8', c3:'#b0ccff', c4:'#081060',
                  type:'round',      top:32, dur:40, delay:24, w:98,  h:88 },
            ];

            specs.forEach(s => {
                const el = document.createElement('div');
                el.className = 'butterfly-el';
                el.style.top               = s.top  + 'vh';
                el.style.animationDuration = s.dur   + 's';
                el.style.animationDelay    = s.delay + 's';
                el.style.setProperty('--vy1', ((Math.random()-0.5)*12)+'vh');
                el.style.setProperty('--vy2', ((Math.random()-0.5)*16)+'vh');
                el.style.setProperty('--vy3', ((Math.random()-0.5)*12)+'vh');
                el.style.setProperty('--vy4', ((Math.random()-0.5)*9)+'vh');
                el.innerHTML = mkSVG(s);
                document.getElementById('butterflyLayer').appendChild(el);
            });
        })();

        // ── Per-Page Decorator ───────────────────────
        function decoratePage(pageEl, pageData, isLastStory) {
            const scrollworkSVG = `<svg width="100%" height="26" viewBox="0 0 600 26"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,13 Q30,3 60,13 Q90,23 120,13 Q150,3 180,13 Q210,23 240,13
                         Q270,3 300,13 Q330,23 360,13 Q390,3 420,13 Q450,23 480,13
                         Q510,3 540,13 Q570,23 600,13"
                    fill="none" stroke="#b8860b" stroke-width="1.3" opacity="0.55"/>
                <path d="M0,7 Q30,1 60,7 Q90,13 120,7 Q150,1 180,7 Q210,13 240,7
                         Q270,1 300,7 Q330,13 360,7 Q390,1 420,7 Q450,13 480,7
                         Q510,1 540,7 Q570,13 600,7"
                    fill="none" stroke="#b8860b" stroke-width="0.7" opacity="0.38"/>
                ${[60,120,180,240,300,360,420,480,540].map(x =>
                    `<circle cx="${x}" cy="13" r="1.8" fill="#b8860b" opacity="0.65"/>
                     <text x="${x}" y="25" text-anchor="middle" font-size="7"
                           fill="#b8860b" opacity="0.45">✦</text>`
                ).join('')}
            </svg>`;

            const laceSVG = `<svg width="18" height="100%" viewBox="0 0 18 500"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                ${Array.from({length:25}, (_,i) => {
                    const y = i * 20;
                    return `<circle cx="9" cy="${y+5}" r="4" fill="none" stroke="#b8860b" stroke-width="0.8"/>
                            <line x1="9" y1="${y+9}" x2="9" y2="${y+16}" stroke="#b8860b" stroke-width="0.6"/>`;
                }).join('')}
            </svg>`;

            pageEl.querySelectorAll('.page-left, .page-right, .page-full').forEach(p => {
                // Double frame border
                const fb = document.createElement('div');
                fb.className = 'page-frame-border';
                p.appendChild(fb);

                // Scrollwork top
                const sw = document.createElement('div');
                sw.className = 'page-scrollwork';
                sw.innerHTML = scrollworkSVG;
                p.appendChild(sw);

                // Scrollwork bottom (flipped)
                const swb = document.createElement('div');
                swb.className = 'page-scrollwork-bottom';
                swb.innerHTML = scrollworkSVG;
                p.appendChild(swb);

                // Lace edges
                const ll = document.createElement('div');
                ll.className = 'lace-l';
                ll.innerHTML = laceSVG;
                p.appendChild(ll);

                const lr = document.createElement('div');
                lr.className = 'lace-r';
                lr.innerHTML = laceSVG;
                p.appendChild(lr);

                // Glitter sparkles
                const glyphs = ['✦','⋆','·','✧','∘','⊹','✺'];
                for (let g = 0; g < 8; g++) {
                    const gl = document.createElement('div');
                    gl.className = 'pg-glitter';
                    gl.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
                    gl.style.left   = (6  + Math.random() * 88) + '%';
                    gl.style.top    = (12 + Math.random() * 76) + '%';
                    gl.style.fontSize = (6 + Math.random() * 8) + 'px';
                    gl.style.opacity  = (0.15 + Math.random() * 0.3).toString();
                    gl.style.animationDuration = (2.5 + Math.random() * 4) + 's';
                    gl.style.animationDelay    = (Math.random() * 4) + 's';
                    p.appendChild(gl);
                }
            });

            // Drop cap on story text
            const textEl = pageEl.querySelector('.page-text');
            if (textEl) {
                const raw = textEl.innerHTML;
                const m   = raw.match(/^(\s*(?:<[^>]+>\s*)*)([A-ZÀ-Ü])/);
                if (m) {
                    textEl.innerHTML = raw.replace(
                        m[0],
                        m[1] + `<span class="drop-cap">${m[2]}</span>`
                    );
                }
            }

            // Birthday expanding rings on last chapter
            if (isLastStory) {
                pageEl.querySelectorAll('.page-left, .page-right').forEach(p => {
                    [0.2, 1.0, 1.8].forEach((delay, j) => {
                        const ring = document.createElement('div');
                        ring.className = 'bday-ring';
                        ring.style.width  = ring.style.height = '70px';
                        ring.style.left   = (25 + Math.random() * 50) + '%';
                        ring.style.top    = (25 + Math.random() * 50) + '%';
                        ring.style.animationDelay = delay + 's';
                        ring.style.borderColor = j % 2 === 0
                            ? 'rgba(245,197,24,0.45)'
                            : 'rgba(232,104,138,0.45)';
                        p.appendChild(ring);
                    });
                });

                // Periodic fireworks when on birthday chapter
                setInterval(() => {
                    const bookEl = document.getElementById('book');
                    const rect   = bookEl.getBoundingClientRect();
                    firework(
                        rect.left + 0.3 * rect.width + Math.random() * 0.4 * rect.width,
                        rect.top  + 0.2 * rect.height + Math.random() * 0.5 * rect.height
                    );
                }, 2200);
            }
        }

        // ═══════ INIT ═══════
        buildPages();

        // Inject all per-page decorations after pages are built
        (() => {
            const storyPages = pages.filter(p => p.type === 'story');
            const lastStoryGlobalIdx = pages.findLastIndex(p => p.type === 'story');
            pages.forEach((page, idx) => {
                const el = document.getElementById('page-' + idx);
                if (el) decoratePage(el, page, idx === lastStoryGlobalIdx);
            });
        })();

        goToPage(0);
