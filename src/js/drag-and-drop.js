document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.work__item');
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;
  let draggedItem = null;

  items.forEach(item => {
    item.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      draggedItem = item;

      initialLeft = item.offsetLeft;
      initialTop = item.offsetTop;
    });

    item.addEventListener('mousemove', e => {
      if (isDragging && draggedItem) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        draggedItem.style.left = `${initialLeft + deltaX}px`;
        draggedItem.style.top = `${initialTop + deltaY}px`;
      }
    });

    item.addEventListener('mouseup', () => {
      if (isDragging && draggedItem) {
        isDragging = false;

        initialLeft = 0;
        initialTop = 0;
      }
    });

    item.addEventListener('mouseleave', () => {
      if (isDragging && draggedItem) {
        isDragging = false;

        initialLeft = 0;
        initialTop = 0;
      }
    });
  });
});
