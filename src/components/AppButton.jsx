import { Button } from "@/components/ui/button";
import { Plus, Download, Loader2 } from "lucide-react";
import { VscTrash } from "react-icons/vsc";
const AppButton = ({ children, iconType, isLoading, className, ...props }) => {
  const icons = {
    add: <Plus className="mr-2 h-4 w-4" />,
    export: <Download className="mr-2 h-4 w-4" />,
    delete: <VscTrash className="mr-2 h-4 w-4" />
  };

  return (
    <Button
      {...props}
      disabled={isLoading || props.disabled}
      // Định nghĩa style cá nhân hóa ở đây
      className={`cursor-pointer rounded-xl font-bold transition-all active:scale-95 ${className}`}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icons[iconType]}
      {children}
    </Button>
  );
};

export default AppButton;