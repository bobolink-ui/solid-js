import { Component } from 'solid-js';

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: Component<ButtonProps> = ({ label, backgroundColor }) => {
  return (
    <button type="button" style={{ 'background-color': backgroundColor }}>
      {label}
    </button>
  );
};
