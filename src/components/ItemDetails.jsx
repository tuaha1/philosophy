import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function Item() {
  const { id } = useParams();
  const date = data.find((object) => {
    return object.name === id;
  });
  return (
    <div>
      <header style={{ paddingTop: "15px", paddingBottom: "15px" }}>
        <h1> {id}</h1>
      </header>
      <div id="main">
        <h3>
          René Descartes (/deɪˈkɑːrt/ or UK: /ˈdeɪkɑːrt/; French: [ʁəne dekaʁt]
          (listen); Latinized: Renatus Cartesius;[note 3][15] 31 March 1596 – 11
          February 1650[16][17][18]: 58 ) was a French philosopher,
          mathematician, scientist and lay Catholic who invented analytic
          geometry, linking the previously separate fields of geometry and
          algebra. He spent a large portion of his working life in the Dutch
          Republic, initially serving the Dutch States Army of Maurice of
          Nassau, Prince of Orange and the Stadtholder of the United Provinces.
          One of the most notable intellectual figures of the Dutch Golden
          Age,[19] Descartes is also widely regarded as one of the founders of
          modern philosophy. Many elements of Descartes' philosophy have
          precedents in late Aristotelianism, the revived Stoicism of the 16th
          century, or in earlier philosophers like Augustine. In his natural
          philosophy, he differed from the schools on two major points: first,
          he rejected the splitting of corporeal substance into matter and form;
          second, he rejected any appeal to final ends, divine or natural, in
          explaining natural phenomena.[20] In his theology, he insists on the
          absolute freedom of God's act of creation. Refusing to accept the
          authority of previous philosophers, Descartes frequently set his views
          apart from the philosophers who preceded him. In the opening section
          of the Passions of the Soul, an early modern treatise on emotions,
          Descartes goes so far as to assert that he will write on this topic
          "as if no one had written on these matters before." His best known
          philosophical statement is "cogito, ergo sum" ("I think, therefore I
          am"; French: Je pense, donc je suis), found in Discourse on the Method
          (1637; in French and Latin) and Principles of Philosophy (1644, in
          Latin).[note 4] Descartes has often been called the father of modern
          philosophy, and is largely seen as responsible for the increased
          attention given to epistemology in the 17th century.[21][note 5] He
          laid the foundation for 17th-century continental rationalism, later
          advocated by Spinoza and Leibniz, and was later opposed by the
          empiricist school of thought consisting of Hobbes, Locke, Berkeley,
          and Hume. The rise of early modern rationalism – as a highly
          systematic school of philosophy in its own right for the first time in
          history – exerted an immense and profound influence on modern Western
          thought in general, with the birth of two influential rationalistic
          philosophical systems of Descartes (Cartesianism) and Spinoza
          (Spinozism). It was the 17th-century arch-rationalists like Descartes,
          Spinoza and Leibniz who have given the "Age of Reason" its name and
          place in history. Leibniz, Spinoza,[22] and Descartes were all
          well-versed in mathematics as well as philosophy, and Descartes and
          Leibniz contributed greatly to science as well.
        </h3>
      </div>
    </div>
  );
}

export default Item;
