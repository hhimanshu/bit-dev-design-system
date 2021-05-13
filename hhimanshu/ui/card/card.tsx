import React from 'react';
import { Button } from "@hhimanshu/devatwork.showcase.ui.button"

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Card({ text }: CardProps) {
  return (
    <div>
      {text}
      <Button text={'Click Here'}/>
    </div>
  );
}
