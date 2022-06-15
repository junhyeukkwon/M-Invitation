import React from 'react'

const modalZipcode = (props) => {
  return (
    <div>
        <Dialog
            classes={{
            root: classes.center,
            paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
        <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
        >
        <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
        >
        <Close className={classes.modalClose} />
        </IconButton>
        <h4 className={classes.modalTitle}>
        입력 값 확인하기
        </h4>
        </DialogTitle>
        <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
        >
            <p>
            현재 입력하신 정보에 대해 한번더 확인해주시고,
            맞다면 확인 완료 버튼을 눌러 주세요.
            </p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
            <Button color="transparent" simple>
            확인 완료
            </Button>
            <Button
            onClick={() => setClassicModal(false)}
            color="danger"
            simple
            >
            한번 더 확인하기
            </Button>
        </DialogActions>
        </Dialog>
    </div>
  )
}

export default modalZipcode