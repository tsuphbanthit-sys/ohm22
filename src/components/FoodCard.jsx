

const FoodCard = ({ food }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 food-card-3d border-0">
        
        {/* เลเยอร์ป้ายสถานะ (สินค้าขายดี / พร้อมขาย) */}
        <div className="card-badges">
          {food.isBestSeller && (
            <span className="badge bg-danger custom-badge shadow-sm">🔥 สินค้าขายดี</span>
          )}
          {food.isReady && food.stock > 0 ? (
            <span className="badge bg-success custom-badge shadow-sm ms-1">✅ พร้อมขาย</span>
          ) : (
            <span className="badge bg-secondary custom-badge shadow-sm ms-1">❌ สินค้าหมด</span>
          )}
        </div>

        {/* รูปภาพสินค้าจาก Framework & URL */}
        <div className="img-container">
          <img 
            src={food.image} 
            className="card-img-top object-fit-cover" 
            alt={food.name}
            style={{ height: "220px" }}
          />
        </div>

        {/* เนื้อหาภายในการ์ด */}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bold text-dark mb-2">{food.name}</h5>
            <p className="card-text text-muted small mb-3">
              คงเหลือในคลัง: <span className={`fw-bold ${food.stock <= 5 ? 'text-danger' : 'text-primary'}`}>{food.stock} ชิ้น</span>
            </p>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fs-4 fw-bold text-gradient">{food.price} ฿</span>
            <button className="btn btn-order px-4 rounded-pill shadow-sm" disabled={food.stock === 0}>
              {food.stock > 0 ? 'สั่งซื้อเลย' : 'หมดชั่วคราว'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;