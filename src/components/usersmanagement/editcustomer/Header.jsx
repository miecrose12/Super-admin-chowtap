import { Link } from 'react-router-dom';

const Icon = ({ name, className }) => {
  switch (name) {
    case 'arrow-left':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      );
    case 'location':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      );
    case 'edit':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    case 'suspend':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      );
    default:
      return null;
  }
};

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#151515] p-4 rounded-xl gap-6 shadow-md border border-[#222]">
      <div className="flex items-center gap-4">
        <Link to="/users">
          <button className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#1c1c1c] border border-[#333] rounded-md hover:bg-[#2a2a2a] transition-colors">
            <Icon name="arrow-left" className="w-4 h-4 text-neutral-400" />
          </button>
        </Link>
        <div className="w-14 h-14 shrink-0 bg-white text-black rounded-lg font-bold text-xl flex items-center justify-center">
          SJ
        </div>
        <div className="flex flex-col">
          <h1 className="text-[22px] font-bold text-white leading-tight mb-1">Sarah Jane</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Icon name="mail" className="w-3.5 h-3.5 text-[#e86b35]" />
              sarahjane@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="phone" className="w-3.5 h-3.5 text-[#e86b35]" />
              +234 706-786-7869
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="location" className="w-3.5 h-3.5 text-[#e86b35]" />
              McPherson University
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <Link
          to="/users/edit-customer"
          className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-[#333]"
        >
          <Icon name="edit" className="w-4 h-4" />
          Edit Customer
        </Link>

        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#7E2B17] hover:bg-[#5a2020] text-[#ff6b6b] px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-[#6a2020]">
          <Icon name="suspend" className="w-4 h-4" />
          Suspend User
        </button>
      </div>
    </div>
  );
};

export default Header;