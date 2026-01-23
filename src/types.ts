import React from 'react';

export type ListItem = {
  id: string | number;
  name?: string;
  // Allow additional consumer-provided fields
  [key: string]: unknown;
};

export type RenderItem = (args: {item: ListItem}) => React.ReactNode;
