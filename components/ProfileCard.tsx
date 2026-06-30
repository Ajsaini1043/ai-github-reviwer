
interface Props {
  user: {
    name: string;
    login: string;
    avatar_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
  };
}

export default function ProfileCard({ user }: Props) {
  return (
    <div className="mt-8 bg-white text-black p-6 rounded-xl w-full max-w-md shadow-lg">

      <div className="flex flex-col items-center">

        <img
  src={user.avatar_url}
  width={100}
  height={100}
  alt={user.login}
  className="rounded-full"
/>

        <h2 className="text-2xl font-bold mt-4">
          {user.name}
        </h2>

        <p className="text-gray-500">
          @{user.login}
        </p>

        <p className="text-center mt-3">
          {user.bio}
        </p>

      </div>


      <div className="flex justify-around mt-6">

        <div className="text-center">
          <h3 className="font-bold">
            {user.public_repos}
          </h3>
          <p>Repos</p>
        </div>


        <div className="text-center">
          <h3 className="font-bold">
            {user.followers}
          </h3>
          <p>Followers</p>
        </div>


        <div className="text-center">
          <h3 className="font-bold">
            {user.following}
          </h3>
          <p>Following</p>
        </div>

      </div>


      <a
        href={user.html_url}
        target="_blank"
        className="block text-center mt-6 bg-black text-white py-2 rounded-lg"
      >
        View GitHub Profile
      </a>


    </div>
  );
}