
import './App.css';
import { foodData } from './data/foods';
import FoodCard from './components/FoodCard';

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
        
        {/* เปลี่ยนชื่อร้านค้าตามเงื่อนไขข้อ 2 */}
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-2 fw-bold shadow-sm">Premium Dog Food Shop</span>
          <h1 className="display-4 fw-bold text-dark mt-1">
            โฮ่งเอย <span className="text-gradient">Premium PetShop</span>
          </h1>
          <p className="text-muted col-md-6 mx-auto mt-2">
            คัดสรรอาหารสุนัขเกรดพรีเมียม เพื่อสุขภาพที่ดีและอารมณ์ที่แจ่มใสของเจ้าตูบแสนรักของคุณวันนี้
          </p>
          <div className="mx-auto my-3" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px' }}></div>
        </div>

        {/* Grid วางการ์ดสินค้าจัดเรียงสวยงามใช้งานสะดวก */}
        <div className="row mt-4">
          {foodData.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;