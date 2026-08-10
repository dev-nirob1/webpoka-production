const Map = () => {
  return (
    <div className="h-[450px] w-full overflow-hidden rounded-lg shadow-box">
<iframe
  src="https://www.google.com/maps?q=Webpoka+Mirpur+Dhaka&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Webpoka Office Location"
/>
    </div>
  );
};

export default Map;