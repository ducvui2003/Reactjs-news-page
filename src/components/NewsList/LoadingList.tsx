import React, { ComponentType, ReactNode, useState } from 'react';

interface LoadingList<T> {
  isLoading: boolean;
  data: T[];
  renderItem: (item: T, isLoading: boolean, index: number) => ReactNode;
  wrapperComponentRenderItem?: ComponentType<{ children: ReactNode }>;
  fakeItemCount?: number;
}

function LoadingList<T>({
  isLoading,
  data,
  renderItem,
  wrapperComponentRenderItem: WrapperComponent,
  fakeItemCount = 10,
}: LoadingList<T>) {
  const items =
    data && data.length > 0
      ? data
      : Array.from({ length: fakeItemCount }).map(() => ({}) as T);
  return (
    <>
      {items.map((item: T, index) => {
        const renderedItem = renderItem(item, isLoading, index);

        if (WrapperComponent) {
          return (
            <WrapperComponent key={index}>{renderedItem}</WrapperComponent>
          );
        }

        return <React.Fragment key={index}>{renderedItem}</React.Fragment>;
      })}
    </>
  );
}

export default LoadingList;
