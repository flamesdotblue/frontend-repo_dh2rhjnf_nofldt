export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-extrabold">DairyMilk</h3>
          <p className="mt-3 text-gray-400 max-w-md">
            Creamy, joyful, and responsibly made. From classic bars to bold
            flavors, we craft moments worth savoring.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#products">Products</a></li>
            <li><a className="hover:text-white" href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li><a className="hover:text-white" href="#">Help Center</a></li>
            <li><a className="hover:text-white" href="#">Shipping</a></li>
            <li><a className="hover:text-white" href="#">Returns</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} DairyMilk Co. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
