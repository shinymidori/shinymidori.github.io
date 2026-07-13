import coverImage from '../../../assets/img/Homepage.png'

export default function Home() {
    console.log("Home page loaded");
    return (
        <div className="text-center p-4">
            <h1>Welcome to The Honest Can!</h1><br />
            <p>
                <strong>The Honest Can</strong> is a platform where you can explore everything about cans for our furry friends.
                Each listing includes indredients, prices, and gums, etc.. Logged-in users can also leave their own reviews.
            </p>
            <img
                src={coverImage}
                alt="The Honest Can hompage photo, a black cat with green eyes"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", margin: "20px 0" }}
            />
            <h2> How to feed your cat?</h2>
            <p>Learn more about what cats need on the{" "}
                <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat">Advices from Cornell</a>.
            </p>

            <h2>Let's make a list to see waht we need</h2>
            <ul>
                <li>50–70% protein</li>
                <li>20–40% fat</li>
                <li>1–10% carbohydrates</li>
            </ul>
            <h2>Recommend some wet food that my cat likes</h2>
            <dl>
                <dt>Feline Natural</dt>
                <dd>A New Zealand brand that produces high-meat cat food.</dd>

                <dt>RAWZ</dt>
                <dd>A pet food brand focused on minimally processed ingredients.</dd>
                <dt>Tiki Cat</dt>
                <dd>A brand offering wet food with fish, poultry, and meat recipes.</dd>
            </dl>

        </div>
    );
}