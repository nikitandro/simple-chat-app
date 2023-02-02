import React from 'react';

export function useChatAutoScroll<T extends Element, DependencyType>(
  dependency: DependencyType
) {
  const ref = React.useRef<T>({} as T);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dependency]);
  return ref;
}
