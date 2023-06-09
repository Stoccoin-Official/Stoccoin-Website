import Navbar from "../components/Navbar";

const Cryptocurrencies = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-8 mt-12 underline">
        Cryptocurrencies
      </h1>
      <div className="max-w-3xl mx-auto text-left pb-10">
        <h1 className="text-3xl font-bold mb-4 underline">
          Blockchain and Cryptocurrency
        </h1>
        <h2 className="text-2xl font-bold mb-2 underline">
          What is Blockchain?
        </h2>
        <p className="text-lg mb-4">
          Blockchain is a technology that enables the secure sharing of
          information. Transactions are recorded in an account book called a
          ledger. A blockchain is a type of distributed database or ledger. The
          power to update a blockchain is distributed between the nodes, or
          participants, of a public or private computer network. This is known
          as <i>distributed ledger technology</i>, or DLT. Nodes are
          incentivized with digital tokens or currency to make updates to
          blockchains. Blockchain allows for the permanent, immutable, and
          transparent recording of data and transactions. This, in turn, makes
          it possible to exchange anything that has value, whether that is a
          physical item or something less tangible.
        </p>
        <p className="text-lg mb-4">
          A blockchain has three central attributes:
        </p>
        <ol className="list-decimal ml-6 mb-6">
          <li className="text-lg mb-4">
            First, a blockchain database must be{" "}
            <strong className="font-bold">cryptographically secure</strong>. In
            order to access or add data on the database, you need two
            cryptographic keys: a <i>public key</i>, which is basically the
            address in the database, and the <i>private key</i>, which is a
            personal key that must be authenticated by the network.
          </li>
          <li className="text-lg mb-4">
            Next, a blockchain is a digital log or database of transactions,
            meaning it happens{" "}
            <strong className="font-bold">fully online</strong>.
          </li>
          <li className="text-lg mb-4">
            And finally, a blockchain is a database that is{" "}
            <strong className="font-bold">
              shared across a public or private network
            </strong>
            .
          </li>
        </ol>
        <blockquote className="border-l-4 pl-4 italic text-gray-600 text-lg">
          One of the most well-known public blockchain networks is the{" "}
          <i>Bitcoin blockchain</i>. Anyone can open a Bitcoin wallet or become
          a node on the network. Other blockchains may be private networks.
          These are more applicable to banking and fintech, where people need to
          know exactly who is participating, who has access to data, and who has
          a private key to the database. Other types of blockchains include{" "}
          <i>consortium blockchains</i> and <i>hybrid blockchains</i>, both of
          which combine different aspects of public and private blockchains.
        </blockquote>
        <h2 className="text-2xl font-bold mb-2 mt-10 underline">
          How does Blockchain work?{" "}
        </h2>
        <p className="text-lg mb-4">
          A blockchain is a distributed database that maintains a continuously
          growing list of ordered records, called blocks. These blocks are
          linked using cryptography. Each block contains a{" "}
          <i>cryptographic hash</i>
          of the previous block, a <i>timestamp</i>, and <i>transaction data</i>
          . The blockchain collects transaction information and enters it into a
          block, like a cell in a spreadsheet. Once it is full, the information
          is run through an encryption algorithm, which creates a hexadecimal
          number called the hash. The hash is then entered into the following
          block header and encrypted with the other information in the block.
          This creates a series of blocks that are chained together. Altering
          any one block will cause alteration of all subsequent blocks,
          indicating a breach in security. A blockchain is distributed, which
          means multiple copies are saved on many machines, and they must all
          match for it to be valid. Therefore, blockchain technology is
          considered highly secure and protects against tampering, fraud and
          cybercrime. It also saves time and costs as transactions do not need
          to be verified or overseen by a central authority.
        </p>
        <blockquote className="border-l-4 pl-4 italic text-gray-600 text-lg">
          Blockchain technology is considered a major part of Web 3.0
          development. Web3 is an idea for a new iteration of the World Wide Web
          which incorporates concepts such as decentralization, blockchain
          technologies, and token-based economics. It goes by the motto of
          'Read-Write-Own'.
        </blockquote>
        <h2 className="text-2xl font-bold mb-2 mt-10 underline">
          Introduction to Cryptocurrencies
        </h2>
        <p className="text-lg mb-4">
          A cryptocurrency is a digital or virtual currency secured by
          cryptography, which makes it nearly impossible to counterfeit or
          double-spend. Many cryptocurrencies are decentralized networks based
          on blockchain technology. A defining feature of cryptocurrencies is
          that they are generally not issued by any central authority, rendering
          them theoretically immune to government interference or manipulation.
          They enable secure online payments without the use of third-party
          intermediaries. "Crypto" refers to the various encryption algorithms
          and cryptographic techniques that safeguard these entries, such as
          elliptical curve encryption, public-private key pairs, and hashing
          functions.
        </p>
        <p className="text-lg mb-4">Some popular cryptocurrencies</p>
        <ol className="list-decimal text-lg ml-6 mb-6">
          <li className="mt-2 font-bold">Bitcoin (BTC)</li>
          Bitcoin was the world’s first cryptocurrency, with its origins dating
          back to 2008, and remains the best-known type of crypto. In January
          2022, Bitcoin was the cryptocurrency with the largest market cap, at
          US $896 billion.
          <li className="mt-2 font-bold">Ether(ETH)</li>Ether is the
          cryptocurrency that runs on the <i>Ethereum</i> blockchain. Unlike
          Bitcoin, Ether is uncapped, meaning that an infinite number of coins
          can theoretically be created. Ethereum also supports{" "}
          <strong className="font-bold">smart contracts</strong>, which are
          programs that run on the Ethereum blockchain and are executed
          automatically when certain conditions are met.
          <li className="mt-2 font-bold">Binance Coin (BNB)</li>
          Binance Coin is native to Binance, the world’s largest cryptocurrency
          exchange as of 2021. To ensure its value remains stable, Binance
          destroys or “burns” a fixed percentage of the coins in circulation.
          <li className="mt-2 font-bold">Tether (USDT)</li>
          Tether is a type of <i>stablecoin</i>, designed to have a
          less-volatile price by being linked to an external asset. In this
          case, each coin is backed by an equivalent number of US dollars, which
          keeps it from experiencing the same kind of pricing volatility that
          other cryptocurrencies face.
          <li className="mt-2 font-bold">Solana (SOL)</li>
          SOL is the native coin of the Solana platform, which functions on a
          blockchain system, just like Ethereum and Bitcoin. Solana’s network
          can perform a whopping 50,000 transactions per second, making this
          platform especially attractive to investors looking to trade quickly.
        </ol>
        <h2 className="text-2xl font-bold mb-2 mt-10 underline">
          Pros and Cons of Investing in Cryptocurrency
        </h2>

        <p className="text-lg mb-4">
          Cryptocurrencies were introduced with the intent to revolutionize
          financial infrastructure. As with every revolution, however, there are
          tradeoffs involved. At the current stage of development for
          cryptocurrencies, there are many differences between the theoretical
          ideal of a decentralized system with cryptocurrencies and its
          practical implementation.
        </p>

        <p className="text-lg mb-4">
          Some advantages and disadvantages of cryptocurrencies are as follows:
        </p>

        <h3 className="text-2xl font-bold my-2 underline">Advantages</h3>
        <ol className="list-decimal text-lg ml-6 mb-6">
          <li className="font-bold">Removes single points of failure</li>
          In this system, centralized intermediaries, such as banks and monetary
          institutions, are not necessary to enforce trust and police
          transactions between two parties.
          <li className="mt-2 font-bold">
            Easier to transfer funds between parties
          </li>
          <li className="mt-2 font-bold">Removes third parties</li>
          <li className="mt-2 font-bold">Can be used to generate returns</li>
          Cryptocurrency investments can generate profits. Cryptocurrency
          markets have skyrocketed in value over the past decade, at one point
          reaching almost $2 trillion.
          <li className="mt-2 font-bold">Remittances are streamlined</li>
          Cryptocurrencies serve as intermediate currencies to streamline money
          transfers across borders. A fiat currency is converted to Bitcoin,
          transferred across borders, and subsequently converted to the
          destination fiat currency. This method streamlines the money transfer
          process and makes it cheaper.
        </ol>
        <h3 className="text-2xl font-bold my-2 underline">Disadvantages</h3>
        <ol className="list-decimal text-lg ml-6 mb-6">
          <li className="font-bold">Transactions are pseudonymous</li>
          Though they claim to be an anonymous form of transaction, they leave a
          digital trail that agencies like the Federal Bureau of Investigation
          (FBI) can investigate. This opens up the possibility that governments
          and authorities (and others) can track financial transactions.
          <li className="mt-2 font-bold">
            Pseudonymity allows for criminal uses
          </li>
          <li className="mt-2 font-bold">Have become highly centralized</li>
          In theory, cryptocurrencies are meant to be decentralized, their
          wealth distributed between many parties on a blockchain. In reality,
          ownership is highly concentrated. For example, just 100 addresses hold
          roughly 12% of circulating bitcoin and total value.
          <li className="mt-2 font-bold">Off-chain security issues</li>
          Though cryptocurrency blockchains are highly secure, off-chain
          crypto-related key storage repositories, such as exchanges and
          wallets, can be hacked.
          <li className="mt-2 font-bold">Prices are very volatile</li>
        </ol>
      </div>
    </div>
  );
};

export default Cryptocurrencies;
