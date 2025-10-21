function MobileIconBox() {
  const iconBoxes = [
    {
      icon: "mail",
      title: "vignettesinsights@gmail.com",
      link: "/documentation",
    },

    {
      icon: "call",
      title: "+2347939594474",
      link: "/global-reach",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {iconBoxes.map((iconbox) => (
        <div
          className="group flex cursor-pointer flex-row items-center gap-3"
          key={iconbox.title}
        >
          <span className="material-icons text-lg text-stone-400">
            {iconbox.icon}
          </span>
          <span className="text-[13px] tracking-wide text-stone-400 hover:text-white">
            {iconbox.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MobileIconBox;
