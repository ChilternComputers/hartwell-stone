/**
 * Shared filter logic for projects, gallery, and insights pages.
 * Handles button aria-pressed toggling, active styling, and item show/hide.
 */
export function initFilter(
  buttons: NodeListOf<Element>,
  items: NodeListOf<Element>,
  dataAttr: string,
  displayValue: string = 'block',
  animate: boolean = false,
) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      buttons.forEach((b) => {
        const el = b as HTMLElement;
        if (b === btn) {
          el.style.background = 'var(--color-brass)';
          el.style.borderColor = 'var(--color-brass)';
          el.style.color = 'var(--color-warm-white)';
          el.setAttribute('aria-pressed', 'true');
        } else {
          el.style.background = 'transparent';
          el.style.borderColor = 'var(--color-border)';
          el.style.color = 'var(--color-text-dark)';
          el.setAttribute('aria-pressed', 'false');
        }
      });

      // Show/hide items
      items.forEach((item) => {
        const el = item as HTMLElement;
        const match = filter === 'all' || item.getAttribute(dataAttr) === filter;

        if (animate && !prefersReducedMotion) {
          if (!match) {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            el.style.opacity = '0';
            el.style.transform = 'scale(0.95)';
            setTimeout(() => { el.style.display = 'none'; }, 300);
          } else {
            el.style.display = displayValue;
            el.style.opacity = '0';
            el.style.transform = 'scale(0.95)';
            requestAnimationFrame(() => {
              el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              el.style.opacity = '1';
              el.style.transform = 'scale(1)';
            });
          }
        } else {
          el.style.display = match ? displayValue : 'none';
          if (match) el.style.opacity = '1';
        }
      });
    });
  });
}
