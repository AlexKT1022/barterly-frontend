import React, { useMemo } from 'react';

export default function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [4, 8, 12, 16],
  siblingCount = 1,
  showSummary = true,
  showPageSize = true,
  className = '',
}) {
  const pageCount = Math.max(0, Math.ceil(total / (pageSize || 1)));
  const currentPage = Math.min(Math.max(1, page || 1), Math.max(1, pageCount));

  
  const items = useMemo(() => {
    if (pageCount <= 1) return [];

    const range = (start, end) => {
      const out = [];
      for (let i = start; i <= end; i++) out.push(i);
      return out;
    };

    const totalNumbers = siblingCount * 2 + 5; 
    if (pageCount <= totalNumbers) {
      return range(1, pageCount);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, pageCount);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < pageCount - 1;

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, 3 + siblingCount * 2);
      return [...leftRange, 'ellipsis-right', pageCount];
    } else if (showLeftDots && !showRightDots) {
      const rightRange = range(pageCount - (2 + siblingCount * 2), pageCount);
      return [1, 'ellipsis-left', ...rightRange];
    } else {
      const middle = range(leftSibling, rightSibling);
      return [1, 'ellipsis-left', ...middle, 'ellipsis-right', pageCount];
    }
  }, [currentPage, pageCount, siblingCount]);

  if (pageCount <= 1) {
    // optionally render summary only
    return showSummary ? (
      <div className={`flex items-center justify-end text-sm text-gray-500 ${className}`}>
        {total === 0 ? '0 results' : `Showing 1–${Math.min(pageSize, total)} of ${total}`}
      </div>
    ) : null;
  }

  const startIdx = (currentPage - 1) * pageSize + 1;
  const endIdx = Math.min(currentPage * pageSize, total);

  const go = (n) => {
    const clamped = Math.min(Math.max(1, n), pageCount);
    if (clamped !== currentPage) onPageChange?.(clamped);
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between ${className}`}>
      {/* Left: Page size */}
      {showPageSize && onPageSizeChange ? (
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Per page</label>
          <select
            className="border rounded px-2 py-2"
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {pageSizeOptions.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      ) : <div />}

      {/* Center: Pager */}
      <nav className="flex items-center justify-center gap-1" aria-label="Pagination">
        <button
          className="px-3 py-2 border rounded disabled:opacity-50"
          onClick={() => go(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          ‹ Prev
        </button>

        {items.map((it, idx) => {
          if (typeof it === 'string') {
            return (
              <span key={`${it}-${idx}`} className="px-2 select-none text-gray-400">
                …
              </span>
            );
          }
          const active = it === currentPage;
          return (
            <button
              key={it}
              className={`px-3 py-2 border rounded ${
                active ? 'bg-sky-500 text-white border-sky-500' : 'hover:bg-gray-100'
              }`}
              onClick={() => go(it)}
              aria-current={active ? 'page' : undefined}
            >
              {it}
            </button>
          );
        })}

        <button
          className="px-3 py-2 border rounded disabled:opacity-50"
          onClick={() => go(currentPage + 1)}
          disabled={currentPage >= pageCount}
        >
          Next ›
        </button>
      </nav>

      {/* Right: Summary */}
      {showSummary ? (
        <div className="text-sm text-gray-500 text-right">
          {`Showing ${startIdx}–${endIdx} of ${total}`}
        </div>
      ) : <div />}
    </div>
  );
}
