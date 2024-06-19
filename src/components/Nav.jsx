import checkWhiteIcon from '../assets/check-white-icon.png'
import truckIcon from '../assets/truck-white.png'
import heartIcon from '../assets/heart-white.png'
import checkIcon from '../assets/check-circle.png'


function Nav() {
  return (
    <div className="navContainer">
      
      <ul className="flex flex-row gap-20 text-white justify-center pt-3">
        <div className='md:hidden'>
          <img className='w-5 h-5' src={checkIcon} alt='back-icon'/>
        </div>
        <li className='flex flex-row gap-1 md:block'>
          <img src={checkWhiteIcon} alt='check-icon' className='w-5 h-5' />
          <p>30-DAY SATISFACTION GUARANTEE</p>
        </li>
        <li className='flex flex-row gap-1 hidden md:flex'>
          <img src={truckIcon} alt='check-icon' className='w-5 h-5' />
          <p>Free delivery on orders over $40.00</p>
        </li>
        <li className='flex flex-row gap-1 hidden md:flex'>
          <img src={heartIcon} alt='check-icon' className='w-5 h-5' />
          <p>50.000+ HAPPY CUSTOMERS</p>
        </li>
        <li className='flex flex-row gap-1 hidden md:flex'>
          <img src={checkIcon} alt='check-icon' className='w-5 h-5' />
          <p>100% Money Back Guarantee</p>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
