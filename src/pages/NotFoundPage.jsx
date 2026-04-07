import AppButton from "@/components/AppButton";
import { useNavigate } from "react-router-dom"; // Giả sử bạn dùng react-router-dom

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        <h1 className="font-bold text-7xl md:text-9xl text-primary mb-2">
          404
        </h1>
        
        <h2 className="font-bold text-xl md:text-2xl mb-4">
          Không tìm thấy trang
        </h2>
        
        <p className="text-gray-400 mb-8 leading-relaxed">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>

  
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <AppButton
            variant="default"
            className="w-full md:w-auto px-8"
            onClick={() => navigate("/")}
          >
            Về trang chủ
          </AppButton>
          
          <AppButton
            variant="outline"
            className="w-full md:w-auto px-8"
            onClick={() => navigate(-1)}
          >
            Quay lại
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;