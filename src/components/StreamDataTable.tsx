import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StreamData {
  id: number;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const StreamDataTable: React.FC<{ initialData: StreamData[] }> = ({
  initialData,
}) => {
  const [filteredStreamData, setFilteredStreamData] = useState(initialData);
  const [sortBy, setSortBy] = useState<keyof StreamData | null>(null);
  const [sortAscending, setSortAscending] = useState(true);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = initialData.filter(
      (item) =>
        item.songName.toLowerCase().includes(searchTerm) ||
        item.artist.toLowerCase().includes(searchTerm)
    );
    setFilteredStreamData(filtered);
  };

  const handleSort = (column: keyof StreamData) => {
    if (sortBy === column) {
      setSortAscending(!sortAscending);
    } else {
      setSortBy(column);
      setSortAscending(true);
    }
  };

  const sortedData = sortBy
    ? [...filteredStreamData].sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];
        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortAscending
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }
        return sortAscending
          ? (valueA as number) - (valueB as number)
          : (valueB as number) - (valueA as number);
      })
    : filteredStreamData;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search by song name or artist"
            onChange={handleSearch}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort("songName")}>
                Song Name{" "}
                {sortBy === "songName" &&
                  (sortAscending ? (
                    <ArrowUpIcon className="inline h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4" />
                  ))}
              </TableHead>
              <TableHead onClick={() => handleSort("artist")}>
                Artist{" "}
                {sortBy === "artist" &&
                  (sortAscending ? (
                    <ArrowUpIcon className="inline h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4" />
                  ))}
              </TableHead>
              <TableHead onClick={() => handleSort("dateStreamed")}>
                Date Streamed{" "}
                {sortBy === "dateStreamed" &&
                  (sortAscending ? (
                    <ArrowUpIcon className="inline h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4" />
                  ))}
              </TableHead>
              <TableHead onClick={() => handleSort("streamCount")}>
                Stream Count{" "}
                {sortBy === "streamCount" &&
                  (sortAscending ? (
                    <ArrowUpIcon className="inline h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="inline h-4 w-4" />
                  ))}
              </TableHead>
              <TableHead>User ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.songName}</TableCell>
                <TableCell>{item.artist}</TableCell>
                <TableCell>{item.dateStreamed}</TableCell>
                <TableCell>{item.streamCount.toLocaleString()}</TableCell>
                <TableCell>{item.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StreamDataTable;
