import { Code } from 'lucide-react';
export default function MoreAboutMe() {
  return (
    <div className="flexCol gap-y-3 w-full md:w-1/2 lg:w-1/3  bg-black p-4 rounded-sm lg:p-5 xl:p-6 lg:rounded-lg dark:bg-black">
      <div className="flexRow gap-x-2">
        <Code className="border rounded-sm p-1 text-white" />
        <p className="capitalize ty-h3 text-white">Coding Philosophy</p>
      </div>
      <ul className="flexCol gap-y-1 text-white pl-1">
        <li className="flexRow gap-x-3">
          <Code className="w-4 h-4" />
          <p className="ty-body1">Clean and maintainable code</p>
        </li>
        <li className="flexRow gap-x-3">
          <Code className="w-4 h-4" />
          <p className="ty-body1">Clean and maintainable code</p>
        </li>
        <li className="flexRow gap-x-3">
          <Code className="w-4 h-4" />
          <p className="ty-body1">Clean and maintainable code</p>
        </li>
        <li className="flexRow gap-x-3">
          <Code className="w-4 h-4" />
          <p className="ty-body1">Clean and maintainable code</p>
        </li>
      </ul>
    </div>
  );
}
