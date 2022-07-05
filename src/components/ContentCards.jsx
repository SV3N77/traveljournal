export default function ContentCards({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="flex flex-row gap-6 shadow-md rounded-md  ">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover rounded-md max-h-80 aspect-[3/4] "
      />
      <div className="flex flex-col mt-4 gap-3 grow-1">
        <div className="flex flex-row gap-3 items-center">
          <img src="./images/pin.svg" alt="pin" className="w-4 h-4" />
          <div className="text-lg">{location}</div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-400"
          >
            View On Google Maps
          </a>
        </div>
        <div className="text-3xl font-bold">{title}</div>

        <div className="font-bold">
          {startDate} - {endDate}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
