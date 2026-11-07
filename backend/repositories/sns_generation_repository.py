class SnsGenerationRepository:
    def create(self, db, history):

        db.add(history)

        db.commit()

        db.refresh(history)

        return history
