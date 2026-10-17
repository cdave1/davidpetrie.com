// The only script the site sends to the browser. Pages are complete without it.

// Section entrances: each [data-reveal] element arrives once as it enters the viewport.
// The hidden state only applies under html.js, so content stays visible if this never runs.
function reveal() {
    // Markdown pages cannot carry attributes, so their blocks below the first screen are tagged here.
    for (const el of document.querySelectorAll('.prose > h1, .prose > h2, .prose > h3, .prose > ul, .prose > p > img')) {
        if (!el.hasAttribute('data-reveal') && el.getBoundingClientRect().top > window.innerHeight) {
            el.setAttribute('data-reveal', '');
        }
    }

    const pending = document.querySelectorAll('[data-reveal]:not([data-in])');
    if (!('IntersectionObserver' in window)) {
        pending.forEach((el) => el.setAttribute('data-in', ''));
        return;
    }
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-in', '');
                    observer.unobserve(entry.target);
                }
            }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    pending.forEach((el) => observer.observe(el));
}

// A looping clip is decoration: under reduced motion it stops on its poster.
function calmVideos() {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    for (const video of document.querySelectorAll('video[autoplay]')) {
        video.muted = true;
        if (calm.matches) {
            video.removeAttribute('autoplay');
            video.pause();
        } else {
            video.play().catch(() => {});
        }
    }
}

// The project list: pointing at, focusing or scrolling a row to the middle of the screen makes
// it active. Its picture replaces the one beside the list and its description opens. Pictures
// are fetched only when their row (or the row before it) becomes active.
function projectIndex(section) {
    const frame = section.querySelector('.index__frame');
    const caption = frame.querySelector('figcaption');
    const rows = Array.from(section.querySelectorAll('.index__row'));
    const pictures = new Map();
    const first = frame.querySelector('img');
    if (first) pictures.set(0, first);
    let active = 0;

    const picture = (i) => {
        if (pictures.has(i)) return pictures.get(i);
        const row = rows[i];
        const img = document.createElement('img');
        img.src = row.dataset.frame;
        img.width = Number(row.dataset.frameW);
        img.height = Number(row.dataset.frameH);
        img.alt = '';
        img.decoding = 'async';
        frame.insertBefore(img, caption);
        pictures.set(i, img);
        return img;
    };

    const activate = (i) => {
        if (i === active || i < 0) return;
        rows[active].classList.remove('is-active');
        const previous = pictures.get(active);
        if (previous) {
            previous.classList.remove('is-on');
            previous.alt = '';
        }
        active = i;
        rows[i].classList.add('is-active');
        const img = picture(i);
        img.alt = rows[i].dataset.title;
        requestAnimationFrame(() => img.classList.add('is-on'));
        caption.textContent = rows[i].dataset.caption;
        if (i + 1 < rows.length) picture(i + 1);
    };

    rows.forEach((row, i) => {
        const link = row.querySelector('a');
        link.addEventListener('mouseenter', () => activate(i));
        link.addEventListener('focus', () => activate(i));
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) activate(rows.indexOf(entry.target));
                }
            },
            { rootMargin: '-48% 0px -48% 0px' }
        );
        rows.forEach((row) => observer.observe(row));
    }

    if (rows.length > 1) picture(1);
}

reveal();
calmVideos();
document.querySelectorAll('[data-project-index]').forEach(projectIndex);
