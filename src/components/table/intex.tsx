import { useMemo, useState } from "react";

interface SortedListProps {
  numbers: number[];
  filterQuery: string;
}

function SortedList ({ numbers, filterQuery }: SortedListProps) {
  // useMemo será usado para calcular os números filtrados e ordenados
  // somente quando `numbers` ou `filterQuery` mudarem.
  const filteredAndSortedNumbers = useMemo(() => {
    console.log('Calculating filtered and sorted numbers');
    return numbers
      .filter(number => number.toString().includes(filterQuery))
      .sort((a, b) => a - b);
  }, [numbers, filterQuery]);

  return (
    <div>
      <ul>
        {filteredAndSortedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export function DataTableDemo () {
  const [numbers, setNumbers] = useState<number[]>([13, 4, 46, 7, 28, 11, 3]);
  const [query, setQuery] = useState<string>('');
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, autem. Veritatis ab eaque eum similique unde laudantium inventore, magnam qui praesentium repellat eligendi iure quos, cupiditate itaque nostrum? Sunt, deleniti!");

  return(
    <div>
      <h2>BI - basic</h2>
      <p>{text}</p>
      <button onClick={() => setText("amenos")}>ChangeText</button>
      <div>

        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Filter numbers"
        />
        <SortedList numbers={numbers} filterQuery={query} />
      </div>
    </div>
  )
}