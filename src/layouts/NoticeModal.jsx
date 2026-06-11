import React, { useState, useEffect } from 'react';
import styles from './AdminPage.module.css';

function NoticeModal({ notice, onClose, onSave, isReadOnly = false }) {
    // DB BOARD 테이블의 물리명 적용
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContent, setBoardContent] = useState('');
    const [isPinned, setIsPinned] = useState(false); // (프론트 전용 노출 상태)

    useEffect(() => {
        if (notice) {
            setBoardTitle(notice.boardTitle);
            setBoardContent(notice.boardContent || '');
            setIsPinned(notice.isPinned);
        } else {
            setBoardTitle('');
            setBoardContent('');
            setIsPinned(false);
        }
    }, [notice]);

    const handleSubmit = () => {
        if (!boardTitle.trim()) { alert("제목을 입력해주세요."); return; }
        if (!boardContent.trim()) { alert("내용을 입력해주세요."); return; }
        onSave({ boardTitle, boardContent, isPinned });
    };

    return (
        <div className={styles['modal-overlay']}>
            <div className={styles.modal} style={{ width: '600px' }}>
                <div className={styles['modal-header']}>
                    <h3>{isReadOnly ? '공지사항 상세' : (notice ? '공지사항 수정' : '새 공지사항 작성')}</h3>
                    <button className={styles['close-btn']} onClick={onClose}>✕</button>
                </div>

                <div className={styles['modal-body']}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#343A40' }}>제목</label>
                        <input
                            type="text"
                            value={boardTitle}
                            onChange={(e) => setBoardTitle(e.target.value)}
                            placeholder="공지사항 제목을 입력하세요."
                            className={styles['search-input']}
                            style={{ width: '100%', boxSizing: 'border-box', backgroundColor: isReadOnly ? '#e9ecef' : '#fff' }}
                            disabled={isReadOnly}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#343A40' }}>내용</label>
                        <textarea
                            value={boardContent}
                            onChange={(e) => setBoardContent(e.target.value)}
                            placeholder="공지사항 내용을 입력하세요."
                            style={{
                                width: '100%',
                                height: '200px',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #CED4DA',
                                resize: 'none',
                                boxSizing: 'border-box',
                                fontFamily: 'inherit',
                                backgroundColor: isReadOnly ? '#e9ecef' : '#fff'
                            }}
                            disabled={isReadOnly}
                        />
                    </div>

                    {!isReadOnly && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <label style={{ fontWeight: 'bold', color: '#343A40', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={isPinned}
                                    onChange={(e) => setIsPinned(e.target.checked)}
                                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                />
                                이 공지사항을 메인 화면 상단에 노출합니다.
                            </label>
                        </div>
                    )}
                </div>

                <div className={styles['modal-footer']}>
                    {isReadOnly ? (
                        <button className={styles['primary-btn']} onClick={onClose}>닫기</button>
                    ) : (
                        <>
                            <button className={styles['outline-btn']} onClick={onClose}>취소</button>
                            <button className={styles['primary-btn']} onClick={handleSubmit}>
                                {notice ? '수정 완료' : '등록 완료'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NoticeModal;