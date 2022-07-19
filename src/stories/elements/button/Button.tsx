import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  mode?: "primary" | "secondary" | "disabled";

  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
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
export const Button = ({
  mode = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center hover:bg-blue-500 hover:text-white w-28 border-0 rounded-full btn-${mode} btn btn-size-${size}`}
    >
      <span className="">{label}</span>
    </button>
  );
};
