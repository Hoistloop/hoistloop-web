export default function AboutCTA() {
  return (
    <div className="flex h-[471px] flex-col items-center justify-center gap-[50px] border-x border-b border-neutral-800 p-20 max-laptop:h-[349px] max-laptop:gap-10 max-laptop:p-[60px]">
      <div className="flex w-full items-center gap-10 max-laptop:gap-[30px]">
        <img
          className="size-[150px] rounded object-cover max-laptop:size-[100px]"
          src="https://place-hold.it/150x150"
          alt="image"
        />
        <div className="flex h-28 flex-col gap-5 max-laptop:gap-[14px]">
          <h4 className="text-left text-3xl font-medium max-laptop:text-2xl">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </h4>
          <p className="text-lg font-normal leading-7 max-laptop:text-base">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>

      <div className="flex h-[111px] w-full flex-row items-center justify-between gap-5 rounded-xl border border-neutral-800 px-10 py-6 max-laptop:rounded-[10px] max-laptop:px-[30px] max-laptop:py-[20px]">
        <span className="text-nowrap text-center text-xl font-normal max-laptop:text-lg">
          Welcome to Hoistloop
        </span>
        <span className="text-nowrap rounded-lg bg-slate-500 px-5 py-[14px] text-xl font-normal max-laptop:rounded-md max-laptop:px-[14px] max-laptop:py-[10px] max-laptop:text-lg">
          Where collaboration, Expertise, and Client-Centricity Intersect to
          Shape the Future of Digital Innovation.
        </span>
        <button className="btn btn-primary">Start Project</button>
      </div>
    </div>
  );
}
