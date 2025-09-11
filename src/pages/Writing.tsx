import { useState } from "react";
import styled from "styled-components";
import { WindowFrame } from "../components/WindowFrame";
import { blogPosts } from "../data/blogPosts";

const DirectoryContainer = styled.div`
  background: white;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
  height: 100%;
`;

const DirectoryHeader = styled.div`
  background: var(--win-gray);
  border-bottom: 1px solid var(--win-gray-dark);
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
`;

const DirectoryPath = styled.div`
  background: white;
  border: 2px inset var(--win-gray);
  padding: 2px 4px;
  flex: 1;
`;

const FileList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  padding: 8px;
  height: calc(100% - 40px);
  overflow-y: auto;
`;

const FileItem = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 4px;
  cursor: pointer;
  user-select: none;
  background: ${(props) =>
    props.selected ? "rgba(0, 0, 255, 0.3)" : "transparent"};
  border: ${(props) =>
    props.selected ? "1px dotted var(--win-blue)" : "1px solid transparent"};

  &:hover {
    background: ${(props) =>
      props.selected ? "rgba(0, 0, 255, 0.3)" : "rgba(0, 0, 255, 0.1)"};
  }
`;

const FileIcon = styled.div`
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 4px;
`;

const FileName = styled.div`
  text-align: center;
  word-wrap: break-word;
  line-height: 1.2;
  max-width: 100px;
  font-size: 11px;
`;

const NotepadWindow = styled.div`
  position: fixed;
  top: 80px;
  left: 100px;
  right: 100px;
  bottom: 120px;
  background: var(--window-bg);
  border: 2px outset var(--win-gray);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  font-family: "MS Sans Serif", sans-serif;
  z-index: 200;
`;

const NotepadTitleBar = styled.div`
  height: 18px;
  background: linear-gradient(90deg, #0000ff 0%, #8080ff 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  font-size: 11px;
  font-weight: bold;
  cursor: move;
  user-select: none;
`;

const NotepadContent = styled.div`
  flex: 1;
  background: white;
  border: 2px inset var(--win-gray);
  margin: 2px;
  overflow: auto;
  padding: 8px;
  font-family: "Courier New", monospace;
  font-size: 12px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

const CloseButton = styled.button`
  width: 16px;
  height: 14px;
  border: 1px outset var(--win-gray);
  background: var(--win-gray);
  color: var(--win-black);
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:hover {
    background: var(--win-gray-light);
  }

  &:active {
    border: 1px inset var(--win-gray);
  }
`;

// Text file icon
const textFileIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect x="4" y="2" width="20" height="26" fill="white" stroke="#808080" stroke-width="1"/>
  <rect x="6" y="4" width="16" height="22" fill="#ffffff"/>
  <line x1="8" y1="8" x2="20" y2="8" stroke="#000000" stroke-width="1"/>
  <line x1="8" y1="12" x2="18" y2="12" stroke="#000000" stroke-width="1"/>
  <line x1="8" y1="16" x2="20" y2="16" stroke="#000000" stroke-width="1"/>
  <line x1="8" y1="20" x2="16" y2="20" stroke="#000000" stroke-width="1"/>
</svg>
`)}`;

const notepadIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <rect x="2" y="1" width="10" height="13" fill="white" stroke="#808080" stroke-width="1"/>
  <rect x="3" y="2" width="8" height="11" fill="#ffffff"/>
  <line x1="4" y1="4" x2="10" y2="4" stroke="#000000" stroke-width="1"/>
  <line x1="4" y1="6" x2="9" y2="6" stroke="#000000" stroke-width="1"/>
  <line x1="4" y1="8" x2="10" y2="8" stroke="#000000" stroke-width="1"/>
</svg>
`)}`;

export const Writing = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [openFile, setOpenFile] = useState<(typeof blogPosts)[0] | null>(null);

  const handleFileClick = (post: (typeof blogPosts)[0]) => {
    setSelectedFile(post.id);
  };

  const handleFileDoubleClick = (post: (typeof blogPosts)[0]) => {
    setOpenFile(post);
  };

  const closeNotepad = () => {
    setOpenFile(null);
  };

  const formatFileName = (title: string) => {
    return title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() + ".txt";
  };

  return (
    <>
      <WindowFrame
        title="Text Files - Windows Explorer"
        icon={notepadIcon}
        showMenuBar={false}
      >
        <DirectoryContainer>
          <DirectoryHeader>
            Address:
            <DirectoryPath>C:\My Documents\Blog Posts</DirectoryPath>
          </DirectoryHeader>
          <FileList>
            {blogPosts.map((post) => (
              <FileItem
                key={post.id}
                selected={selectedFile === post.id}
                onClick={() => handleFileClick(post)}
                onDoubleClick={() => handleFileDoubleClick(post)}
              >
                <FileIcon style={{ backgroundImage: `url(${textFileIcon})` }} />
                <FileName>{formatFileName(post.title)}</FileName>
              </FileItem>
            ))}
          </FileList>
        </DirectoryContainer>
      </WindowFrame>

      {openFile && (
        <NotepadWindow>
          <NotepadTitleBar>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage: `url(${notepadIcon})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {formatFileName(openFile.title)} - Notepad
            </div>
            <CloseButton onClick={closeNotepad}>×</CloseButton>
          </NotepadTitleBar>
          <NotepadContent>
            {openFile.title}
            Date:{" "}
            {new Date(openFile.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            Tags: {openFile.tags.join(", ")}
            {openFile.excerpt}
            ---
            {openFile.content}
          </NotepadContent>
        </NotepadWindow>
      )}
    </>
  );
};
