import { useEffect, useState } from "react";

const ContactPage = () => {
  const [contactPage, setContactPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://test-os-amihanovica-os.cms.skole.hr/wp-json/wp/v2/pages?search=Kontakt")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setContactPage(data[0]); // Uzimamo prvu pronađenu stranicu "Kontakt"
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching contact page:", error));
  }, []);

  if (loading) return <p>Učitavanje...</p>;
  if (!contactPage) return <p>Stranica nije pronađena.</p>;

  return (
    <div>
      <h1>{contactPage.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: contactPage.content.rendered }} />
    </div>
  );
};

export default ContactPage;


  